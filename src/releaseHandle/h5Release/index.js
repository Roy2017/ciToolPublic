import path from 'path';
import fs from 'fs';
import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
import { execSync } from 'child_process';
import 'colors';
import getConfig from '../../utils/getConfig.js';
import { getCommitMsg } from '../../utils/gitHandle.js';
import moveFile from './helper/moveFile';
import copyFn from './helper/copyFn';
import checkGit from './helper/checkGit';
import getGitPath from '../../utils/getGitPath';

const cwd = process.cwd();
const myConfig = getConfig();
const fileDir = path.join(cwd, '/dist');
const releaseDir = path.join(cwd, '/release');

const actionFn = async (_env) => {
  const { h5Ci } = myConfig;
  console.log('start build');
  const startTime = Date.now();
  execSync(h5Ci.cmd.build || 'npm run build', { stdio: [0, 1, 2], env: _env }); // 测试用
  console.log('build end, ', `build take ${Date.now() - startTime}ms`.green);

  // 查看是否已经配置git
  checkGit(cwd, h5Ci.releaseConfig);

  let hasRelease = true;
  try {
    // 存在
    fs.accessSync(releaseDir);
  } catch (err) {
    // 不存在
    hasRelease = false;
  }
  if (hasRelease) {
    // 清空release文件夹
    console.log('GitBasePath:', getGitPath().gitPath);
    execSync('find ./ -type f -not -path \'**/.git/**\' | xargs rm -rf', { cwd: releaseDir, shell: getGitPath().gitPath });
  }

  let isFile = true;
  try {
    // 存在
    fs.accessSync(`${fileDir}/static`);
  } catch (err) {
    // 不存在
    isFile = false;
  }
  // console.log('!!!', isFile);
  if (isFile) {
    //  压缩图片操作开始
    copyFn(`${fileDir}/static`, `${fileDir}/temp`);
    await imagemin(['./dist/temp/*.{jpg,png}'], {
      destination: `${fileDir}/temp`,
      plugins: [
        imageminJpegtran({ quality: [0.5, 0.5] }),
        imageminPngquant({ quality: [0.5, 0.5] }),
      ],
    });
    moveFile(`${fileDir}/temp`, `${fileDir}/static`);
    execSync('rm -rf ./temp', { cwd: fileDir, shell: getGitPath().gitPath });
    // 压缩图片操作结束
  }

  // 移动文件夹
  moveFile(fileDir, releaseDir);
  console.log('move files done');

  // // git release
  execSync('git add .', { cwd: releaseDir });
  console.log('git add complete!'.green);

  // 获取最近一次有效commit-msg
  const desc = await getCommitMsg();

  try {
    execSync(`git commit -m "${desc}"`, { cwd: releaseDir });
  }catch (e){
    // console.error(e);
  }
  console.log('git commit complete!'.green);

  execSync(`git push origin master:${h5Ci.releaseConfig.branch || 'release'}`, { cwd: releaseDir });
  console.log('git push complete!'.green)

  if (_env.Fetch_Flag == 'testing') {
    // 拉代码
    console.log('进入服务器拉取代码...'.yellow);
    execSync(`ssh testssh@120.76.241.85 " cd ~;cd /goApp/${h5Ci.releaseConfig.linkName};git pull;`, { stdio: [0, 1, 2] });
  }
};

export default actionFn;


