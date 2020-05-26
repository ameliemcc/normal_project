import './accueil.html';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Annonces } from '../../api/annonces.js';
import '../annonces/annonces.js';
import '../annonces/templateAnnonce.html';
import '../body/body.js';
import '../templates/nouvmembres.html';


Template.accueil.helpers({
  annonces: () => Annonces.find({}, { sort: { createdAt: -1 } }),

  utilisateurs () {
    return Meteor.users.find({}).fetch();
  },
  profile () {
    return Meteor.users.profile;
  },

});
/*
  }); */

/*
  Template.accueil.helpers({
    'annonces': () => Annonces.find({}).fetch()
    });

    return Annonces.find({}, { sort: { createdAt: -1 } });
/*
      annonces : function (){
        return Annonces.find({}).fetch()


  Template.accueil.helpers({
    annonces: () => Annonces.find({}).fetch()
    });
      }


  Template.accueil.helpers({
    annonces: () => {
      let liste_annonces = Meteor.Annonces;
      let annonces_a_retourner = [];
      for(let i=0; i< liste_annonces.length; i++) {
        annonces_a_retourner.push(Annonces.findOne({ _id: liste_annonces[i] }))
      }
      return annonces_a_retourner
    }
  })
  */


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













