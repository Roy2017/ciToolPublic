import { execSync } from 'child_process';
import chalk from 'chalk';
import getConfig from '../utils/getConfig.js';

const main = async (type, envm) => {
  // console.log('releaseHandle:', type, envm);
  // 设置环境
  const _env = {
    Fetch_Flag: envm,
    NODE_ENV: envm === 'uc' ? 'production' : 'dev',
  };

  // 获取配置
  const t = getConfig();

  // 打包发布
  console.log(chalk.yellow('打包中...'));

  if (type == 'h5') {
    // build
    const h5Handle = await import('./h5Release/index.js');
    await h5Handle.default(_env);
  } else if (type == 'mini') {
    // build
    const { xcxCi } = t;
    execSync(xcxCi.cmd.build || `npm run build`, { stdio: [0, 1, 2], env: _env });
    const { uploadFN } = await import('../xcxTools');
    // upload
    await uploadFN({
      envm: envm || 'testing',
    });
  }
  console.log(chalk.green('\n部署成功！'));
};

export default main;
