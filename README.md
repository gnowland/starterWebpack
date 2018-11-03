# Webpack Starter Kit

This is a front-end development starter kit that uses **yarn**, **webpack** and **browsersync**.

* Dependancies are managed in `package.json` (yarn)
* Builds are managed in `webpack.config.js` (webpack)
* Source files (files that need to be manipulated before they can be used) are located in `/src`.
* Compiled modules (js, css -- files that can be used with other systems) will be output to `/dist` by **webpack** & **yarn** build processes (see below). *These files should not be modified directly, and will be overwritten on the next compile!*
* A boilerplate main.js, app.js, and index.html are also included.

### How it works

1. [Install Yarn](https://yarnpkg.com/en/docs/install) (requires [node](https://nodejs.org/en/download/))
2. Initilize project:

    ```bash
    yarn
    ```

3. Which will bring to your disposal two main build commands:

    1. **Dev**

        starts browsersync, compiles your js and scss, creates sourcemaps and watches for file changes

        ```bash
        yarn dev
        ```

    2. **Dist**

        generates production files (minifies css and packs media queries), generates less detailed source maps

        ```bash
        yarn dist
        ```
