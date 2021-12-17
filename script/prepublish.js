const path = require('path');
const { execSync } = require('child_process');
const rimraf = require('rimraf');
const fs = require('fs');

const copyArray = [
  './CHANGELOG.md',
  './package.json',
  './ciToolConfig.js',
  './commitlint.config.js',
  './README.md',
];

// 清空package
rimraf('./package/src', {}, async () => {
  try {
    // 设置环境
    const _env = { NODE_ENV: 'production' };
    // 打包
    execSync('npm run build', { env: _env });
    // 升级
    execSync('npm run update', { env: _env, stdio: [0, 1, 2] });
    // 复制
    const cwd = process.cwd();
    const pArray = copyArray.map((path1) => {
      const from = path.resolve(cwd, path1);
      const to = path.join(cwd, './package', path1);
      return fs.promises.copyFile(from, to);
    });
    await Promise.all(pArray)
      .catch((e) => {
        throw e;
        process.exit(-1);
      });
    // publish
    const pCwd = path.resolve(cwd, './package');
    execSync('npm publish', { cwd: pCwd, env: _env, stdio: [0, 1, 2] });
  } catch (e) {
    console.error(e);
    process.exit(-1);
  }
});

