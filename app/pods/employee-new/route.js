import Ember from 'ember';
const {
  setProperties, set
} = Ember;

export default Ember.Route.extend({

      async model() {

          var employee = await this.store.find('employee');
          return employee;
        },

        /* model() {
           return this.store.find('employee');
         },

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

            employeeDidChange(employee) {
              this.set('employee', employee);
              //  this.set('doc', doc);
              this.send('save');
            },

            async save() {
              var newEmployee = this.store.createRecord('employee').then(() => {
                  this.transitionToRoute('employee-list', newEmployee.save());
                }
              }
            }

        });