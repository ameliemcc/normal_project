/* Pour la barre de recherche 
Il faut que l'utilisateur puisse entrer une valeur. En cliquant sur le bouton rechercher, 
cette valeur doit être comparée aux valeurs dans la base de données. 
Ensuite, seules les valeurs qui sont égales aux valeurs entrées doivent s'afficher. 
*/

import {Index, MinimongoEngine} from 'meteor/easy:search'

const membresIndex = new Index({
    collection: membres,
    fields: ['',''],
})


