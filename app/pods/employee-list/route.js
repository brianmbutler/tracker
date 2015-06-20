import Ember from 'ember';

export default Ember.Route.extend({


  model() {
    return this.store.find('employee');
  }



  /*
    model() {
      var employees = this.store.find('employee');
      var docs = this.store.find('doc');

      return hash ({
        employees,
        docs
      }).then( (result) => result.employees );
    }
  */
});