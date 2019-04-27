# parcel-plugin-inline-lit-element
Parcel Plugin for LitElement to inline your import css and scss file

Getting Started
------------
  ```
  git clone https://github.com/aelbore/parcel-plugin-inline-lit-element.git
  npm install
  ```
 
Installation
------------
  ```
  npm install --save-dev parcel-plugin-inline-lit-element
  ```

## Start the examples
* Typescript with Decorators
  * Counter 
    ```
    npm run build.counter.decorators
    ```
  * Hello World
    ```
    npm run build.hello.world.decorators
    ```

* Javascript
  * Counter
    ```
    npm run build.counter
    ```
  * Hello World
    ```
    npm run build.hello.world
    ```
* Run the application
  ```
  npm run serve
  ```
* Go your browser
  ```
  http://localhost:1234
  ```
  

## Use Lit-Element-Transpiler
  ```
  git submodule init
  git submodule update --remote

  npm run link.transpiler
  ```