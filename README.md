# fastboot-app

This is a test app for testing the shoebox streaming of Fastboot using the [suchita/streamable](https://github.com/ember-fastboot/ember-cli-fastboot/tree/suchita/streamable) branch.

## Steps to test

### Steps on the fastboot side:

1. Go to [suchita/streamable](https://github.com/ember-fastboot/ember-cli-fastboot/tree/suchita/streamable) branch
2. run `yarn install`
3. go to `packages/ember-cli-fastboot`
4. run `yarn link`
5. go to `packages/fastboot`
6. run `yarn link`
7. go to `packages/fastboot-express-middleware`
8. run `yarn link`

### Steps on the app side

1. In this app, run `yarn install`
2. run `yarn link ember-cli-fastboot`
3. run `yarn link fastboot`
4. run `yarn link fastboot-express-middleware`
5. `ember s`

You are all set :)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd fastboot-app`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
