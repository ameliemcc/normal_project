/* Pour la barre de recherche
Il faut que l'utilisateur puisse entrer une valeur. En cliquant sur le bouton rechercher,
cette valeur doit être comparée aux valeurs dans la base de données.
Ensuite, seules les valeurs qui sont égales aux valeurs entrées doivent s'afficher. */

import { Index, MinimongoEngine } from 'meteor/easy:search';
import { Meteor } from 'meteor/meteor';

const mem = Meteor.users;

const memIndex = new Index({
  collection: mem,
  fields: ['username', 'profile'],
  engine: new MinimongoEngine(),
});

Tracker.autorun(function () {
  const cursor = memIndex.search('ggg');
  console.log(memIndex.search('ggg')
});
