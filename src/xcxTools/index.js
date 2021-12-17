import ci from 'miniprogram-ci';
import path from 'path';
import chalk from 'chalk';
import getConfig from '../utils/getConfig';
import { BasePath } from '../paths/index.js';
import { getGitInfos, getCommitMsg } from '../utils/gitHandle.js';

const _ProjectPath = path.resolve(BasePath, './dist');

const { xcxCi } = getConfig();
if (!xcxCi) {
  throw new Error('xcxCi no find!');
}
const project = new ci.Project({
  appid: xcxCi.appid,
  type: 'miniProgram',
  projectPath: xcxCi.projectPath || _ProjectPath,
  privateKeyPath: xcxCi.privateKeyPath || '',
  ignores: xcxCi.ignores || ['node_modules/**/*'],
});

const uploadFN = async (
  {
    envm = 'testing',
  },
) => {
  console.log(chalk.yellow('小程序上传中...'));
  // 获取git信息
  const { remotePath, branch } = getGitInfos();
  // EX: https://code.aliyun.com/xueersi/XProject/blob/XProject-admin/CHANGELOG.md
  const clogUrl = `https://code.aliyun.com/xueersi/${remotePath}/blob/${branch}/CHANGELOG.md`;
  const commitMsg = await getCommitMsg();
  // 获取version
  const pJson = require(path.resolve(BasePath, './package.json'));
  const uploadResult = await ci.upload({
    project,
    version: pJson.version,
    desc: `【${envm}环境】${commitMsg} -> ${clogUrl}`,
    setting: {
      es6: false,
    },
    robot: envm == 'testing' ? 1 : 2,
    onProgressUpdate: () => {
    },
  });
  console.log(chalk.green('小程序上传成功！\n'));
  console.dir(uploadResult);
};

const getMap = async () => {
  await ci.getDevSourceMap({
    project,
    robot: 1,
    sourceMapSavePath: './sm.zip',
  });
};

const previewFn = async () => {
  const previewResult = await ci.preview({
    project,
    desc: 'hello', // 此备注将显示在“小程序助手”开发版列表中
    setting: {
      es6: true,
    },
    qrcodeFormat: 'image',
    // qrcodeOutputDest: './qrcode/destination.jpg',
    qrcodeOutputDest: path.resolve('./qrcode/destination.jpg'),
    // onProgressUpdate: console.log,
    // pagePath: 'pages/index/index', // 预览页面
    // searchQuery: 'a=1&b=2',  // 预览参数 [注意!]这里的`&`字符在命令行中应写成转义字符`\&`
  });
  console.log('previewResult', previewResult);
};

const main = async () => {
  // getMap();

  // uploadFN();

  // previewFn();

};

export {
  uploadFN,
  getMap,
  previewFn,
};

