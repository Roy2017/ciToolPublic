import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';

const isDev = process.env.NODE_ENV !== 'production';
// const externalArray = ['myCommitizen']

export default {
  input: 'src/index.js',
  output: {
    format: 'cjs',
    dir: 'package/src',
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
    !isDev && terser(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  external: (id) => {
    // console.log('id!', id);
    if (id.indexOf('myCommitizen') != -1) {
      return true;
    }
    return !(/\.+\/|[A-Z]:\\/.test(id)); // 排除相对路径和绝对路径
  },
};
