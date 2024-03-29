import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

import babel from 'rollup-plugin-babel';

export default {
  input: 'src/2019-react.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'Todos',
    file: 'build/2019-react.js'
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    babel({
      exclude: 'node_modules/**',
      presets: [
        '@babel/preset-react'
      ]
    }),
    resolve(),
    commonjs()
  ]
};
