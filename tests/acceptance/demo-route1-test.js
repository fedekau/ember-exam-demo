import { test } from 'qunit';
import moduleForAcceptance from 'demo-parallel-tests/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | demo route1');

test('visiting /demo-route1', function(assert) {
  visit('/demo-route1');

  andThen(function() {
    assert.equal(currentURL(), '/demo-route1');
    assert.equal(find('h1').text(), 'Demo Route 1', 'Demo Route 1 Header');
  });
});
