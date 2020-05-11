FlowRouter.route('/', {
    name: 'accueil',
    action() {
        BlazeLayout.render('app_body', {main: 'accueil'});
    }
});


FlowRouter.route('/explore', {
    name: 'explore',
    action(){
        BlazeLayout.render('app_body', {main:'explore'});
    }
});

FlowRouter.route('/favoris', {
    name: 'favoris',
    action(){
        BlazeLayout.render('app_body', {main:'favoris'});
    }
});