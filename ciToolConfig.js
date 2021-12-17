module.exports = {
  h5Ci: {
    releaseConfig: {
      branch: '', // 部署的分支
      linkName: '', // 部署链接的pathName
      gitRemote: '', // 部署的远程地址（默认为源码的远程分支）
    },
    cmd: { // npm指令自定义
      dev: 'npm start',
      build: 'npm run build',
    },
  },
  xcxCi: {
    appid: '',
    projectPath: '', // 指定要上传的小程序项目路径，默认使用项目根目录的dist文件夹
    privateKeyPath: '',
    ignores: ['node_modules/**/*'],
    cmd: { // npm指令自定义
      dev: 'npm start',
      build: 'npm run build',
    },
  },
};
