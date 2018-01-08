/**
 * Created by localadmin on 2017/3/14.
 */
Ext.define("app.view.perm.PermPanels", {
    extend: "Ext.tab.Panel",
    xtype: 'perm-panels',
    width:'100%',
    height:'100%',
    activeTab: 0,//初始显示第几个Tab页
    deferredRender: true,//是否在显示每个标签的时候再渲染标签中的内容.默认true
    items: [{
        title: 'Home',
        html: 'Home',
        itemId: 'home',
        listeners: {render:function(){//为每个Tab标签添加监听器.当标签渲染时触发
            Ext.Msg.alert("Tab 1","渲染Tab 1成功") ;
        }}
    }, {
        title: 'Users',
        html: 'Users',
        itemId: 'users',
        listeners: {render:function(){//为每个Tab标签添加监听器.当标签渲染时触发
            console.log("123");
            Ext.Msg.alert("Tab 2","渲染Tab 2成功") ;
        }}
    }, {
        title: 'Tickets',
        html: 'Tickets',
        itemId: 'tickets',
        listeners: {render:function(){//为每个Tab标签添加监听器.当标签渲染时触发
            Ext.Msg.alert("Tab 3","渲染Tab 3成功") ;
        }}
    }]
});
