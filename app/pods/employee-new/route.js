import Ember from 'ember';
const {
  setProperties, set
} = Ember;

export default Ember.Route.extend({

  model() {
      return this.store.findAll('employee');

    },

    /*    setupController(controller, model) {
          this._super(controller, model);
          controller.set("employee-new", this.modelFor("employee"));

        },

    */

    /*    afterModel() {
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
        save() {
          var newEmployee = this.store.createRecord('employee').then(() => {
              return newEmployee.save());
          });
    }
}
});