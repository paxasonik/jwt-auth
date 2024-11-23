# Client

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```


# Server

Before you start, add the .env file

```sh
PORT=5000
DB_URL=YOUR_DB_URL
JWT_ACCESS_SECRET=jwt-secret-key
JWT_REFRESH_SECRET=jwt-refresh-secret-key
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER=YOUR_SMTP_USER_LOGIN
SMTP_PASSWORD=YOUR_EMAIL_PASSWORD
API_URL=http://localhost:5000
CLIENT_URL=http://localhost:3000
etc...
```

## Project Setup

```sh
npm install
```

### Compile project

```sh
npm run dev
```
