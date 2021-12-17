import program from 'commander';
import path from 'path';
import { execSync } from 'child_process';
import chalk from 'chalk';
import fs from 'fs';
import pushHandle from './pushHandle/index.js';
import publishHandle from './publishHandle/index.js';
import checkNpm from './utils/checkNpm.js';

const packageJson = require('../package.json');
const _Desc = '\n' +
  '                                _  _                  _ \n' +
  '                               (_)| |                | |\n' +
  '__  __  ___  ___  ______   ___  _ | |_   ___    ___  | |\n' +
  '\\ \\/ / / _ \\/ __||______| / __|| || __| / _ \\  / _ \\ | |\n' +
  ' >  < |  __/\\__ \\        | (__ | || |_ | (_) || (_) || |\n' +
  '/_/\\_\\ \\___||___/         \\___||_| \\__| \\___/  \\___/ |_|\n' +
  '                                                        \n';

// 检查更新
checkNpm(packageJson.version);

program
  .description(_Desc)
  .version(packageJson.version, '-v, --version')
  .option('-i, --init', '工具初始化')
  .action((options) => {
    if (options.init) {
      console.log(_Desc);
      console.log(chalk.yellow('开始初始化...'));
      // husky
      fs.access('./.husky', fs.constants.F_OK, (err) => {
        if (err) {
          execSync('npx husky install');
          execSync('npx husky add .husky/commit-msg "npx --no-install commitlint --edit "$1""');
        }
      });

      let copyArray = [];
      // 复制commitlit文件
      const from = path.resolve(__dirname, '../commitlint.config.js');
      const to = path.join(process.cwd(), './commitlint.config.js');

      copyArray.push(fs.promises.copyFile(from, to, fs.constants.COPYFILE_EXCL));

      // 复制ciToolConfig
      const from2 = path.resolve(__dirname, '../ciToolConfig.js');
      const to2 = path.join(process.cwd(), './ciToolConfig.js');

      copyArray.push(fs.promises.copyFile(from2, to2, fs.constants.COPYFILE_EXCL));

      Promise.allSettled(copyArray).then((arr) => {
        // check
        const hasErrorObj = arr.find((i) => {
          return i.status == 'rejected' && i.reason.code !== 'EEXIST';
        });
        if (hasErrorObj) {
          console.error(`复制失败:${hasErrorObj.reason}`);
        } else {
          console.log(chalk.green('初始化成功！'));
        }
      });

    }
  });

// git add + commit
const baseInit = async (skipTips = '') => {
  console.log(chalk.yellow('git add...'));
  execSync('git add .');

  console.log(chalk.green('Git status 结果:'));
  execSync('git status -s', { stdio: [1, 2] });
  console.log(chalk.green('根据git status内容填写commit-msg:'));

  // 填commit
  const commitHandle = await import('./commitHandle/index.js');
  const resBase = await commitHandle.default()
  // console.log('resBase', resBase);
  if (resBase && resBase.message.indexOf('No files added to staging') != -1) {
    console.log(`无需commit, ${skipTips} continue！`);
  } else if (resBase) {
    throw resBase;
    process.exit(-1);
  }

  console.log(chalk.green('\ngit commit成功！'));
};

// commit
const actionFnC = (type) => {
  // init
  baseInit();
};
program
  .command('commit')
  .description('标准化commit')
  .action(actionFnC);

// push
const actionFnP = async (type, cmd) => {
  // init
  await baseInit('push');

  // pull
  console.log(chalk.yellow('git pull...'));
  execSync('git pull', { stdio: [1, 2] }); // 测试用

  // push
  pushHandle(type);
};
program
  .command('push [type]')
  .description('标准化push')
  .action(actionFnP);

// publish
const actionFnPl = async (type, cmd) => {
  // init
  await baseInit('publish');

  // pull
  console.log(chalk.yellow('git pull...'));
  execSync('git pull', { stdio: [1, 2] }); // 测试用

  // publish
  if (cmd.uc || (!cmd.uc && !cmd.testing)) { // 只有uc环境和不定义环境时才更新版本号
    // const publishHandle = await import('./publishHandle/index.js');
    await publishHandle(type);
  }

  // push
  pushHandle(type);

  console.log(chalk.green('源码发版成功！\n'));

  // release 打包部署
  if (cmd.uc || cmd.testing) {
    const releaseHandle = await import('./releaseHandle/index.js');
    await releaseHandle.default(type, cmd.uc ? 'uc' : 'testing');
  }

};
program
  .command('publish <type>')
  .description('需要选择发版环境（testing或uc）和打包类型（h5或mini）')
  .option('-t, --testing', 'testing部署环境')
  .option('-u, --uc', 'uc部署环境')
  .action(actionFnPl);

program.parse(process.argv);
