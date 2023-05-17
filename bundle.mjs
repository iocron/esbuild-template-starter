import * as esbuild from 'esbuild'

let ctx = await esbuild.context({
    outdir: 'dist',
    entryPoints: [
        { out: 'bundle', in: './src/main.js'},
        { out: 'bundle', in: './src/main.css'},
    ],
    bundle: true,
    write: true,
    minify: true,
    sourcemap: true,
    // packages: 'external', // External dependency loading during runtime
    // target: ['node10.4'], // Specify target (node version) if needed
})

await ctx.watch()
console.log('watching...')
