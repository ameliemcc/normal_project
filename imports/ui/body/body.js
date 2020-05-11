//corps de l'aplication, template
import './body.html';
import './body.css';
import '../explore/explore.js';
import '../favorisgavin/favoris.js';
import '../accueil/accueil.js';
import '../../../lib/routing.js';


import { Template } from 'meteor/templating';


//route pour aller sur 'explorer'
Template.app_body.events({
    'click #explorer'(event){
        event.preventDefault();
        FlowRouter.go('explore');
    },
    'click #favoris'(event){
        event.preventDefault();
        FlowRouter.go('favoris');
    },
    'click #accueil'(event){
        event.preventDefault();
        FlowRouter.go('accueil');
    },
});