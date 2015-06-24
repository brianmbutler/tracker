import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'form',

  init() {
    this._super(...arguments);
    this.doc     = {};
    this.employee = {};
  },

/*
  actions: {
/*
    companyDidChange(company) {
      this.set('company', company);
    },

    cancel() {
      this.sendAction('cancel');
    },
*/

/*
  async save() {
      var store = this.store;
      var empAttributes = this.get('employee');
      var docAttributes = this.get('doc');
      var employees = store.createRecord('employee', empAttributes);

      this.set('isSaving', true);

      try {
        var employee = await employee.save();

        docAttributes.employee = employee;
        docAttributes.live = true; // tmp

        return await store.createRecord('doc', docAttributes).save();
      } finally {
        this.set('isSaving', false);
      }
    }
  }

*/
});
