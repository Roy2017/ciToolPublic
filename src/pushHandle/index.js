import { execSync } from 'child_process';
import chalk from 'chalk';

const main = async (type) => {
  // push
  execSync('git push', { stdio: [1, 2] });
  console.log(chalk.green('git push成功！'));
};

export default main;
