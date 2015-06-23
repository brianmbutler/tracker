/* import Ember from 'ember';

const { inject } = Ember;

export default Ember.Component.extend({

  sessionService: inject.service('session'),

  tagName: 'form',

  init() {
    this._super(...arguments);
    this.employee = {};
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
    }
  }
});

*/
