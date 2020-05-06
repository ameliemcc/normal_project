/*FlowRouter.route('/', {
    name: 'accueil',
    action() {
        BlazeLayout.render('app_body', {main:'accueil'});
    }
});

*/

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