import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';


FlowRouter.route('/',{
  name: 'login',
  action(){
    BlazeLayout.render('un');
  },
});

FlowRouter.route('/premiere_page',{
  name: 'premierePage',
  action(){
    BlazeLayout.render('app_body', {top: 'header', main: 'premierePage'});
  },
});

FlowRouter.route('/accueil', {
  name: 'accueil',
  action() {
    BlazeLayout.render('accueil');
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
  name: 'login',
  action() {
    BlazeLayout.render('login' );
  },
});

FlowRouter.route('/creation', {
  name: 'creation',
  action() {
    BlazeLayout.render('creation', { top: 'header', main: 'creation' });
  },
});

FlowRouter.route('/annonces', {
  name: 'annonces',
  action() {
    BlazeLayout.render('app_body', { top: 'header', main: 'annonces' });
  },
});
