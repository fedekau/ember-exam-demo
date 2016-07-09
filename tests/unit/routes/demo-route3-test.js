import { moduleFor, test } from 'ember-qunit';

moduleFor('route:demo-route3', 'Unit | Route | demo route3', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
