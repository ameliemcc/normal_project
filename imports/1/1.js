import {Flowrouter} from "meteor/kadira:flow-router"

import "/1.html";

'click #login'(event) {
    event.preventDefault();
    FlowRouter.go('login');
};

'click #creation'(event) {
        event.preventDefault();
        FlowRouter.go('creation');
};

