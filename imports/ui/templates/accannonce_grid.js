import { Meteor } from 'meteor/meteor';
import { Annonces } from '../../api/annonces';
import './accannonce_grid.html';

Template.newann.events({
  
    'click.ajoutay1'() {
      if (typeof Meteor.user().profile.fav_annonce === 'undefined') {
          Meteor.users.update({_id: Meteor.userId() },
          {$push: {"profile.fav_annonce": this._id}}
          );
  
          alert("Votre annonce est maintenant likée");
      }   
      else if (Meteor.user().profile.fav_annonce.includes(this._id)){
        alert("Vous avez déjà liké cette annonce");
  
      }  else {
          Meteor.users.update({_id: Meteor.userId() },
          {$push: {"profile.fav_annonce": this._id}}
          );
  
          alert("Votre annonce est maintenant likée");
  
      }

    
    },

})