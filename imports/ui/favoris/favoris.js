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

});
