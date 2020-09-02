import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import progress from 'rollup-plugin-progress';
import sizes from "rollup-plugin-sizes"
import json from '@rollup/plugin-json';
import banner from 'rollup-plugin-banner'

import { uglify } from "rollup-plugin-uglify";
import { version, author } from "../package.json";

const copyright = new Date().getFullYear() > 2020 ? '2020-' + new Date().getFullYear() : 2020;
const footer =
  '/*!\n' +
  ' * idebug v' + version + '\n' +
  ' * (c) ' + copyright + ' Tina\n' +
  ' * Released under the MIT License.\n' +
  ' */';

export default {
  input: './src/main.js',
  output: [
    {
      file: `./dist/yaya-${version}.${process.env.BUILD === 'dev' ? '' : 'min.'}js`,
      format: 'iife',
      name: 'FX',
      footer: footer
    },
    {
      file: `./index.js`,
      format: 'umd',
      name: 'FX',
      footer: footer
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    resolve(),
    commonjs(),
    progress({
      clearLine: false // default: true
    }),
    sizes(),
    json(),
    uglify(),
    banner('yaya\nv<%= pkg.version %>\nby <%= pkg.author %>'),
  ]
}
