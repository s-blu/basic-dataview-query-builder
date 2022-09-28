# Basic Dataview Query builder

## 🧱 [Click here to access the Basic Query Builder!](https://s-blu.github.io/basic-dataview-query-builder/) 🧱 

## What is this?

The "Basic Dataview Query Builder" is a webpage that allows you the creation of basic dataview queries. [Dataview](https://blacksmithgu.github.io/obsidian-dataview/) is a popular community plugin for the Personal Knowledge Management software [Obsidian.md](https://obsidian.md/), both brilliant and highly flexible applications that can be a bit difficult to understand in the beginning.

To make your start into dataview a tad more easier, the Basic Dataview Query Builder allows you to click together your first queries that'll help you understand the syntax of the plugin and guide you through the different pieces of informations needed to build a useable query.

We hope you enjoy!

If you find a bug, have a question or would like to see another feature, feel free to open a issue at the [github repository](https://github.com/s-blu/basic-dataview-query-builder).

## Development

This page is based on a Vue 3 application built with Vite, styled with [Bulma.io](https://bulma.io). 

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.


### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Type-Check, Compile and Minify for Production

```sh
npm run build
```

#### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

#### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
