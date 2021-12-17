import { BasePath } from '../paths';
import path from 'path';

const ciToolConfig = path.resolve(BasePath, './ciToolConfig.js');
const t = require(ciToolConfig);

const getConfig = () => {
  // 获取配置
  return t;
}
export default getConfig;
