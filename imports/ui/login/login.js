import './login.html'


Template.login.events({
    'click #ml-2'(event) {
      event.preventDefault();
      FlowRouter.go('creer');
    }
})

