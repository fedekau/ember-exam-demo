import { test } from 'qunit';
import moduleForAcceptance from 'demo-parallel-tests/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | demo route2');

test('visiting /demo-route2', function(assert) {
  visit('/demo-route2');

  andThen(function() {
    assert.equal(currentURL(), '/demo-route2');
    assert.equal(find('h1').text(), 'Demo Route 2', 'Demo Route 2 Header');
  });
});
