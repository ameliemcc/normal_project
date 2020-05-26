/* Pour ajouter ce qui est favorisé aux favoris 
Il faut que onClick, l'ID de l'annonce ou du membre soit récupéré et ajouter dans currentUser. */
import {Annonces} from '../../api/annonces.js';
import {Meteor} from 'meteor/meteor';

Template.nouvmembre.events({
    'click .material-icons favdiv': function (event) {
      event.preventDefault();
      let membreFavorise = Meteor.users.find(userId);
      Meteor.users.Insert({
        favorisationMembre: membreFavorise,
      });
      document.write('Favorisé !')
    },
  });





/*
  var annonceFavorise =
  favorisationAnnonce: annonceFavorise, 
  meteor.Annonces.findOne(Id);
  */
