import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import litcss from 'rollup-plugin-postcss-lit';
import image from '@rollup/plugin-image';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'out-tsc',
      format: 'es',
      exports: "named",
      preserveModules: true,
      sourcemap: false,
    }
  ],
  plugins: [
    resolve({
      browser: true,
    }),
    typescript(),
    postcss({
      minimize: false,
      inject: false,
    }),
    litcss(),
    image(),
  ],
};
