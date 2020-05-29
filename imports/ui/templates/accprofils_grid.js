import './accprofils_grid.html';
import { Annonces } from '../../api/annonces';

Template.newmemb.events({
  'click.ajoutay'() {
    const prof = this._id;
    // eslint-disable-next-line no-unused-expressions
    alert(prof);
    },

  })