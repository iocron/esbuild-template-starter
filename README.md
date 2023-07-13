# Simple ESBuild Template StarterKit

This Template StarterKit/CLI Helper can be used as a generic entry point to create and configure your own bundler. The template covers CSS and JS Files out-of-the-box and has the following features:

- Compression
- Minification
- Bundling
- Source Maps
- File Watcher
- CSS Nesting (https://www.w3.org/TR/css-nesting-1/)

Use the following docs for more esbuild informations: https://esbuild.github.io/

## Installation with Demo Files (Option 1)
1. Clone the repository or its contents: `git clone git@github.com:iocron/esbuild-template-starter.git`
2. Go to your project folder: `cd esbuild-template-starter`
3. Install npm dependencies: `npm install`

## Installation (minimal) in a existing project (Option 2)
1. Go to your project folder: `cd myproject`
2. Download required files: `curl --remote-name-all https://raw.githubusercontent.com/iocron/esbuild-template-starter/main/{bundle.mjs,package.json,package-lock.json,bundle.config.json.example}`
3. Install npm dependencies: `npm install`

## Upgrade
If you need to update the project/files, then use git pull or curl (as mentioned in the installation steps)

## Custom Build/Bundler Configuration (optional)

If you need fine-grained build options, then create the configuration file and edit it: 

```
cp bundle.config.json.example bundle.config.json
```

For more options please check out the official esbuild docs: https://esbuild.github.io/

## Usage / Command List: 

Build your CSS/JS Bundle once: 

```
npm run build
```

Watch changes and bundle CSS/JS automatically on change: 

```
npm run watch
```

Show the current settings/options: 

```
npm run options
```

Upgrade/Download latest bundler:

```
npm run upgrade
```

## Folder Structure
|             Info              |            Path            |         Description           |
|-------------------------------|----------------------------|-------------------------------|
|     Main CSS (Default)        |     [./src/css/main.css](./src/css/main.css)
|     Main JS (Default)         |     [./src/js/main.js](./src/js/main.js)
|     Custom Bundler Config     |     [./bundle.config.json](./bundle.config.json) | `cp bundle.config.json.example bundle.config.json` if you want the custom bundler config

