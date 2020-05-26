import './login.html'

/*
Template.login.events({
    'click #ml-2'(event) {
      event.preventDefault();
      FlowRouter.go('creer');
    }
})
*/

Template.login.events({
  'click #creation'(event){
          event.preventDefault();
          FlowRouter.go('creation');
  },
  'click #loginCompte'(event){
    event.preventDefault();
    let email = document.getElementById('inputEmail4').value;
    let mdp = document.getElementById('inputPassword4').value;
    Meteor.loginWithPassword(email, mdp, (error) => {
      if(error){
        alert(error.message);
      }else {
        setTimeout(() => FlowRouter.go('accueil'), 200);
      }
    })
},
});
