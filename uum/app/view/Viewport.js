Ext.define('app.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: {
        type: 'border'
    },
    requires: [
        'app.controller.Viewport',
        'app.controller.ChangePassword',
        'app.controller.User',
        'app.controller.app.app', //应用管理controller
        'app.view.NavList',
        'app.view.user.List',
        'app.view.main.ContentPanel',//引入内容区域
        'app.view.panel.BasicPanels',
        'app.view.panel.FramedPanels',
        'app.view.perm.PermPanels',//权限管理
        'app.view.ChangePassword',
        'app.view.app.app' //应用管理
    ],
    controller:'Viewport',
    items: [{
            region: 'north',
            xtype: 'toolbar',
            height: 54,
            items: [{
                xtype: 'box',
                width:88,
                html: '<p class="logo"> <a href="#"><img src="image/logo.png" alt="logo"></a></p>'
            },{
                xtype: 'box',
                html: '<p class="name"> <span class="name_cn">中公网用户管理系统</span><br> <span class="name_en">CIS Subscriber Management System</span> </p>',
                flex: 1
            }, {
                text: "您好,"+Ext.getDom("userName").value,
                // iconCls: 'user',
                width:110,
                menu: {
                    xtype: 'menu',
                    plain: true,
                    // items: {
                    //     xtype: 'buttongroup',
                    //     columns: 1,
                    //
                    // }
                    items: [{
                        xtype: 'menuitem',
                        itemId: 'changepassword',
                        tooltip: '修改密码',
                        // width: '100%',
                        text: '修改密码',
                        listeners:{
                            click:function () {
                                var win = Ext.create('Ext.window.Window', {
                                    id:'changePwdWin',
                                    autoShow: true,
                                    draggable : true,//禁止拖动
                                    resizable : false,//禁止缩放
                                    title: '修改密码',
                                    width: 500,
                                    height: 300,
                                    layout: 'fit',
                                    plain:true,
                                    modal:true,
                                    items: {
                                        xtype: 'changepassword'
                                    }
                                });
                            }
                        }
                    },{
                        xtype: 'menuitem',
                        tooltip: '退出登录',
                        cls: 'logoutBtn',
                        // width: '100%',
                        text: '退出登录',
                        href:'logout'
                    }]
                }
            }]
        }, {
            region: 'west',
            xtype: 'navlist',
            itemId: 'treelist',
            expanderFirst: false
        }, {
            region: 'center',
            xtype: 'app-contentPanel',
            id: 'app-contentPanel',
            flex: 1
        }]
});