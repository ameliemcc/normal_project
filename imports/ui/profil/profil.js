import './profil.html';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

Template.profil.events({
    'click #supprimerCompte' (event) {
        event.preventDefault();
        Meteor.users.remove({ _id: Meteor.userId() });
        FlowRouter.go('login');
        alert('Compte supprimé');
    },
});
