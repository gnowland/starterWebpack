# Build Starter Kit

This is a front-end development starter kit that mainly uses **npm**, **webpack** and **browsersync**.

The main content of this repository is package.json and webpack.config.js.
Also included is a test /src folder and a test index.html.

### How does it work

1. Install Node on your machine

2. Open your terminal and go to the folder containing this project, then run

    ```bash
    npm install
    ```

3. This build kit assumes that you have a website running on localhost or similar. In package.json replace the "proxy" variable with whatever you are using (for example, localhost:3000 or site.dev or whatever you need).

4. Now you have at your disposal two main npm commands:

    ```bash
    npm run dev
    ```

    which will start browsersync, compile your js and css and watch for file changes.

    The command

    ```bash
    npm run dist
    ```

    will generate production files by minifying css and packing media queries and will create js source maps.
