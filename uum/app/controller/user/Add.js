/**
 * Created by apple on 17/3/9.
 */
Ext.define('app.controller.user.Add', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userAdd',
    control: {

    },
    back:function () {
        this.redirectTo('/userlist');
        var me = this,
            contentPanel = Ext.getCmp("app-contentPanel"),//获取容器
            className,cmp,ViewClass;
        contentPanel.removeAll(true);//清空容器
        className = Ext.ClassManager.getNameByAlias('widget.userlist');//获取视图
        ViewClass = Ext.ClassManager.get(className);
        cmp = new ViewClass();
        contentPanel.add(cmp);//向容器中添加视图
    },
    sureAdd:function () {
        var me = this;
        var form = Ext.getCmp('userAddForm');
        var formValues = form.getForm().getValues();
        formValues.isEnabled=formValues.isEnabled==undefined?false:formValues.isEnabled;//复选框不选中不能赋值,手动赋值
        if(form.getForm().isValid()){
            Ext.Ajax.request({
                url: 'useradd',
                method: 'POST',
                params: formValues,
                callback: function (options, success, response) {
                    if(response.status==200){
                        Ext.MessageBox.alert('提示', '添加成功');
                        setTimeout(function(){
                            Ext.MessageBox.hide();
                            me.back();
                            Ext.getStore('User').loadPage(1);
                        }, 1000);
                    }
                }
            })

        }
    },
    resetAdd:function () {
        Ext.getCmp('userAddForm').getForm().reset();//重置修改密码的form表单
    }

});