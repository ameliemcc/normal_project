//corps de l'aplication, template
import './body.html';
import '../accueil/accueil.js';
import '../favoris/favoris.js'
import '../../../lib/routing.js';
import '../templates/header.html';
import '../profil/profil.js';

import { Template } from 'meteor/templating';


Template.app_body.events({
    'click #accueil'(event){
        event.preventDefault();
        FlowRouter.go('accueil');
    },
    'click #favoris'(event){
        event.preventDefault();
        FlowRouter.go('favoris');
    },
    'click #profil'(event){
        event.preventDefault();
        FlowRouter.go('profil');
    },

});

