/* Pour ajouter ce qui est favorisé aux favoris 
Il faut que onClick, l'ID de l'annonce ou du membre soit récupéré et ajouter dans currentUser. */

Template.nouvmembre.events({
    'click .material-icons favdiv': function (event) {
      event.preventDefault();
      var membreFavorise = Meteor.users.findOne(userId);
      user = currentUser;
      user.insert({
        favorisationMembre: membreFavorise,
      });
      document.write('Favorisé !')
    },
  });

/*
  var annonceFavorise =
  favorisationAnnonce: annonceFavorise, */