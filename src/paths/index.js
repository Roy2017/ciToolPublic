import path from 'path';

const BasePath = process.cwd();
const SrcPath = path.resolve(BasePath, './src');

if (BasePath.indexOf('src') != -1) {
  throw new Error("BasePath shouldn't have '/src'")
}

export {
  BasePath,
  SrcPath,
}
