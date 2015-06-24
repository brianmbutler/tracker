import Ember from 'ember';

export default Ember.Route.extend({


  actions: {

      employeeDidChange(employee) {
                  this.set('employee', employee);
                  this.send('save');
      },

      async save() {

        var empAttributes = this.get('employee');

        this.set('isSaving', true);

        try {
          await this.store.createRecord('employee', empAttributes).save();
        } finally {
          this.set('isSaving', false);
        }
      }
    }
});
