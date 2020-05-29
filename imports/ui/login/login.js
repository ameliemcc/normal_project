import './login.html';
import { Accounts } from 'meteor/accounts-base';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';

Template.login.events({
  'click #creation'(event) {
    event.preventDefault();
    FlowRouter.go('creation');
  },
  'click #connect'(event) {
    event.preventDefault();
    let username = document.getElementById('nom_utilisateur').value;
    console.log(username);
    let password = document.getElementById('mdp_conf').value;
    console.log(password);
    Meteor.loginWithPassword(username, password, (error) => {
      if (error) {
        alert(error.message);
      } else {
        console.log('connecté');
        setTimeout(() => FlowRouter.go('accueil'), 200);
      }
    });
  },
});
