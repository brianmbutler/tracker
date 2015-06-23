import Ember from 'ember';

export default Ember.Controller.extend ({

actions: {

  async save() {

    var empAttributes = this.get('employee');

    this.set('isSaving', true);

    try {
    await this.store.createRecord('employee', empAttributes).save();

    } finally {
      this.set('isSaving', false);
    //  this.send('closeModal');
    }
  }
}
});
