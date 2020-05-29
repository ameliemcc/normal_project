import './creer.html';
// eslint-disable-next-line import/no-cycle
import '../accueil/accueil.js';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.creation.events({
  'click #logNow'(event) {
    event.preventDefault();
    const mail = document.getElementById('mail').value;
    const mdp = document.getElementById('mdp').value;
    const mdpCheck = document.getElementById('mdpCheck').value;
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const localite = document.getElementById('localite').value;
    const roles = document.getElementById('roles').value;
    const dateInput = document.getElementById('dateInput').value;
    const commentaire = document.getElementById('commentaire').value;
    const genre = document.getElementById('genre').value;
    //  let url = document.getElementById('basic-url').value;
    if (mdp.length > 4) {
      if (mdp === mdpCheck) {
        if (mail.includes('@unil.ch')) {
          if (mail !== '' && mdp !== '' && nom !== '' && prenom !== '' && localite !== '' && dateInput !== '') {
            Accounts.createUser({
              username: mail,
              password: mdp,
              profile: {
                nom,
                prenom,
                localite,
                roles,
                dateInput,
                commentaire,
                genre,
              },
            }, (error) => {
              if (error) {
                alert(error.message);
              } else {
                alert('votre compte est créé');
                const idU = Meteor.userId();
                console.log(idU);
                setTimeout(() => FlowRouter.go('accueil'), 200);
              }
            });
          } else {
            alert('Veuillez remplir tous les champs requis.');
          }
        } else {
          alert('Ce site permet la création de compte uniquement avec des adresses email de l\'UNIL ');
        }
      } else {
        alert('Veuillez reconfirmer votre mot de passe.');
      }
    } else {
      alert('Votre mot de passe est trop court! Veuillez choisir un mot de passe de minimum 5 caractères. ');
    }
  },

});
