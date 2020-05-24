import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

/*
FLowRouter.route("/", {
  name: "1", 
  action(){
    if (currentUser == true){
    event.preventDefault();
    FlowRouter.go('accueil')
    } else{
    event.preventDefault();
    FlowRouter.go('1')
    } 
    BlazeLayout.render("app_body", {top: "header", main: "1"});
  }, 
});
*/




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
    BlazeLayout.render('app_body', { top: 'header', main: 'login' });
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

 


