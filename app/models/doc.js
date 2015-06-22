import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
  course: DS.attr('string'),
  issued: DS.attr('date'),
  expiration: DS.attr('date'),
  number: DS.attr('number'),
  employees: DS.belongsTo('employee', { async: true, serialize:true })

});
