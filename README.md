# Stancil.js-Lerna Monorepo Starter

## Developing

You can run `yarn run build` at the root level for every wrapper along with the stencil library to build the project and serve the upright content.

1. Clone this repository.
1. Run `yarn install` in the root to install dependencies.
1. Start developing the main library running `yarn start` inside `packages/gantt-component`.
1. After finishing your work run `yarn link` at the root of gantt-component and later run `yarn run build`.

## Building React library

1. Run `yarn link @workspace/stencil` to link the stencil component with react-library.
1. Run `yarn run build` inside `packages/gantt-component` to compile the main library.
1. Run `yarn run build` inside `packages/react-library` to compile the React library.
1. Check your components running `yarn run dev` inside `packages/react-sample-app`.

## Building Vue library

1. Run `yarn link @workspace/stencil` to link the stencil component with vue-library.
1. Run `yarn run build` inside `packages/gantt-component` to compile the main library.
1. Run `yarn run build` inside `packages/vue-library` to compile the Vue library.
1. Check your components running `yarn run dev` inside `packages/vue-sample-app`.

## Building Angular library

1. Run `yarn link @workspace/stencil` to link the stencil component with angular-library.
1. Run `yarn run build` inside `packages/gantt-component` to compile the main library.
1. Run `yarn run build component-library` inside `packages/angular-workspace` to compile the Angular library.
1. Check your components running `yarn start` inside `packages/angular-sample-app`.

Run `yarn build` at the root level to build every module inside packages concurrently.
Run `yarn serve` at the root level to start the server of every module inside packages concurrently once you made changes in the stencil module.
