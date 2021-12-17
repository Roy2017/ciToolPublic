import { bootstrap } from 'commitizen/dist/cli/git-cz';
import path from 'path';

const isDev = process.env.NODE_ENV !== 'production';

const main = () => {
 bootstrap({
    cliPath: isDev ? path.join(__dirname, '../../node_modules/commitizen') : path.join(process.cwd(), './node_modules/commitizen'),
    config: {
      "path": "cz-conventional-changelog"
    }
  }, []);
}
main()

