import { Template } from 'meteor/templating';
 
import './body.html';
import {Annonces} from '../api/annonces.js'
Template.body.helpers({
  
  surname :[
    {nom:"Jacinto Fernandez", age:"63 ans", profess:"Etudiant", localité: "Yverdon"},
    {nom:"Pierre Dupont", age:"25 ans", profess: "Apprenti", localité: "Yens"},
    {nom:"Paul Durand", age:"25 ans", profess: "Boulanger", localité: "Morrens"}
  ],
  annonces : function (){
    return Annonces.find({}).fetch()
  }
});
