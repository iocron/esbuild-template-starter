# Simple ESBuild Template StarterKit

This Template StarterKit/CLI Helper can be used as a generic entry point to create/extend your custom esbuild system. The template covers CSS and JS Files out-of-the-box and has the following features: 

- Compression
- Minification
- Bundling
- Source Maps
- File Watcher

Use the following docs for more esbuild informations: https://esbuild.github.io/

## Installation

1. Go to your project folder (e.g. `cd esbuild-template-starter`)
2. Full or Minimal Installation: 
    - Full Installation + Demo Files: `git clone git@github.com:iocron/esbuild-template-starter.git .`
    - Minimal Installation: `curl --remote-name-all https://raw.githubusercontent.com/iocron/esbuild-template-starter/main/{bundle.mjs,package.json,package-lock.json,.env_example}`
3. Create .env file (if it doesn't exist): `cp .env_example .env`
4. Edit .env file if needed
5. Install npm dependencies: `npm install`

## Upgrade
If you need to update/upgrade the project, use git pull or curl (as mentioned in Step 1. of the Installation)

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
