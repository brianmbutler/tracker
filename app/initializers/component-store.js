export function initialize(container, application) {
  application.inject('component', 'store', 'service:store');
  application.inject('route', 'store', 'service:store');
}

export default {
  name: 'component-store',
  initialize: initialize,
  after: 'ember-data'
};
