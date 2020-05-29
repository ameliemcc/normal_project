import './annonces.html';
import './templateAnnonce.html';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Annonces } from '../../api/annonces.js';

Template.annonces.events({
  'submit .new-annonce'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    // Get value from form element
    const titreVal = event.target.title.value;
    const DescriptionlVal = event.target.description.value;
    const regionVal = event.target.region.value;
    const partVal = event.target.part.value;
    const roleVal = event.target.role.value;
    const emailVal = event.target.email.value;
    // Insert a task into the collection
    if (titreVal !== '' && DescriptionlVal !== '' && regionVal !== '' && partVal !== '' && roleVal !== '' && emailVal !== '') {
      Annonces.insert({
        title: titreVal,
        description: DescriptionlVal,
        region: regionVal,
        part: partVal,
        role: roleVal,
        email: emailVal,
        createdAt: new Date(), // current time
      });

      // eslint-disable-next-line no-alert
      alert('votre annonce est publiéee');
      // Clear form
      setTimeout(() => FlowRouter.go('accueil'), 200);
    } else {
      // eslint-disable-next-line no-alert
      alert('Veuillez remplir tous les champs requis.');
    }
  },

});

Template.accueil.events({
  'click .grid-item1' (event) {
    event.preventDefault();
    const annonceFavorise = Annonces.find('_id');
    console.log(annonceFavorise);
    Meteor.users.insert({
      favorisationAnnonce: annonceFavorise,
    });
  },
});
