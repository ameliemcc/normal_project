import './accueil.html';
import { Membres } from "../../api/membres.js";

<<<<<<< Updated upstream
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
=======

/* Code pour forcer l'utilisateur à se connecter avant d'accéder au site 
if (currentUser = true) {
    event.preventDefault();
    FlowRouter.go('accueil')
} else {
    event.preventDefault();
    FlowRouter.go('1')
} 
*/
>>>>>>> Stashed changes
