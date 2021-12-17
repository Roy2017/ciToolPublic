import fs from 'fs';
import path from 'path';

const moveFile = (sourcePath, targetPath) => {
  const statSource = fs.lstatSync(sourcePath);
  // 判断sourcePath是否是文件夹
  if (statSource.isDirectory()) {
    /*
     * 是文件夹，先在目标创建文件夹，再递归
     */
    // 判断是否存在该文件夹，不存在则创建文件夹
    try {
      // 存在
      fs.accessSync(targetPath);
    } catch (err) {
      // 不存在
      fs.mkdirSync(targetPath);
    }

    // 递归
    const files = fs.readdirSync(sourcePath); // 获取文件夹里面的内容
    files.forEach(pathname => {
      const _sourcePath = path.join(sourcePath, pathname);
      const _targetPath = path.join(targetPath, pathname);
      moveFile(_sourcePath, _targetPath);
    });
    return;
  }
  fs.renameSync(sourcePath, targetPath);
};

export default moveFile;
