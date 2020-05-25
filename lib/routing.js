import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

<<<<<<< Updated upstream
=======

FlowRouter.route('/',{
  name: 'un',
  action(){
    BlazeLayout.render('premierePage');
  },
});

FlowRouter.route('/premiere_page',{
  name: 'premierePage',
  action(){
    BlazeLayout.render('app_body', {top: 'header', main: 'premierePage'});
  },
});


>>>>>>> Stashed changes
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
  name: 'login',
  action() {
<<<<<<< Updated upstream
    BlazeLayout.render('app_body', { top: 'header', main: 'login' });
=======
    BlazeLayout.render('logged');
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
/* Code pour forcer l'utilisateur à se connecter avant d'accéder au site 
if (currentUser = true) {
    event.preventDefault();
    FlowRouter.go('accueil')
} else {
    event.preventDefault();
    FlowRouter.go('1')
} 
*/
=======
FlowRouter.route('/modifier_profil', {
  name: 'modifierProfil',
  action() {
    BlazeLayout.render('app_body', { top: 'header', main: 'modifierProfil' });
  },
});
>>>>>>> Stashed changes
