/**
 * Created by apple on 17/3/9.
 */
Ext.define('app.controller.ChangePassword', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ChangePassword',
    control: {

    },
    cancleChange:function () {
        var win = Ext.WindowMgr.get('changePwdWin');//获取修改密码的窗口
        win.close();
    },
    sureChange:function () {
        var form = Ext.getCmp('ChangePasswordForm');
        var win = Ext.WindowMgr.get('changePwdWin');//获取修改密码的窗口
        if(form.getForm().isValid()){
            form.getForm().submit({
                url:'uum',
                method:'GET',
                waitMsg:'正在修改密码',
                // waitTitle:"请等候。。。",
                // params:{name:'admin', oldPwd:'admin', newPwd:'admin1'},
                success:function () {
                    win.close();
                    Ext.Msg.alert('温馨提示', '密码修改成功!');
                },
                failure:function () {
                    win.close();
                    Ext.Msg.alert('温馨提示', '密码修改成功1!');
                }
            });
        }
    },
    resetChange:function () {
        Ext.getCmp('ChangePasswordForm').getForm().reset();//重置修改密码的form表单
    }

});