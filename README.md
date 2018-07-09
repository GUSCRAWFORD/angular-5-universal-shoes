# angular-5-universal-shoes
A journal of making a terrible Nike website and angular universalizing it

## Install
`yarn install`

## You're on Master
This started off on master within the context of a client app talking to the included express api.

## Check out...
The steps are following [Angular's](https://angular.io/guide/universal) official *universal* documentation;

## On Step 3...
At which point I noticed we were editing a `angular.json` I got irritated and didn't want to run into any more out-of-sync module dependency problems.

Following relevant parts of this tutorial ([https://www.genuitec.com/angular-5-firebase-angular-universal/](https://www.genuitec.com/angular-5-firebase-angular-universal/)) were helpful 

# Optimization Concerns

* Copywriting, text length, headline text etc.
* Backend writes triggered on GET's
  * Probably a design flaw, but for routes that complete an action in the backend on rendering; this could be a real concern:
  * where does `ngOnInit()` fire?  In what context? In pre-render or in the UI?
* Output validation:
  * Angular leaves behind attribute artifacts that cause w3c validation failure

## PouchDB

PouchDB depends on `leveldown` which has a conditional dependency

You'll get these warnings at first when running the webpack command against the server entry point:

```
WARNING in ./node_modules/bindings/bindings.js
81:22-40 Critical dependency: the request of a dependency is an expression
 @ ./node_modules/bindings/bindings.js
 @ ./node_modules/leveldown/leveldown.js
 @ ./node_modules/pouchdb/lib/index.es.js
 @ ./dist/server/main.bundle.js
 @ ./server.ts

WARNING in ./node_modules/bindings/bindings.js
81:43-53 Critical dependency: the request of a dependency is an expression
 @ ./node_modules/bindings/bindings.js
 @ ./node_modules/leveldown/leveldown.js
 @ ./node_modules/pouchdb/lib/index.es.js
 @ ./dist/server/main.bundle.js
 @ ./server.ts

WARNING in ./node_modules/node-fetch/lib/index.es.js
Module not found: Error: Can't resolve 'encoding' in '/Users/guscrawford/rollick-env/rollick-inventory-portal/node_modules/node-fetch/lib'
 @ ./node_modules/node-fetch/lib/index.es.js 141:11-30
 @ ./node_modules/pouchdb/lib/index.es.js
 @ ./dist/server/main.bundle.js
 @ ./server.ts
```