import { terser } from "rollup-plugin-terser";
import replace from 'rollup-plugin-replace';

const isDev = process.env.NODE_ENV !== 'production';

export default {
  input: 'src/commitHandle/index.js',
  output: {
    file: 'package/src/commitHandle/index.js',
    format: 'cjs',
  },
  // external: ['commitizen/dist/cli/git-cz', 'path'],
  external: (id) => {
    // console.log('id!', id);
    return !(/\.+\/|[A-Z]:\\/.test(id));
  },
  plugins: [
    !isDev && terser(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
};
