import Ember from 'ember';

export default Ember.Route.extend({

  async model() {
      var docs = await this.store.findAll('doc');
      var employees = await this.store.findAll('employee');

      return docs;
    }
});
