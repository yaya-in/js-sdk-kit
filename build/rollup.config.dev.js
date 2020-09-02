import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import progress from 'rollup-plugin-progress';
import sizes from "rollup-plugin-sizes"
import json from '@rollup/plugin-json';

export default {
  input: './src/main.js',
  output: [
    {
      file: `./dist/index.iife.${process.env.BUILD === 'dev' ? '' : 'min.'}js`,
      format: 'iife',
      name: 'FX',
      sourceMap: process.env.BUILD === 'dev'
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
    json()
  ]
}
