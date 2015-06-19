import Ember from 'ember';

export default Ember.Route.extend({
  async model() {

    var employees = await this.store.find('employee');

    return employees;


 //   var docs = await this.store.find('doc');


//    return employees;
//  }

}
});
});
