import Ember from 'ember';

export default Ember.Route.extend({
  
  async model() {
      var docs = this.store.findAll('doc');
      var employees = this.store.findAll('employee');

      return docs;

    }

})
