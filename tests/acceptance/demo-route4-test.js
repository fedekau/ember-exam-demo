import { test } from 'qunit';
import moduleForAcceptance from 'demo-parallel-tests/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | demo route4');

test('visiting /demo-route4', function(assert) {
  visit('/demo-route4');

  andThen(function() {
    assert.equal(currentURL(), '/demo-route4');
    assert.equal(find('h1').text(), 'Demo Route 4', 'Demo Route 4 Header');
  });
});
