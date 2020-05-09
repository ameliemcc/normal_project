FlowRouter.route('/', {
    name: 'homePage',
    action() {
        BlazeLayout.render('homePage');
    }
});


FlowRouter.route('/explore', {
    name: 'explorer',
    action(){
        BlazeLayout.render('app_body', {main:'explorer'});
    }
});

FlowRouter.route('/favoris', {
    name: 'favoris',
    action(){
        BlazeLayout.render('app_body', {main:'favoris'});
    }
});