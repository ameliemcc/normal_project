import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

<<<<<<< HEAD
<<<<<<< Updated upstream
=======
=======
>>>>>>> master

FlowRouter.route('/',{
  name: 'un',
  action(){
<<<<<<< HEAD
    BlazeLayout.render('premierePage');
=======
    BlazeLayout.render('un');
>>>>>>> master
  },
});

FlowRouter.route('/premiere_page',{
  name: 'premierePage',
  action(){
    BlazeLayout.render('app_body', {top: 'header', main: 'premierePage'});
  },
});


<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> master
/* eslint-disable no-undef */
FlowRouter.route('/accueil', {
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
<<<<<<< HEAD
<<<<<<< Updated upstream
    BlazeLayout.render('app_body', { top: 'header', main: 'login' });
=======
    BlazeLayout.render('logged');
>>>>>>> Stashed changes
=======
    BlazeLayout.render('login', { top: 'header', main: 'login' });
>>>>>>> master
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

<<<<<<< HEAD
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
=======
>>>>>>> master
FlowRouter.route('/modifier_profil', {
  name: 'modifierProfil',
  action() {
    BlazeLayout.render('app_body', { top: 'header', main: 'modifierProfil' });
  },
});
<<<<<<< HEAD
>>>>>>> Stashed changes
=======


>>>>>>> master
