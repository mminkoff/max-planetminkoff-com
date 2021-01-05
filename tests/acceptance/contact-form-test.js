import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn, settled } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import Pretender from 'pretender';

module('Acceptance | contact form', function(hooks) {
  setupApplicationTest(hooks);

  test('submitting contact-form', async function(assert) {
    new Pretender(function() {
      this.post('https://9o629ug0k5.execute-api.us-east-1.amazonaws.com/production/contact-messages', () => {
        return [
          200,
          {'content-type': 'application/json'},
          '{}'
        ];
      });
    });

    await visit('/');

    assert.equal(currentURL(), '/');

    assert.dom('[data-test-display="contact-form"]').exists();
    assert.dom('fieldset').doesNotHaveAttribute('disabled', 'form is not disabled');
    assert.dom('[data-test-display="success-message"]').doesNotExist('success message is not visible');

    await fillIn('[data-test-input="name"]',"foo bar");
    await fillIn('[data-test-input="email"]',"example@example.com");
    await fillIn('[data-test-input="message"]',"hey now");
    await click('[data-test-action="submit-contact"]');
    await settled();

    assert.dom('fieldset').hasAttribute('disabled', '', 'form is disabled');
    assert.dom('[data-test-display="success-message"]').exists('success message is visible');
  });
});
