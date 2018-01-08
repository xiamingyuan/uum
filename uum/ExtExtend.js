/**
 * Created by apple on 17/3/9.
 */
//重复密码验证
Ext.apply(Ext.form.VTypes, {
    repetition: function(val, field) {     //返回true，则验证通过，否则验证失败
        if (field.repetition) {               //如果表单有使用repetition配置，repetition配置是一个JSON对象，该对象提供了一个名为targetCmpId的字段，该字段指定了需要进行比较的另一个组件ID。
            var cmp = Ext.getCmp(field.repetition.targetCmpId);   //通过targetCmpId的字段查找组件
            if (Ext.isEmpty(cmp)) {      //如果组件（表单）不存在，提示错误
                Ext.MessageBox.show({
                    title: '错误',
                    msg: '发生异常错误，指定的组件未找到',
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });
                return false;
            }
            if (val == cmp.getValue()) {  //取得目标组件（表单）的值，与宿主表单的值进行比较。
                return true;
            } else {
                return false;
            }
        }
    },
    repetitionText: '两次密码不一致'
})