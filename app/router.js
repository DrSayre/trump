import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

const Router = Ember.Router.extend(googlePageview, {
  location: config.locationType
});

Router.map(function() {
  this.route('candidates', {resetNamespace: true}, function() {
    this.route('show', {
        path: ':candidate_id'
    });
  });
  this.route('about');
});

export default Router;
