/**
 * Created by apple on 17/3/10.
 */
Ext.define('app.controller.User', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.User',
    // stores: ['User'],
    // models: ['User'],
    // views: ['user.List'],
    routes: {
        '/user/add': {
            action: 'handleRoute'//执行跳转
        },
        '/user/edit/:id': {
            action: 'handleRoute'//执行跳转
        }
    },
    control: {
        'userlist': {//组件别名，表示要控制的是该组件
            cellclick: 'changEnable'
        },
        'textfield[name=queryKey],textfield[name=orgName]':{
            keyup: function (filed, e) {
                if (e.getKey() == e.ENTER) {
                    var queryKey = Ext.getCmp("queryKey").getValue();
                    var orgName = Ext.getCmp("orgName").getValue();
                    var isEnabled = Ext.getCmp("isEnabled").getValue();
                    Ext.getStore('User').getProxy().extraParams = {
                        isEnabled: isEnabled,
                        orgName: orgName,
                        queryKey: queryKey
                    };
                    Ext.getStore('User').loadPage(1);
                }
            }
        },
        'button[name=addUser]': {
            click: function () {
                this.redirectTo('/user/add');
            }

        }
    },
    changEnable: function (view, cell, cellIndex, record, row, recordIndex, clickEvent) {
        var id = Ext.get(clickEvent.getTarget()).getId();
        if(cellIndex==5){
            Ext.Ajax.request({
                url: 'user',
                params: {id: record.getId(), isEnabled: !record.data.enabled },
                method: 'GET',
                success: function (response, options) {
                    // Ext.MessageBox.alert('成功', '从服务端获取结果: ' + response.responseText);
                    Ext.MessageBox.alert('提示','修改成功');
                },
                failure: function (response, options) {
                    Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.status);
                }
            });
        }
        //删除用户
        if(id=='delete'){
            Ext.Ajax.request({
                url: 'user',
                params: {id: record.getId()},
                method: 'GET',
                success: function (response, options) {
                    Ext.MessageBox.alert('提示','删除成功');
                    Ext.getStore('User').loadPage(1);
                },
                failure: function (response, options) {
                    Ext.MessageBox.alert('提示', '请求超时或网络故障,错误编号：' + response.status);
                }
            });
        }else if(id=='edit'){
            this.redirectTo('/user/edit/:'+record.getId());
        }
    },
    handleRoute: function (id) {
        console.log(id)
        var me = this,
            contentPanel = Ext.getCmp("app-contentPanel"),//获取容器
            className,cmp,ViewClass;

        contentPanel.removeAll(true);//清空容器
        if(id){
            className = Ext.ClassManager.getNameByAlias('widget.useredit');//获取视图
        }else{
            className = Ext.ClassManager.getNameByAlias('widget.useradd');//获取视图
        }
        ViewClass = Ext.ClassManager.get(className);
        cmp = new ViewClass();
        contentPanel.add(cmp);//向容器中添加视图
    }
});