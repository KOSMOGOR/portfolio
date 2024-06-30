import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default [
    {
        input: 'src/main.tsx',
        output: { file: 'dist/main.bundle.js' },
        plugins: [
            replace({
                'process.env.NODE_ENV': '(new Object())'
            }),
            typescript(),
            nodeResolve({ browser: true }),
            commonjs({
                requireReturnsDefault: 'auto'
            }),
            terser()
        ]
    },
    {
        input: 'src/comic.tsx',
        output: { file: 'dist/comic.bundle.js' },
        plugins: [
            replace({
                'process.env.NODE_ENV': '(new Object())'
            }),
            typescript(),
            nodeResolve({ browser: true }),
            commonjs({
                requireReturnsDefault: 'auto'
            }),
            terser()
        ]
    }
];