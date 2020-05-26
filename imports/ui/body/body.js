// corps de l'aplication, template
import './body.html';
import '../accueil/accueil.js';
import '../favoris/favoris.js';
import '../../../lib/routing.js';
import '../profil/profil.js';
import '../login/login.js';
import '../templates/creer.js';
import '../annonces/annonces.js';
import '../../../imports/conditionDeConnexion/un.html';
import '../profil/modifierProfil.js';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';
import { Membres } from "../../api/membres.js";


Template.app_body.helpers({
  utilisateur: () => Meteor.user().username,
});

Template.app_body.events({
  'click #accueil'(event) {
    event.preventDefault();
    FlowRouter.go('accueil');
  },
  'click #favvoris'(event) {
    event.preventDefault();
    FlowRouter.go('favoris');
  },
  'click #profil'(event) {
    event.preventDefault();
    FlowRouter.go('profil');
  },
  'click #logout'(event) {
    event.preventDefault();
    Meteor.logout();
  },
  
  'click #nvlleAnnonce'(event) {
    event.preventDefault();
    FlowRouter.go('annonces');
  },

  'click #plusAnnonce' (event) {
    event.preventDefault();
    FlowRouter.go('plusAnnonces')
  },

  'click #modifierProfil'(event) {
    event.preventDefault();
    FlowRouter.go('modifierProfil')
  },

});

