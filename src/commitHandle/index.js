import { bootstrap } from '../../myCommitizen/dist/cli/git-cz';
import path from 'path';

const isDev = process.env.NODE_ENV !== 'production';

const main = () => {
  return new Promise((r) => {
    try {
      bootstrap({
        cliPath: isDev ? path.join(__dirname, '../../node_modules/commitizen') : path.join(process.cwd(), './node_modules/commitizen'),
        config: {
          'path': 'cz-conventional-changelog',
        },
      }, [], (error) => {
        r(error);
      });
    } catch (error){
      r(error);
    }
  });
};

export default main;

