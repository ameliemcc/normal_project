import { Template } from 'meteor/templating';
 
import './body.html';
import {Annonces} from '../api/annonces.js'
Template.body.helpers({
  
  surname :[
    {text:"Jacinto"},
  ],
  annonces : function (){
    return Annonces.find({}).fetch()
  }
});
