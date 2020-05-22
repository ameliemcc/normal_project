import './accueil.html';
import { Membres } from "../../api/membres.js";

Template.accueil.helpers({
  "Membres": () => Membres.find({}).fetch()
});
import { Template } from 'meteor/templating';
 
 
Template.accueil.helpers({
  tasks: [
    { text: 'This is task 1' },
    { text: 'This is task 2' },
    { text: 'This is task 3' },
  ],
});