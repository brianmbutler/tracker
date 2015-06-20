import Ember from 'ember';

export default Ember.Route.extend({

  async model() {
    try {
      let employees = await this.store.find('employee');
      return employees;
    } catch (err) {
      console.log(err);
    }
    //   var docs = await this.store.find('doc');
  }
});