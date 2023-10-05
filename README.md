## Microfrontend pokedex app

### Built using

- React with TS

- [Vite](https://vitejs.dev/guide/why.html)

- [pnpm](https://pnpm.io/)

- [upstash-Redis](https://upstash.com/)

- [Apollo-client](https://www.apollographql.com/docs/react/get-started)

- [Pokemon graphql](https://github.com/favware/graphql-pokemon)

- [Daisy ui and Tailwind CSS](https://daisyui.com/)

### Get Started

1. Clone Repo

2. Use nvm to install the node version specified within the `.nvmrc` file

3. Global install pnpm `npm i -g pnpm` and install deps using cmd `pnpm i`

4. Generate DaisyUI and Tailwind css classes

- Navigate to mfe-ui-components package - `cd packages/mfe-ui-components/`
- Run cmd `pnpx tailwindcss -i ./src/input.css -o ./dist/output.css`

5. From the root of the project, run all workspaces parallely `pnpm run --parallel dev`

6. App shell severed on **localhost:8083**

### Microfrontend Architecture

![pokedex mfe](https://raw.githubusercontent.com/shaarang1010/mfe-pokedex/main/pokedex-mfe.jpg)
