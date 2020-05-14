/* eslint-env mocha */
// eslint-disable-next-line no-unused-vars
/* global Meteor */

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
// Commentaire d'essai fait par Tinto

import './main.html';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import '../imports/ui/templates/creer.html';


/* Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
}); */
import '../imports/ui/body/body.js';
// eslint-disable-next-line import/no-unresolved
