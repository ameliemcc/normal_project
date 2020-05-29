import { Meteor } from 'meteor/meteor';
import { Annonces } from '../../api/annonces';
import './accannonce_grid.html';

Template.newann.events({
  'click .ajoutay1'() {
    let profcur = this._id;
    let currmemb = Meteor.userId();
    alert(profcur);
    alert(currmemb);
    Meteor.users.update(
        {_id: Meteor.userId() },
        {$push: {"profile.fav_annonce": this._id}}
      )
    },

})