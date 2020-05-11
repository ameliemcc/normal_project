FlowRouter.route('/', {
    name: 'homePage',
    action() {
        BlazeLayout.render('homePage');
    }
});


FlowRouter.route('/explorer', {
    name: 'explorer',
    action: function(){
        BlazeLayout.render('Layout', {top: "header", main:'explorer'});
    }
});

FlowRouter.route('/favoris', {
    name: 'favoris',
    action(){
        BlazeLayout.render('app_body', {main:'favoris'});
    }
});