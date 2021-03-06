import './accueil.html';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Annonces } from '../../api/annonces.js';
import '../annonces/annonces.js';
import '../annonces/templateAnnonce.html';
import '../body/body.js';
import '../templates/nouvmembres.html';
import '../templates/accannonce_grid.html';
import '../templates/accprofils_grid.html';
import '../templates/accprofils_grid.js';
import '../templates/accannonce_grid.js';


Template.accueil.helpers({
  annonces: () => Annonces.find({}, { sort: { createdAt: -1 } }),
  
  utilisateurs () {
    return Meteor.users.find({}).fetch();
  },
  profile () {
    return Meteor.users.profile;
  },
});


Template.accueil.events({
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
    FlowRouter.go('login');
  },
  'click #nvlleAnnonce'(event) {
    event.preventDefault();
    FlowRouter.go('annonces');
  },

  'click #plusAnnonce' (event) {
    event.preventDefault();
    FlowRouter.go('plusAnnonces');
  },

  'click #modifierProfil'(event) {
    event.preventDefault();
    FlowRouter.go('modifierProfil');
  },

});
