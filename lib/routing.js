import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

/* eslint-disable no-undef */
FlowRouter.route('/', {
  name: 'accueil',
  action() {
    {{#if currentUser}}
    BlazeLayout.render('app_body', { top: 'header', main: 'accueil' });
    {{#else}}
    BlazeLayout.render(');
  },
});

FlowRouter.route('/favoris', {
  name: 'favoris',
  action() {
    BlazeLayout.render('app_body', { top: 'header', main: 'favoris' });
  },
});

FlowRouter.route('/profil', {
  name: 'profil',
  action() {
    BlazeLayout.render('app_body', { top: 'header', main: 'profil' });
  },
});

FlowRouter.route('/login', {
  name: 'connexion',
  action() {
    BlazeLayout.render('app_body', { top: 'header', main: 'connexion' });
  },
});

FlowRouter.route('/creation', {
  name: 'creation',
  action() {
    BlazeLayout.render('app_body', { top: 'header', main: 'creation' });
  },
});

FlowRouter.route('/annonces', {
  name: 'annonces',
  action() {
    BlazeLayout.render('app_body', { top: 'header', main: 'annonces' });
  },
});

/* Code pour forcer l'utilisateur à se connecter avant d'accéder au site 
if (currentUser = true) {
    event.preventDefault();
    FlowRouter.go('accueil')
} else {
    event.preventDefault();
    FlowRouter.go('1')
} 
*/
