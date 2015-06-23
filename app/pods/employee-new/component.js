import Ember from 'ember';

//const { inject } = Ember;

export default Ember.Component.extend({

  tagName: 'form',

  init() {
    this._super(...arguments);
    this.employee = {};
    this.doc = {};
  },

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

    employeeDidChange(employee) {
                this.set('employee', employee);
                this.sendAction('save');
    },

    async save() {
          var store = this.store;
          var empAttributes = this.get('employee');
          var docAttributes = this.get('doc');

          var employee = store.createRecord('employee', empAttributes);

          try {
            var company = await employee.save();
          } finally {
            this.transitionTo('employee-list');
          }
    }
  }
});
