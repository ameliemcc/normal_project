import './profil.html';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';
import { Membres } from "../../api/membres.js";
import { Meteor } from 'meteor/meteor';

Template.profil.events({
    'click #supprimerCompte'(event){
        Meteor.users.remove(Meteor.userId());
        setTimeout(() => FlowRouter.go('login'), 200);
    },
});
