import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Annonces } from '../../api/annonces.js';


import '../templates/annonce_grid.html';
import '../templates/profils_grid.html';
import './favoris.html';


Template.favoris.helpers({

  annonces: () => Annonces.find({}, { sort: { createdAt: -1 } }),
  
  utilisateurs () {
    return Meteor.users.find({}).fetch();
  },
  profile () {
    return Meteor.users.profile;
  },

  favannonces () {

    let annonces_favorites = Meteor.user().profile.fav_annonce;
    alert(annonces_favorites);
    let tabfavann = [];
    annonces_favorites.forEach(element => {tabfavann.push(Annonces.findOne({_id: element}))
    });

    return tabfavann;
  },
  
  favorusers () {

    let personnes_favorites = Meteor.user().profile.fav_personne;
    alert(personnes_favorites);
    let tabfavpers = [];
    personnes_favorites.forEach(element1 => {tabfavpers.push(Meteor.users.findOne({_id: element1}))
    });

    return tabfavpers;
  }
  
});
