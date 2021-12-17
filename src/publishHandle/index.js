import { execSync } from 'child_process';
import chalk from 'chalk';
import path from 'path';
import { BasePath } from '../paths';

const main = async () => {
  // 更新版本
  console.log(chalk.yellow('更新Version和CHANGELOG...'));
  execSync('standard-version')
  // 获取version
  const pJson = require(path.resolve(BasePath, './package.json'));
  execSync(`git push origin v${pJson.version}`, { stdio: [0, 1, 2] })
  console.log(chalk.green('更新版本成功！'));
};

export default main;
