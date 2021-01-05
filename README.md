# max

This is a personal website I put together both to present a
personal portfolio as well as provide an example of my code
here.

The site is built using the [EmberJS](https://emberjs.com) JavaScript framework, with some of my favorite basic add-ons including [ember-fontawesome](https://github.com/FortAwesome/ember-fontawesome), [ember-css-modules](https://github.com/salsify/ember-css-modules), [ember-responsive](https://github.com/freshbooks/ember-responsive), and the [Bulma](https://bulma.io/) CSS framework.

It is hosted on [AWS S3](https://aws.amazon.com/s3/) as a static website, and the contact form uses a [https://aws.amazon.com/lambda/] function to send via [Amazon Simple Email Service](https://aws.amazon.com/ses/), triggered via a resource on [Amazon API Gateway](https://aws.amazon.com/api-gateway/).

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone git@github.com:mminkoff/max-planetminkoff-com.git` this repository
* `cd max`
* `yarn install`

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

* `yarn lint:hbs`
* `yarn lint:js`
* `yarn lint:js --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
