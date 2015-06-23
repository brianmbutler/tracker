import Ember from 'ember';
const {
  setProperties, set
} = Ember;

export default Ember.Route.extend({

  init() {
    this._super(...arguments);
    this.employee = {};
    this.doc = {};
  },

  async model() {
      var docs = this.store.findAll('doc');
      var employees = this.store.findAll('employee');

      return docs;

    },

  /**   Does not seem to do anything
  setupController(controller, model) {
          this._super(controller, model);
          controller.set("employee-new", this.modelFor("employee"));

        },  */

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
        }   //,

/*      employeeDidChange(employee) {
                this.set('employee', employee);
                this.send('save');
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
*/
    }
});
