# BBQ Client WebApp


This repository holds the TypeScript source code of my Web application BBQ. BBQ is a Quiz App. The name "BBQ" is 
inspired by the name of the developers: Bea & Becky plus "Q" for Quiz. These are the nicknames of Beate Ullmann (Bea) and 
Rebecca Bettinger (Becky).

In the Quiz a user has following opportunities:
- Login, Logout, Register
- Play Quiz questions (its own + from others) in different categories
- Manage Quiz questions, like create and update own questions and mark answers as right/wrong, as well as switch 
questions into another category
- Creator of a Quiz question is displayed
- Basic user statistics of the played questions and a highscore of all users

Images for categories are binaries in the database, which are retrieved in the WebApp by requesting the 
server component.

**Have fun with BBQ!**

## Prerequisites
You need Node.js to use npm

You should have a running instance of the [bbq server](https://github.com/beckybettinger/bbq) 
on http://localhost:8081

## How to install the BBQ client

Clone this repo into new project folder (e.g., `my-proj`).
```shell
git clone https://github.com/nerdydirty/bbqClient.git  my-proj
cd my-proj
npm install
```
We need to add the jssha library for password hashing.
```shell
npm install jssha
npm install --save @types/jssha

//starts the application locally
npm start
```
## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

>Doesn't work in _Bash for Windows_ which does not support servers as of January, 2017.

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

You're ready to write your application.

### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run tsc` - runs the TypeScript compiler once.
* `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run lite` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.

Here are the test related scripts:
* `npm test` - compiles, runs and watches the karma unit tests
* `npm run e2e` - run protractor e2e tests, written in JavaScript (*e2e-spec.js)

