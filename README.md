# githubapp
App to learn more about ES6 (Idea from Rocketseat Starter course)

Testing git local repo

A - Set configuration for yarn and ES6 with babel
  1 - $yarn init
  2 - create .gitignore and add node_modules/
  3 - Add devDependencies:
    $yarn add @babel/cli
    $yarn add preset-env
    $yarn add @babel-core
    $yarn add @babel/plugin-proposal-object-rest-spread
  4 - create .babelrc file and add:
    {
      "presets":"@babel/preset-env"
    }
  5 - Inside package.json add "scripts":
    "scripts": {
      "dev": "babel ./main.js -o ./bundle.js -w"
    }
  For now, type on terminal '$yarn dev' to babel watch changes in code and transpile it to old versiosn
  of JS to the code works in all browsers. 

B - Configure webpack
  1 - Add devDependencies:
    $yarn add webpack webpack-cli -D
    $yarn add babel-loader -D
    $yarn add webpack-dev-server -D
  2 - Change "scripts" in package.json to:
    "scripts":{
      "dev":"webpack-dev-server --mode=development",
      "build":"webpack --mode=production"
    }
  3 - Create 2 directories in root project directory:
      - node_modules
      - public
        - index.html
      - src
        - main.js
        - bundle.js
      .babelrc
      .gitignore
      package.json
      README.md
      yarn.lock
  4 - Create a configuration webpack file: webpack.config.js and add:
      module.exports = {
        entry: [
          '@babel/polyfill',
          './src/main.js'
        ],
        output: {
          path: __dirname + '/public',
          filename: 'bundle.js',
        },
        devServer: {
          contentBase: __dirname + '/public',
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
              }
            }
          ]
        }
      }
