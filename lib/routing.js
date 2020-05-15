FlowRouter.route('/', {
    name: 'accueil',
    action(){
        BlazeLayout.render('app_body', { top: "header", main: "accueil" });
    }
});

FlowRouter.route('/favoris', {
    name: 'favoris',
    action(){
        BlazeLayout.render('app_body', { top: "header", main: "favoris" });
    }
});


