/**
 * Created by apple on 17/3/10.
 */
Ext.define('app.controller.app.app', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.app.app',
    // routes: {
    //     '/app/add': {
    //         action: 'handleRoute'//执行跳转
    //     }
    // },
    control: {
        'applist': {//组件别名，表示要控制的是该组件
            cellclick: 'changEnable'
        },
        'textfield[name=queryKey],textfield[name=orgName]':{
            keyup: function (filed, e) {
                console.log("123345");
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
        }
        // 'button[name=addUser]': {
        //     click: function () {
        //         this.redirectTo('/app/add');
        //     }
        //
        // }
    },
    changEnable: function (view, cell, cellIndex, record, row, recordIndex, clickEvent ) {
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
    }
    // handleRoute: function () {
    //     var me = this,
    //         contentPanel = Ext.getCmp("app-contentPanel"),//获取容器
    //         className,cmp,ViewClass;
    //
    //     contentPanel.removeAll(true);//清空容器
    //     className = Ext.ClassManager.getNameByAlias('widget.appadd');//获取视图
    //     ViewClass = Ext.ClassManager.get(className);
    //     cmp = new ViewClass();
    //     contentPanel.add(cmp);//向容器中添加视图
    // }
});