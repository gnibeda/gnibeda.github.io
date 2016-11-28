(function (ns) {
    'use strict';

    ns.UserComponent = ng.core.Component({
        selector: 'user-component',
        templateUrl: 'app/userComponent.html',
        inputs: ['user']
    }).
    Class({
        constructor: User
    });

    function User() {
    }

    User.prototype.delete = function() { this.user.isDeleted = true; };

    User.prototype.restore = function() { this.user.isDeleted = false; };

})(window.ngDemo || (window.ngDemo = {}));