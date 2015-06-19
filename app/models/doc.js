import DS from 'ember-data';

export default DS.Model.extend({
  course:     DS.attr('string'),
  issued:     DS.attr('date'),
  expiration: DS.attr('date'),
  number:     DS.attr('number'),
  employees:  DS.belongsTo('employee', { async: true }),
  rev:        DS.attr('string'),


});
