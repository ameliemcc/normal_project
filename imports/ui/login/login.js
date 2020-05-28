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

  'click #loginCompte'(event) {
    event.preventDefault();
    let username = document.getElementById('inputEmail4').value;
    let mdp = document.getElementById('inputPassword4').value;
    Meteor.loginWithPassword(username, mdp, (error) => {
      if (error) {
        alert(error.message);
      } else {
        setTimeout(() => FlowRouter.go('accueil'), 200);
      }
    });
  },
});
