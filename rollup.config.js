import babel from '@rollup/plugin-babel';

const baseConfig = {
  input: 'src/index.js',
  plugins: [],
};

export default [
  {
    ...baseConfig,
    output: {
      file: 'dist/main.js',
      format: 'es',
    },
  },
  {
    ...baseConfig,
    output: {
      file: 'dist/main.cjs',
      format: 'commonjs',
    },
  },
  {
    ...baseConfig,
    plugins: baseConfig.plugins.concat([
      babel({
        babelHelpers: 'runtime',
        exclude: /node_modules/, // only transpile our source code
      }),
    ]),
    output: {
      file: 'dist/main.es5.js',
      format: 'es',
    },
    external: [/@babel\/runtime/],
  },
];
