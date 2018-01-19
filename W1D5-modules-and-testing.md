# Modules and Testing

- Modules: Putting code into separate files

Node wraps all the code inside of a javascript file in an IIFE that looks like this:

```js
(function (exports, require, module, __filename, __dirname) {
}();
```

- npm

npm is a package manager for node. We can use npm to install modules.

- package.json `npm init`

A package.json file specifies information about our package, including it's dependencies. Create a package.json file using `npm init -y`

- mocha

[Mocha](https://mochajs.org/) makes asynchronous testing simple and fun. Use mocha to test your apps without using `console.log`

- `--save-dev`

Because we don't need mocha to be installed when our code is in production, we specify it as a dev dependency.

- `npm install -g`

Some modules can be installed globally. This means that they are accessible to the entire system, not just our single project.

A lot of global modules can be run as an executable, meaning they can be used like a command line application. An example of one of these modules is `cowsay`

```
npm install -g cowsay
cowsay 🤗
```

- [ESLint](https://gist.github.com/davidvandusen/a60a7461cba90632d7be009e3d10b364)

Use ESLint to make sure your code looks good and follows JavaScript best practices.

- Mock Test

Today you have a mock test. 

---

## Snippets

```js
// IIFE
(function (name) {
  var someVar = name + "🤗"
  console.log(someVar);
})('Monty Python');


// the same
exports.jazzHands = "🤗";
module.exports.jazzHands = "🤗";

// Not the same 
exports = shellfish;
module.exports = shellfish;


```

