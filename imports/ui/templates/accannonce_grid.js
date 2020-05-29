import './accannonce_grid.html';
import { Annonces } from '../../api/annonces';

Template.newann.events({
  'click .ajoutay1'() {
    const profcur = this._id;
    // eslint-disable-next-line no-unused-expressions
    alert(profcur);
    },

  })