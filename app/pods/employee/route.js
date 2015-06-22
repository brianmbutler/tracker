import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findAll('employee', params.employee_id);
  }
});
