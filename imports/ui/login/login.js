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
});
