# Demo: Auspice tree

Demonstrates how to use the Tree component from [Auspice](https://github.com/nextstrain/auspice) in a React application.

### Introduction

What the "host" application needs in order to make the Tree component functional:

- import and render a React component
- transpile imported modules (with webpack and babel), optionally ignore some of the problematic ones
- have Redux store initialized and have Redux `Provider` in the component tree
- have `redux-thunk` setup
- have i18next initialized with translations from auspice and have `I18nextProvider` in the component tree
- add reducers from Auspice
- have tree data in Auspice JSON v2 format in memory (does not matter how it is obtained)
- convert tree data to internal Auspice state using `createStateFromQueryOrJSONs()` function
- set internal Auspice state using `CLEAN_START` Redux action
- apply patches: see `tools/patch-asupice.sh`. Some of them are optional, some might be brought upstream later.

This particular example uses Next.js React framework and implements all of the above.

### Development setup

```bash
yarn install
yarn dev

```

This will start a development server with Fast Refresh on `http://localhost:3000`.

### Production build

```bash
yarn install
yarn prod:build

```

This uses Next.js static export functionality. The build artifacts will be produced in directory `out/`. They can be
deployed on any static webserver.

You can then optionally run `yarn prod:serve` to start a static server locally which will listen on
`http://localhost:8080`.

### License

MIT
