import Ember from 'ember';

//const { inject } = Ember;

export default Ember.Component.extend({

//  sessionService: inject.service('session'),

  tagName: 'form',

  init() {
    this._super(...arguments);
    this.set('employee', {});
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
                this.sendAction('async save');
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
