/**
 * Created by apple on 17/3/9.
 */
Ext.define('app.view.User', {//暂时弃用  跟user.List合并
    extend: 'Ext.container.Container',
    xtype: 'user',
    width : '100%',
    height : '100%',
    layout: 'vbox',
    items: [{
        xtype: 'userlist',
        width:'100%',
        flex:1,
        style: 'margin:20;'//设置面板style
    }]
    // renderTo: Ext.getBody(),//设置父级
    // border: 1,
    // style: {borderColor:'#f00', borderStyle:'solid', borderWidth:'1px'},//设置边框
    // defaults: {
    //     labelWidth: 80,
    //     xtype: 'datefield',
    //     flex: 1,
    //     style: {
    //         padding: '10px'
    //     }
    // },

});