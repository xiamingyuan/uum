Ext.define('app.view.NavList', {
    extend: 'Ext.tree.Panel',//继承treepanel
    xtype: 'navlist',
    alias: 'widget.navlist',
    store: 'NavList',
    title: 'UUM菜单',
    rootVisible: false,
    useArrows: true,
    width: 150,
    maxWidth: 350,
    minWidth: 150,
    split: true,
    collapsible: true,
    border:false
});