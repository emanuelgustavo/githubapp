# githubapp
App to learn more about ES6 (Idea from Rocketseat Starter course)

Below, I describe all the course path:

## Stack

- [JavaScript ES6](https://blog.rocketseat.com.br/as-melhores-features-do-es6-es7-e-es8/)
- [yarn](https://yarnpkg.com/getting-started/usage)
- [webpack](https://webpack.js.org/concepts/#entry)
- [bootstrap](https://getbootstrap.com/)

---

## A - Set configuration for yarn and ES6 with babel
  1. Start a new project yarn

  `$yarn init`

  2. Create .gitignore and add node_modules/

  3. Add devDependencies:

  `$yarn add @babel/cli`\
  `$yarn add preset-env`\
  `$yarn add @babel-core`\
  `$yarn add @babel/plugin-proposal-object-rest-spread`

  4. Create .babelrc file and add:

  ```json
    {
      "presets":"@babel/preset-env"
    }
  ```

  5. Inside package.json add "scripts":
  ```json
    "scripts": {
      "dev": "babel ./main.js -o ./bundle.js -w"
    }
  ```
  For now, type on terminal:

  `$yarn dev` 
  
  to babel watch changes in code and transpile it to old versiosn of JS to the code works in all browsers. 

## B - Configure webpack
  1. Add devDependencies:
  
  `$yarn add webpack webpack-cli -D`\
  `$yarn add babel-loader -D`\
  `$yarn add webpack-dev-server -D`
  
  2. Change "scripts" in package.json to:

  ```json
    "scripts":{
      "dev":"webpack-dev-server --mode=development",
      "build":"webpack --mode=production"
    }
  ```

  3. Create two directories in root project directory:

    -node_modules
    - public
    | - index.html
    - src
    | - main.js
    | - bundle.js
    .babelrc
    .gitignore
    package.json
    README.md
    yarn.lock


  4. Create a configuration webpack file: webpack.config.js and add:

  ```json
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
  ```

  Update: When I tried do run `$yarn dev` an EIO error ocurred and I can't fix this. The solution to me was
  delete all the project files and clone again de repository and re-install all project's dependencies and
  all works fine.

  `$git clone https://github.com/emanuelgustavo/githubapp.git`\
  `$yarn install`

  5. Add Bootstrap to my project


    `$yarn add bootstrap`

  Bootstrap depends on jQuery and Popper, which are specified in the peerDependencies property; this means that you will have to make sure to add both of them to your package.json using:

  `$npm install --save jquery popper.js`
  `$yarn add popper.js`
  `$yarn add jquery`
    
  It's necessary install a loaders for webpack can understand the .css file and style, for this, I add the follow loaders:
    
  `$yarn add style-loader`
  `$yarn add css-loader`
    
  how the webpack documentation recommend's, it's better combine the css-loader with style-loader.

  I followed the instructions on the bootstrap webpack tutorial for importing compiled CSS:

  Importing Compiled CSS
  Alternatively, you may use Bootstrap’s ready-to-use CSS by simply adding this line to your project’s entry point:

  add this to main.js:

  ```javascript
  import 'bootstrap/dist/css/bootstrap.min.css'; 
  ```

  In this case you may use your existing rule for css without any special modifications to webpack config, except you don’t need sass-loader just style-loader and css-loader.

  add code below in webpack.config.js:

  ```json
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
  ```
  Now, the links are showed like [card](https://getbootstrap.com/docs/4.4/components/card/)
    


