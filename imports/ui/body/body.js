// corps de l'aplication, template
import './body.html';
import './body.css';
import '../explorer/explore.js';
import '../accueilMembres/accueilM.js';
import '../../../lib/routing.js';
import '../templates/header.html';


import { Template } from 'meteor/templating';


// route pour aller sur 'explorer'
Template.app_body.events({
  'click #explorer'(event) {
    event.preventDefault();
    FlowRouter.go('explore');
  },
  'click #favoris'(event) {
    event.preventDefault();
    FlowRouter.go('favoris');
  },

  'click #accueilM'(event) {
    event.preventDefault();
    FlowRouter.go('accueilM');
  },

});
