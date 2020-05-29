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
/*
FlowRouter.route('/lists/:_id', {
  name: 'Lists.show',
  action(params, queryParams) {
    console.log("Looking at a list?");
  }
});
let id_annonce = FlowRouter.getParam("id");
FlowRouter.route("/plusAnnonce/:id", {
  name: "plusAnnonce",
  action({ _id: "id_annonce" },{} ){
    console.log(_id)
    BlazeLayout.render("app_body", { top: "header", main: "plusAnnonce" });
  }
})*/

/* eslint-disable no-undef */
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

/* Code pour forcer l'utilisateur à se connecter avant d'accéder au site 
if (currentUser = true) {
    event.preventDefault();
    FlowRouter.go('accueil')
} else {
    event.preventDefault();
    FlowRouter.go('1')
} 
*/

