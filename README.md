# Simple ESBuild Template StarterKit

This Template StarterKit/CLI Helper can be used as a generic entry point to create/extend your custom esbuild system. The template covers CSS and JS Files out-of-the-box and has the following features: 

- Compression
- Minification
- Bundling
- Source Maps
- File Watcher

Use the following docs for more esbuild informations: https://esbuild.github.io/

## Installation

1. Clone the project: `git clone git@github.com:iocron/esbuild-template-starter.git`
2. Switch to project: `cd esbuild-template-starter`
3. Create .env file (if it doesn't exist): `cp .env_example .env`
4. Edit .env file if needed
5. Install npm dependencies: `npm install`

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
