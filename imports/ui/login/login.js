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
    const mail = document.getElementById('mail').value;
    console.log(mail);
    const mdp = document.getElementById('mdp').value;
    console.log(mdp);
    Meteor.loginWithPassword(mail, mdp, (error) => {
      if (error) {
        alert(error.message);
        let idU =  Meteor.userId();
        console.log(idU);
      } else {
        let idU =  Meteor.userId();
        console.log(idU);
        setTimeout(() => FlowRouter.go('accueil'), 200);
      }
    });
  },
});
