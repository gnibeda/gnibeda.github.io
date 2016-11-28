(function (ns) {
    'use strict';

    var defaultWindowHeight = 0;

    /**
     * Define main application component
     */
    ns.AppComponent = ng.core.Component({
            selector: '[demo-app]',
            template: '<router-outlet></router-outlet>',
        })
        .Class({constructor: [
            ng.router.Router,
            App
        ]});

    /**
     * Router setup
     */
    var routes =[
        { path: '', component: ns.UserListComponent }
    ];

    /**
     * Application component constructor
     * @constructor
     */
    function App(a) {
    }

    /**
     * Angular main module definition
     */
    var AppModule = ng.core.NgModule({
        declarations: [
            ns.AppComponent,
            ns.UserComponent,
            ns.UserListComponent
        ],
        //schemas: [ng.core.CUSTOM_ELEMENTS_SCHEMA],
        imports: [
            ng.platformBrowser.BrowserModule,
            ng.forms.FormsModule,
            ng.forms.ReactiveFormsModule,
            ng.router.RouterModule.forRoot(routes, { useHash: true })
        ],
        bootstrap: [App]
    }).Class({
        constructor: function() {}
    });

    /**
     * Entry point
     */
    document.addEventListener('DOMContentLoaded', function () {
        // Enable prod mode if running from localhost
        if (window.location.hostname.toLowerCase() !== 'localhost') {
            ng.core.enableProdMode();
        }
        ng.platformBrowserDynamic.platformBrowserDynamic().bootstrapModule(AppModule);
    });

})(window.ngDemo || (window.ngDemo = {}));