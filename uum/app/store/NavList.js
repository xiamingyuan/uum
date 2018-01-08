Ext.define('app.store.NavList', {
    extend: 'Ext.data.TreeStore',
    storeId: 'NavList',
    root: {
        expanded:true,
        children: [
            {
                text: '机构管理',
                id:'basic-panels',
                leaf: true,
                routeId: 'org',
                iconCls: 'icon-paste',
            },
            {
                text: '应用管理',
                id:'app',
                leaf: true,
                routeId: 'app',
                iconCls: 'icon-cog'
            },
            {
                text: '角色管理',
                id:'basic-panels3',
                leaf: true,
                routeId: 'org',
                iconCls: 'icon-sitemap'
            },
            {
                text: '权限管理',
                id:'perm-panels',
                leaf: true,
                routeId: 'PermPanels',
                iconCls: 'icon-unlock'
            },
            {
                text: '用户管理',
                id:'userlist',
                leaf: true,
                routeId: 'userlist',
                iconCls: 'icon-user'
            },
            {
                text: '在线用户',
                id:'basic-panels6',
                leaf: true,
                routeId: 'org',
                iconCls: 'icon-group'
            }
        ]
    }

});