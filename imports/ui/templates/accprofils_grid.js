import { Meteor } from 'meteor/meteor';
import { Annonces } from '../../api/annonces';

import './accprofils_grid.html';

Template.newmemb.events({
  'click.ajoutay'() {
    const prof = this._id;
    // eslint-disable-next-line no-unused-expressions
    alert(prof);
    
    },

  })