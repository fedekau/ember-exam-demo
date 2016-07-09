import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('demo-route1');
  this.route('demo-route2');
  this.route('demo-route3');
  this.route('demo-route4');
});

export default Router;
