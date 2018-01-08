Ext.application({
    name: 'app',
    autoCreateViewport: true,
    models: [],
    stores: ['NavList','User','app'],
    controllers: [],
    init: function() {
        var me = this;
        //设置默认路由
        me.setDefaultToken('basic-panels');
    }
});

// Ext.application({
//     name: 'MyApp',
//
//     extend: 'MyApp.Application',
//
//     mainView: 'MyApp.view.Viewport'
//
//     //-------------------------------------------------------------------------
//     // Most customizations should be made to MyApp.Application. If you need to
//     // customize this file, doing so below this section reduces the likelihood
//     // of merge conflicts when upgrading to new versions of Sencha Cmd.
//     //-------------------------------------------------------------------------
// });