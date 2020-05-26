import './creer.html';
import '../accueil/accueil.js';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

Template.creation.events({
'click #logNow'(event) {
  event.preventDefault();
  let nom = document.getElementById('nom').value;
  let prenom = document.getElementById('prenom').value;
  let email = document.getElementById('inputEmail4').value;
  let mdp = document.getElementById('inputPassword4').value;
  let mdpCheck = document.getElementById('inputPasswordCheck').value;
  let localite = document.getElementById('localite').value;
  let roles = document.getElementById('roles').value;
  let dateInput = document.getElementById('dateInput').value;
  let commentaire = document.getElementById('commentaire').value;
  //  let url = document.getElementById('basic-url').value;
  if (mdp.length > 4) {
    if (mdp == mdpCheck) {
      if (email != '' && mdp != '' && nom != '' && prenom != '') {
        Accounts.createUser({
          username: email,
          password: mdp,
          profile: {
            nom: nom,
            prenom: prenom,
            localite: localite,
            roles: roles,
            dateInput: dateInput,
            commentaire: commentaire
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
