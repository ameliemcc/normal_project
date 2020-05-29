import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { Annonces } from '../../api/annonces';
import './accannonce_grid.html';

Template.newann.events({
  'click .ajoutay1'() {
    const profcur = this._id;
    let curr = Meteor.userId();
    alert(profcur);
    alert(curr);
    },

  })