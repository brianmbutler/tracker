import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({


  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  address: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  zip: DS.attr('number'),
  phone: DS.attr('number'),
  department: DS.attr('string'),
  location: DS.attr('string'),
  title: DS.attr('string'),
  number: DS.attr('string'),
  isActive: DS.attr('boolean'),
  docs: DS.hasMany('doc', { async: true })
});
