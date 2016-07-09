import { test } from 'qunit';
import moduleForAcceptance from 'demo-parallel-tests/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | demo route3');

test('visiting /demo-route3', function(assert) {
  visit('/demo-route3');

  andThen(function() {
    assert.equal(currentURL(), '/demo-route3');
    assert.equal(find('h1').text(), 'Demo Route 3', 'Demo Route 3 Header');
  });
});
