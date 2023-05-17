import * as esbuild from 'esbuild'

const args = process.argv.slice(2)
const buildType = args[0]

export let _esOptions = {
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
}

export const _esBuilder = async function(){
    await esbuild.build(_esOptions)
    console.log('Build seems complete.')
}

export const _esWatcher = async function(){
    const ctx = await esbuild.context(_esOptions)
    await ctx.watch()
    console.log('Watching...')
}

export default {
    _esOptions,
    _esBuilder,
    _esWatcher
}

switch (buildType) {
    case "options":
        console.log("_esOptions: ")
        console.log(_esOptions)
        break;
    case "build":
        _esBuilder(_esOptions)
        break;
    case "watch":
        _esWatcher(_esOptions)
        break;
    default:
        console.log("Please specify one of the following arguments as string: \"build\", \"watch\" or \"options\"")
        break;
}
