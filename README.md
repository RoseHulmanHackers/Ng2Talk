# Angular 2 QuickStart Source 

**Modified by Tyler Rockwood**

This repository holds the TypeScript source code of the [angular.io quickstart](https://angular.io/docs/ts/latest/quickstart.html),
the foundation for most of the documentation samples and potentially a good starting point for your application.

**This is not the perfect arrangement for your application. It is not designed for production. 
It exists primarily to get you started quickly with learning and prototyping in Angular 2**

## Things you'll need to start

* [Node installed](https://nodejs.org/en/)
* A command line ([GitBash](https://git-for-windows.github.io/) if you're a Windows Developer) with the ability to run `npm`.
* A text editor/IDE _like_ [Atom](https://atom.io/), [Sublime Text](https://www.sublimetext.com/) or [WebStorm](https://www.jetbrains.com/webstorm/).
* A brain with former Web Development experience (just anything really)

## Create a new project based on the QuickStart

Clone this repo into new project folder (e.g., `hangman`).
```bash
git clone  https://github.com/angular/quickstart hangman
cd my-proj
```

We have no intention of updating the source on `RoseHulmanHackers/Ng2Talk`.
Discard everything "git-like" by deleting the `.git` folder.
```bash
rm -rf .git
```

### Create a new git repo
You could [start writing code](#intall-npm-packages) now and throw it all away when you're done.
If you'd rather preserve your work under source control, consider taking the following steps.

Initialize this project as a *local git repo* and make the first commit:
```bash
git init
git add .
git commit -m "Initial commit"
```

Create a *remote repository* for this project on the service of your choice.

Grab its address (e.g. *`https://github.com/<my-org>/my-proj.git`*) and push the *local repo* to the *remote*.
```bash
git remote add origin <repo-address>
git push -u origin master
```
## Install npm packages

Install the npm packages described in the `package.json` and verify that it works:

**Attention Windows Developers:  You must run all of these commands in administrator mode**

```bash
npm install
npm start
```

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with Ctrl-C.

You're ready to write your hangman application! (wait or help your neighbor)

## Other information

If you're bored, here is some other information, some pre-existing from the quickstart,
some added by Tyler Rockwood, which links to more information about Angular2 and it's stack.

### Docs and other links

* [Angular2](https://angular.io/docs/ts/latest/)
* [TypeScript QuickStart](http://www.typescriptlang.org/docs/tutorial.html)
* [TypeScript Config for Angular2](https://angular.io/docs/ts/latest/guide/typescript-configuration.html)
* [Bootstrap](http://getbootstrap.com/)
* [LiteServer](https://github.com/johnpapa/lite-server)

### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run tsc` - runs the TypeScript compiler once.
* `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run lite` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.
* `npm run typings` - runs the typings tool.
* `npm run postinstall` - called by *npm* automatically *after* it successfully completes package installation. This script installs the TypeScript definition files this app requires.

### Testing

The testing for this project has been stripped out, because this talk will not be focusing on that :smile:
