import Ember from 'ember';
const {
  setProperties, set
} = Ember;

export default Ember.Route.extend({

  async model() {
      var employees = await this.store.find('employee');
      return employees;
    },

    afterModel() {
      var me = this;
      var docsPromise = this.store.find('doc');

      docsPromise.then(function(docs) {
        me.controllerFor('employee-form').set('doc', docs);
      });

      return docsPromise;
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
          //  this.set('doc', doc);
          this.send('save');
        },

        async save() {
          var store = this.store;
          var employeeAttributes = this.get('employee');
          //  var docAttributes = this.get('doc');
          var employee = store.createRecord('employee', employeeAttributes);

          this.set('isSaving', true);

          //   try {

          var employee = await employee.save();

          //      docAttributes.employee = employee;

          /*
                return await store.createRecord('doc', docAttributes).save();
                } finally {
                  this.set('isSaving', false);
                }   */
        }
    }
});

/*  This code here works
  model: function() {
     return this.store.find('employee');
  },

*/

/*   This RSVP hash doesn't work
  model() {
    var store= this.store;
    return Ember.RSVP.hash ({
    docs : store.find('doc'),
    employees: store.find('employee')

  }).then ( (result) => result.doc);
  }
*/



/*  This code is iffy
    return hash ({
      employees,
      docs
    }).then( (result) => result.employees );
  }
});
*/