import './accueil.html';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Annonces } from '../../api/annonces.js';
import '../annonces/annonces.js';
import '../annonces/templateAnnonce.html';
import '../body/body.js'


/*Template.accueil.helpers({
  'annonces': () => Annonces.find({}).fetch()
  });*/


  Template.accueil.helpers({
    'annonces': () => Annonces.find({}).fetch()
    });


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
    FlowRouter.go('plusAnnonces')
  },

  'click #modifierProfil'(event) {
    event.preventDefault();
    FlowRouter.go('modifierProfil')
  },

  'click #submit'(event) {
    event.preventDefault();
    // let nom = document.getElementById('nom').value;
    // let prenom = document.getElementById('prenom').value;
    const email = document.getElementById('inputEmail4').value;
    const mdp = document.getElementById('inputPassword4').value;
    const mdpCheck = document.getElementById('inputPasswordCheck').value;
    // let localite = document.getElementById('localite').value;
    //  let npa = document.getElementById('npa').value;
    const profession = document.getElementById('profession').value;
    const sexe = document.getElementById('sexe').value;
    //  let date = document.getElementById('example-date-input').value;
    // let info = document.getElementById('exampleFormControlTextarea1').value;
    //  let url = document.getElementById('basic-url').value;
    if (mdp.length > 4) {
      if (mdp == mdpCheck) {
        if (email != '' && mdp != '' && profession != '' && sexe != '') {
          Accounts.createUser({
            username: email,
            password: mdp,
            profile: {
              profession,
              sexe,
            },
          },
          (error) => {
            if (error) {
              alert(error.message);
            } else {
              setTimeout(() => FlowRouter.go('accueil'), 200);
            }
          });
        } else {
          alert('Veuillez remplir tous les champs requis.');
        }
      } else {
        alert('Veuillez reconfirmer votre mot de passe.');
      }
    } else {
      alert('Votre mot de passe est trop court! Veuillez choisir un mot de passe de minimum 5 caractères. ');
    }
  },
});


