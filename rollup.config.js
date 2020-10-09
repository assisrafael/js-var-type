import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';

const baseConfig = {
  input: 'src/index.js',
  plugins: [
    resolve({
      extensions: ['.mjs', '.js', '.json', '.jsx'],
    }),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
    }),
  ],
};

export default [
  {
    ...baseConfig,
    output: {
      file: 'dist/main.cjs',
      format: 'commonjs',
    },
  },
  {
    ...baseConfig,
    output: {
      file: 'dist/main.js',
      format: 'es',
    },
  },
];
