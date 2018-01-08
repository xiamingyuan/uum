/**
 * Created by apple on 17/3/15.
 */
Ext.define("app.view.user.Edit",{
    extend: 'Ext.form.Panel',//继承frompanel
    xtype: 'useredit',
    alias: 'widget.useredit',
    id:'userEditForm',
    fullscreen: true,
    controller:'userAdd',
    layout: {
        type:'anchor'
    },
    defaults: {
        anchor: '30%'
    },
    title: '添加用户',
    width:'100%',
    height:'100%',
    bodyStyle: 'padding:5px 5px 0',
    bodyBorder:false,
    border: false,
    defaultType: 'textfield',
    style:{border:'1px solid #c1c1c1'},
    margin:'20',
    fieldDefaults: {
        labelWidth: 80
    },
    items: [{
        xtype: 'textfield',
        fieldLabel: '用户名',
        labelAlign: 'right',
        msgTarget: 'under',
        name:'name',
        margin:'0 0 10',
        allowBlank: false,
        blankText : "用户名不能为空"
    },{
        xtype: 'textfield',
        fieldLabel: '密码',
        name:'password',
        labelAlign: 'right',
        inputType: 'password',
        msgTarget: 'under',
        allowBlank: false,
        blankText : "密码不能为空",
        maxLength : 20,
        maxLengthText : '密码长度不能超过20位',
        minLength : 5,
        minLengthText : '密码长度不能低于5位',
        margin:'0 0 10'
    },{
        // Use the default, automatic layout to distribute the controls evenly
        // across a single row
        xtype: 'radiogroup',
        fieldLabel: '性别',
        labelAlign: 'right',
        cls: 'x-check-group-alt',
        items: [
            {boxLabel: '男', labelWidth: 0,inputValue:'1', name: 'gender'},
            {boxLabel: '女', labelWidth: 0, inputValue:'0',name: 'gender'},
            {boxLabel: '未知', labelWidth: 0, inputValue:'-1',name: 'gender', checked: true}
        ],
        margin:'0 0 10'
    },{
        xtype: 'checkboxgroup',
        fieldLabel: '启用',
        labelAlign: 'right',
        cls: 'x-check-group-alt',
        items: [
            {boxLabel: '', labelWidth: 0,inputValue:true, name: 'isEnabled'}
        ],
        margin:'0 0 10'
    },{
        xtype: 'textfield',
        fieldLabel: '手机',
        name:'phone',
        labelAlign: 'right',
        margin:'0 0 10'
    },{
        xtype: 'textfield',
        fieldLabel: '固话',
        name:'telphone',
        labelAlign: 'right',
        margin:'0 0 10'
    },{
        xtype: 'textfield',
        fieldLabel: '邮箱',
        name:'mail',
        labelAlign: 'right',
        margin:'0 0 10'
    },{
        xtype: 'textarea',
        fieldLabel: '备注',
        name:'remark',
        labelAlign: 'right',
        style: 'margin:0', // Remove default margin
        height:'100px'
    }],
    buttonAlign:'right',
    buttons : [{
        text : '返回',
        id: 'backList',
        listeners: {
            click: 'back'
        }
    },{
        text : '确定',
        id: 'sureAdd',
        listeners: {
            click: 'sureAdd'
        }
    },{
        text : '重置',
        id: 'resetAdd',
        listeners: {
            click: 'resetAdd'
        }
    }]
});