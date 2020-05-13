//corps de l'aplication, template
import './body.html';
import './body.css';
import '../accueil/accueil.js';
import '../../../lib/routing.js';
import '../templates/header.html';

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

});