import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import litcss from 'rollup-plugin-postcss-lit';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'out-tsc',
      format: 'es',
      sourcemap: true,
      exports: "named",
      preserveModules: true,
    }
  ],
  plugins: [
    resolve({
      browser: true,
      development: true,
    }),
    typescript(),
    postcss({
      minimize: false,
      inject: false,
    }),
    litcss(),
  ],
};
