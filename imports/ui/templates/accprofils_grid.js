import { Meteor } from 'meteor/meteor';
import { Annonces } from '../../api/annonces';

import './accprofils_grid.html';

Template.newmemb.events({
  'click.ajoutay'() {
    let prof = this._id;
    let currmemb = Meteor.userId();
    Meteor.users.update(
      {_id: Meteor.userId() },
      {$push: {"profile.fav_personne": this._id}}
    )
    alert("Votre profil est maintenant liké")
    },

  })