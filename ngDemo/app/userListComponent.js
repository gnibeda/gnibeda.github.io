(function (ns) {
    'use strict';

    ns.UserListComponent = ng.core.Component({
        selector: 'user-list',
        templateUrl: 'app/userListComponent.html'
    }).Class({
        constructor: UserList
    });

    function UserList() {
        this.users = [];
    }

    UserList.prototype.addUser = function () {
        this.users.push({name: this.userName, isDeleted: false});
    };

    UserList.prototype.cleanUp = function() {
        this.users = this.users.filter(u => !u.isDeleted);
    }

})(window.ngDemo || (window.ngDemo = {}));