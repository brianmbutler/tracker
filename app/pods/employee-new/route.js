import Ember from 'ember';
const {
  setProperties, set
} = Ember;

export default Ember.Route.extend({

  async model() {
      try {
        let employees = await this.store.find('employee');
        return employees;
      } catch (err) {
        console.log(err);
      }
    },

    /*
     afterModel() {
       var me = this;
       var docsPromise = this.store.find('doc');

      docsPromise.then(function(docs) {
         me.controllerFor('employee-form').set('doc', docs);
       });

       return docsPromise;
     },

     */

    actions: {

      showModal(modalDialogName, modalContext) {
          const applicationController = this.controller;

          setProperties(applicationController, {
            modalDialogName,
            modalContext,
            isModalVisible: true
          });
        },

        closeModal() {
          const applicationController = this.controller;
          set(applicationController, 'isModalVisible', false);
        },

        /*      employeeDidChange(employee) {
                this.set('employee', employee);
                //  this.set('doc', doc);
                this.send('save');
              },
*/
        /*     Not working, data going in as null
                async save() {
                  var newEmployee = this.store.createRecord('employee', this.get('employee'));
                  newEmployee.save().then(() => {
                    this.transitionTo('employee-list')
                  })
                }
        */
        async save() {
          var store = this.store;
          var empAttributes = this.get('employee');
          var employee = store.createRecord('employee', empAttributes);

          this.set('isSaving', true);

          try {
            var employee = await employee.save();
          } finally {
            this.set('isSaving', false);
          }
        }
    }
});