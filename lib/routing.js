import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

/* eslint-disable no-undef */
FlowRouter.route('/', {
  name: 'accueil',
  action() {
    BlazeLayout.render('app_body', { top: 'header', main: 'accueil' });
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
