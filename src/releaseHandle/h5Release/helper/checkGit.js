import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { getGitInfos } from '../../../utils/gitHandle';

const check = (cwd, myPackage) => {
  const releaseDir = path.join(cwd, './release');

   // 自动获取git 项目远程分支地址
   let GitRemote = getGitInfos().remote;

  // 判断是否存在release文件夹，不存在则创建文件夹
  try {
    // 存在
    fs.accessSync(releaseDir);
    execSync(`git pull origin ${myPackage.branch || 'release'}`, { cwd: releaseDir});
    console.log('git pull'.green);
  } catch (err) {
    // 不存在
    fs.mkdirSync(releaseDir);
    // 初始化git
    console.log('需要初始化git'.red);
    execSync('git init', { cwd: releaseDir });
    console.log('git init'.green);
    execSync(`git remote add origin ${myPackage.gitRemote || GitRemote}`, { cwd: releaseDir });
    console.log('git remote add'.green);
    execSync(`git pull origin ${myPackage.branch || 'release'}`, { cwd: releaseDir});
    console.log('git pull'.green);
  }
};

export default check;
