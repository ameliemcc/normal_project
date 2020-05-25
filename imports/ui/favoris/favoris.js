import { Template } from 'meteor/templating';
import { Annonces } from '../../api/annonces.js';
import { Utilisateurs } from '../../api/utilisateurs.js';


import '../templates/annonce_grid.html';
import '../templates/profils_grid.html';
import '../templates/utilisateurs_grid.html';
import './favoris.html';

Template.favoris.helpers({

  surname: [
    {
      nom: 'Jacinto Fernandez', age: '63 ans', profess: 'Etudiant', localité: 'Yverdon',
    },
    {
      nom: 'Pierre Dupont', age: '25 ans', profess: 'Apprenti', localité: 'Yens',
    },
    {
      nom: 'Paul Durand', age: '25 ans', profess: 'Boulanger', localité: 'Morrens',
    },
  ],
  annonces () {
    return Annonces.find({}).fetch();
  },

  firstName() {
    return Utilisateurs.find({}).fetch();
  },


});
