import Ember from 'ember';
const {
  setProperties, set
} = Ember;

export default Ember.Route.extend({

 async model() {
      var employees = this.store.findAll('employee');
      return employees;
    },

  /**   Does not seem to do anything
  setupController(controller, model) {
          this._super(controller, model);
          controller.set("employee-new", this.modelFor("employee"));

        },  */

 actions: {
/*
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
        } //,

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
        this.send('closeModal');
      }
    }
    */
  }

});
