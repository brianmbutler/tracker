import Ember from 'ember';

export default Ember.Route.extend({

  model() {
      let doc = this.store.findAll('doc');
      let employee = this.store.findAll('employee');

      return Ember.RSVP.hash({
        doc,
        employee
      }).then((result) => result.doc);

    },

  actions: {

    deleteEmployee() {
      this.modelFor('employee').destroyRecord();
    }
  }
});
