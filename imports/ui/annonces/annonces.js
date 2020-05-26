import './annonces.html';
import './templateAnnonce.html';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
 
import { Annonces } from '../../api/annonces.js';

/*
Template.annonces.onCreated(function bodyOnCreated() {
    this.state = new ReactiveDict();
  });
  
 
Template.annonces.helpers({
  annonces() {
    const instance = Template.instance();
    return Annonces.find({}, { sort: { createdAt: -1 } });
  },
});
*/

Template.annonces.events({
    'submit .new-annonce': function(event) { 
      // Prevent default browser form submit
      event.preventDefault();
   
      // Get value from form element
      let titreVal = event.target.title.value;
      let DescriptionlVal = event.target.description.value;
      let regionVal = event.target.region.value;
      let partVal =event.target.part.value;
      let roleVal = event.target.role.value;
      let emailVal = event.target.email.value;
      // Insert a task into the collection
      Annonces.insert({
        title: titreVal,
        description: DescriptionlVal,
        region: regionVal,
        part: partVal,
        role: roleVal,
        email: emailVal,
        createdAt: new Date(), // current time
      });
   
      // Clear form
      target.title.value = '';
      target.description.value = '';
      FlowRouter.go('accueil');
    },
   
  });

