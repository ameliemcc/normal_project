/* eslint-disable no-undef */
FlowRouter.route('/', {
  name: 'explore',
  action() {
    BlazeLayout.render('app_body', { top: 'header', main: 'explore' });
  },
});

FlowRouter.route('/favoris', {
  name: 'favoris',
  action() {
    BlazeLayout.render('app_body', { top: 'header', main: 'favoris' });
  },
});

FlowRouter.route('/accueilMembres', {
  name: 'accueilM',
  action() {
    BlazeLayout.render('app_body', { top: 'header', main: 'accueiM' });
  },
});
