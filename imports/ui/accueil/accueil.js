import { Template } from 'meteor/templating';
import {Annonces} from '../../api/annonces.js';
/*import { Membres } from "../../api/membres.js";*/

import '../templates/nannonce_grid.html';
import '../templates/nprofils_grid.html';
import './accueil.html';


Template.accueil.helpers({
  
  surname :[
    {nom:"Jacinto Fernandez", age:"63 ans", profess:"Etudiant", localité: "Yverdon"},
    {nom:"Pierre Dupont", age:"25 ans", profess: "Apprenti", localité: "Yens"},
    {nom:"Paul Durand", age:"25 ans", profess: "Boulanger", localité: "Morrens"},
    {nom:"Gavin Vinasi", age:"25 ans", profess: "Pâtissier", localité: "Leysin"}
  ],
  annonces : function (){
    return Annonces.find({}).fetch()
  }
});