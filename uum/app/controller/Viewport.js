/**
 * Created by apple on 17/3/8.
 */
Ext.require('*');
Ext.define('app.controller.Viewport', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.Viewport',
    control: {
        'navlist': {//组件别名，表示要控制的是该组件
            selectionchange: 'onTreeNavSelectionChange'
        }
    },
    routes: {
        ':id': {
            action: 'handleRoute',//执行跳转
            before: 'beforeHandleRoute'//路由跳转前操作
        }
    },
    onTreeNavSelectionChange: function (selModel, records) {
        console.log(records)
        var record = records[0];
        if (record) {
            this.redirectTo(record.getId());
        }
    },

    beforeHandleRoute: function (id, action) {
        var me = this,
            mainView = me.getView(),
            navigationTree = mainView.down('navlist'),
            store = navigationTree.getStore(),
            node = store.getNodeById(id);

        if (node) {
            action.resume();
        }else if(store.getCount() === 0){
            //在store load事件中判断节点，避免store数据未加载情况
            store.on('load', function () {
                node = store.getNodeById(id);
                if (node) {
                    action.resume();
                }else {
                    Ext.Msg.alert('路由跳转失败', '找不到id为' + id + ' 的组件');
                    action.stop();
                }
            });
        }else {
            Ext.Msg.alert('路由跳转失败', '找不到id为' + id + ' 的组件');
            action.stop();
        }
    },

    handleRoute: function (id) {
        var me = this,
            mainView = me.getView(),
            navigationTree = mainView.down('navlist'),
            contentPanel = mainView.down('app-contentPanel'),
            store = navigationTree.getStore(),
            node = store.getNodeById(id),
            className,cmp,ViewClass;

        //响应路由，左侧树定位到相应节点
        navigationTree.getSelectionModel().select(node);
        navigationTree.getView().focusNode(node);

        //响应路由，改变右侧panel内容
        contentPanel.removeAll(true);
        if (node.isLeaf()) {
            className = Ext.ClassManager.getNameByAlias('widget.' + id);
            console.log(className)
            ViewClass = Ext.ClassManager.get(className);
            cmp = new ViewClass();
            contentPanel.add(cmp);
        }
        var text = node.get('text'),
            title = node.isLeaf() ? (node.parentNode.get('text') + ' - ' + text) : text;//适用osp 有二级菜单的情况
        contentPanel.setTitle(text);
        document.title = document.title.split(' - ')[0] + ' - ' + text;
    }

});