/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',

    name: 'MyApp',

    requires:['MyApp.view.*'],//引入view目录下的所有文件

    stores: [
        'main.Navigation'
    ],

    // launch: function () {
    //
    // },

    init: function() {
        var me = this;
        //设置默认路由
        me.setDefaultToken('all');
    }

});