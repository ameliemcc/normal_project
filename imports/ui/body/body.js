//corps de l'aplication, template
import './body.html';
import '../explore/explore.html';
import '../favorisgavin/favoris.html';
import '../accueil/accueil.js';
import '../../../lib/routing.js';
import './main.html';
import '../imports/ui/body/body.js';
import '../imports/ui/body/body.html';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import { Template } from 'meteor/templating';

//route pour aller sur 'explorer'
Template.app_body.event({
    'click #explorer'(event){
        event.preventDefault();
        FlowRouter.go('explorer');
    },
    'click #favoris'(event){
        event.preventDefault();
        FlowRouter.go('favoris');
    },
});