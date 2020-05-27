# projet_groupe_1

## Projet NUA : Networking Universitaire Artistique

## Cours Unil : Programmation pour Internet II - Meteor.js (SP2020)

**Professeur :** Loïc Cattani   

**Assistant :** Loris Rimaz

Groupe 1 : Amélie Mc Cormick, Rebecca Kneubuehler, Gavin Vinasi, Jacinto Fernandez

## Résumé du projet :

Le projet NUA est une application écrite avec le framework METEOR qui a pour but la création, l'animation et la gestion d'un réseau artistique permettant à ses membres de rencontrer et prendre contact avec d'autres artistes. 
NUA permet en effet à des personnes de s'inscrire dans ce réseau artistique afin de réaliser des projets artistiques et/ou de participer à la création de ces projets.
Au moyen d'un système d'annonces, il est en effet possible aux membres du réseau NUA de trouver des partenaires pouvant offrir certains services artistiques pour participer à la réalisation de leurs projets artistiques.
Initialement prévu pour les étudiants de l'Unil, le projet permettra par extension de devenir un véritable réseau professionel potentiellement utile à la sortie de la Faculté.
L'utilisation de NUA est strictement soumise à l'inscription préliminaire en tant que membre du réseau.

## Project abstract :

The NUA project is an application written with the METEOR framework which aims to create, animate and manage an artistic network allowing its members to produce artistic projects.
NUA allows people to join this artistic network in order to realize artistic projects and / or to participate in the creation of these projects.
By means of an announcement system, it is indeed possible for members of the NUA network to find partners who can offer certain artistic services to participate in the realization of
their artistic projects.
Initially planned for Unil students, the project will by extension become a real professional network potentially useful at the end of the Faculty.
The use of NUA is strictly subject to preliminary registration as a member of the network.

_____________________________________________________________________________________________________________________________________

## Plan de la documentation :

1) Le projet NUA en bref
2) Plan du projet NUA
3) Design de l'application
4) Brève description de l'architecture de l'app. NUA 
5) Pages et fonctionnalités principales de l'application NUA 
6) Tests et validation de l'application 
7) Documentation et mode d'emploi 
8) Evolution du projet NUA 

_____________________________________________________________________________________________________________________________________

## 1) Le projet NUA en bref 

Le projet NUA est une application écrite avec le framework METEOR et qui a pour but la création, l'animation et la gestion d'un réseau artistique permettant à ses membres de produire des projets artistiques. NUA permet en effet à des personnes de s'inscrire dans ce réseau artistique afin de réaliser des projets artistiques ou de participer à la création de ces projets.
Au moyen d'un système d'annonces il est en effet possible aux membres du réseau NUA de trouver des partenaires pouvant offrir certains services artistiques pour participer à la réalisation de certains 
projets artistiques.

_____________________________________________________________________________________________________________________________________

## 2) Plan du projet NUA :

Le projet comprend les phases suivantes :

1.  Cahier des charges de l'application complète (sous forme de wireframes, voir fichier PDF : DesignNUA.pdf
2.  Design artistique a été défini sous forme d'une charte graphique (voir fichier : CHARTE_GRAPHIQUE_DE_NUA.pdf
3.  Définition d'une version prototype, sous ensemble de la full-version, pour tenir compte du temps à disposition
4.  Design, programmation et tests des pages principales selon wireframes correspondant à la version prototype et en parallèle les  unes des autres
5.  Design et création avec la console d'une base de données initiale pour tests
6.  Intégration des pages principales avec la création du workflow routing
7.  Test de routing des pages principales
8.  Incorporation des fonctions de création de membres et d'annonces dans la base de données
9.  Activation des fonctions de création d'accounts avec la fonctionnalité METEOR Account-UI
10. Tests d'intégration des fonctionnalités de la version prototype

_____________________________________________________________________________________________________________________________________

## 3) Design de l'application :

Le design de l'application a été fait à l'aide du logiciel Balsamiq Wireframes qui permet la création d'applications et la simulation des worflows correspondants. Le design de NUA qui a aussi servi de cahier des charges est disponible dans le fichier PDF : DesignNUA.pdf.
Le design artistique a conduit au style de l'application qui est défini sous forme de charte graphique tel que figurant dans le fichier : CHARTE_GRAPHIQUE_DE_NUA.pdf.

_____________________________________________________________________________________________________________________________________

## 4) Brève description de l'architecture de l'app. NUA :

Les principaux composants de l'application NUA sont :

1. Framework METEOR V. 1.10.2 et ses packages associés dont :
* Mongo V. 1.10.0 pour la gestion de la base de données
* Accounts-base, accounts-password et accounts-ui pour la gestion des comptes et accès des utilisateurs
2. Bootstrap 4.5.0 comme front-end toolkit pour la définition des pages

3. Le style de l'application est contenu dans le fichier main.css
4. Certains éléments (icônes) sont tirés de la librairie Google disponible sous : https://fonts.googleapis.com/icon?family=Material+Icons
3. Git, Github et Gihub desktop pour le versioning de l'application ainsi que pour la coordination du codage par le team

_____________________________________________________________________________________________________________________________________

## 5) Pages et fonctionnalités principales de l'application NUA :

Les pages principales de la version prototype disponibles sont :

- Page de login et création de comptes
- Page d'accueil
- Page d'affichage des favoris d'un membre
- Page mon profil
- Page création de compte
- Page création d'annonce

Les fonctionnalités principales sont :

- Création d'un compte membre avec mot-de passe associé
- Gestion de l'accès protégé à l'application à l'aide des comptes 
- Création/gestion de profils de membres
- Création/gestion des annonces
- Affichage des nouveaux membres et nouvelles annonces sur la page Accueil
- Recherche de membres et d'annonces
- Affichage des membres et annonces favoris d'un membre sur la page Favoris
- Activation du statut de favori pour une annonce et/ou un membre en fonction de l'intérêt suscité par sélection "click" sur la page d'Accueil

_____________________________________________________________________________________________________________________________________

## 6) Tests et validation de l'application :

Une base de données de tests a tout d'abord été créée à l'aide des fonctions "console" de Mongodb pour permettre les premiers tests. Ensuite chaque membre du groupe a testé ses pages indépendamment sur ses branches respectives. Dès que le routing et les fonctions de création d'annonces et de membres ont été disponibles, les tests d'intégration et des fonctionnalités ont été exécutées sur la branche Master.

_____________________________________________________________________________________________________________________________________

## 7) Documentation et mode d'emploi :

L'application NUA est "self-explanatory" et l'information fournie sur ce README fait office de mode d'emploi.

_____________________________________________________________________________________________________________________________________


## 8) Evolution du projet NUA :

En fonction du temps à disposition des fonctionnalités supplémentaires telles que définies dans le full-version design viendront s'ajouter à celles présentes dans la version prototype.

