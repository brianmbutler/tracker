export function initialize(container, application) {
  application.inject('component', 'store', 'service:store');
}

export default {
  name: 'component-store',
  after: 'ember-data',
  initialize: initialize

};
