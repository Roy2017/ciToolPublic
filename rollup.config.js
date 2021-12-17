import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import { terser } from "rollup-plugin-terser";

const isDev = process.env.NODE_ENV !== 'production';

export default {
  input: 'src/index.js',
  output: {
    format: 'cjs',
    dir: 'package/src',
  },
  plugins: [resolve(), commonjs(), json(), !isDev && terser()],
  external: (id) => {
    // console.log('id!', id);
    return !(/\.+\/|[A-Z]:\\/.test(id));
  },
};
