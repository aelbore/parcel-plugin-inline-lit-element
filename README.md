# parcel-plugin-inline-lit-element
Parcel Plugin for LitElement to inline your import css and scss file

Getting Started
------------
  ```
  git clone https://github.com/aelbore/parcel-plugin-inline-lit-element.git
  npm install
  npm run bundle
  npm run symlink
  ```

## Start the examples
  ```
  npm start
  ```

## TODO
  * Support .js files
    * rename the following files 
      ```
      hello-world.ts => hello-world.js
      index.ts => index.js
      ```
    * update the script url
      ```html
      <script src="examples/index.ts"></script>
      to 
      <script src="examples/index.js"></script>
      ```