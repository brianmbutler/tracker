import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

    this.route ('employee-edit'), {path: ':employee_id/edit'};
    this.route ('employee-new');
    this.route('employee-list');
    this.route('documents');
  this.route('dashboard');

});

export default Router;
