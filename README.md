# Steps to configure boilerplate react app with

## typescript

## webpack

## babel

## Eslint

## Prettier

## Husky

## Eslint-Staged

This project was bootstrapped with several installation manually after creating a empty folder.

# Installation Guides

Follow the steps to create a working app -

## npm init

## npm i react react-dom

## npm i -D typescript @types/react @types/react-dom

Create a file “tsconfig.json” in the root directory to give the compiler options for type checking.

Create 2 files in “src” folder “index.tsx” and “App.tsx”

## npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript

Create a file in root “.babelrc” for configuring babel

## npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader

Create a file in root webpack.config.js

## npm i -D style-loader css-loader postcss-loader autoprefixer sass-loader sass

And add new css rules in webpack.config.js.

## npm i -D clean-webpack-plugin compression-webpack-plugin html-minimizer-webpack-plugin html-webpack-plugin terser-webpack-plugin

Add all required plugins in webpack.config.js

## npm i -D eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks

create file .eslintrc.js

## npm i -D prettier eslint-plugin-prettier eslint-config-prettier

Create file .prettierrc.js. Your code will be formatted automatically according to this config and you can prettier rules to eslint as well so there is no conflict. In the .eslintrc.js file in extends add prettier.

Add scripts in package.json

## npm install husky -D

Edit package.json > prepare script and run it once:
npm set-script prepare "husky install"
npm run prepare

Add a hook:
npx husky add .husky/pre-commit "npm test"
git add .husky/pre-commit

## npm install lint-staged --save-dev

Create a .lintstagedrc.json file, configure our ESLint to run its auto-fix command on the staged files.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
