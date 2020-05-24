import './accueil.html';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Annonces } from '../../api/annonces.js';
import '../annonces/annonces.js';


Template.accueil.helpers({
  'annonces': () => Annonces.find({}).fetch()
  });

/*
  Template.accueil.helpers({
    'annonces': () => {
      let liste_annonces = Meteor.Annonces;
      let annonces_a_retourner = [];
      for(let i=0; i< liste_annonces.length; i++) {
        annonces_a_retourner.push(Annonces.findOne({ _id: liste_annonces[i] }))
      }
      return annonces_a_retourner
    }
  })
  */