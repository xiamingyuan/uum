Ext.define("app.view.app.app", {
    extend: "Ext.grid.Panel",
    alias: 'widget.applist',
    xtype:'app',
    store:"app",
    controller:'app.app',
    width : '100%',
    height : '100%',
    margin:20,
    title: '用户列表',
    selModel: 'checkboxmodel',//创建复选框
    columns : [
        {xtype: 'rownumberer'},//创建序号
        { text: '编号',width: 100, dataIndex: 'code' },
        { text: '应用名称', width: 200,dataIndex: 'name' },
        { text: '描述', flex: 1, dataIndex: 'description' },
        { text: '日期', width: 200,dataIndex: 'createTime',renderer:Ext.util.Format.dateRenderer('Y-m-d H:i')}
    ],
    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl : new Ext.XTemplate(
            '<p><b>用户名:</b> {name}</p>',
            '<p><b>性别:</b> {gender:this.setGender}</p>',
            '<p><b>角色:</b> {userRoleInfo}</p>',
            {
                setGender: function(v){
                    var gender = v!=-1 ?v==1?'男':'女':'未知';
                    return gender;
                }
            })
    }],
    iconCls: 'icon-grid',
    initComponent: function() {
        var me = this;
        // me.store = 'User';
        // paging bar on the bottom
        me.bbar = Ext.create('Ext.PagingToolbar', {
            pagesize:5,
            store: me.store,
            displayInfo: true,
            displayMsg: '显示{0}-{1}条,共{2}个用户',
            emptyMsg: "暂无数据!"
        });
        me.tbar = Ext.create("Ext.Toolbar",{
            xtype: 'container',
            layout: 'column',
            items: [
                {
                    xtype: 'button',
                    text: '添加',
                    iconCls: 'add16',
                    id:"addUser",
                    name: 'addUser'
                },
                {
                    id:"queryKey",
                    xtype: 'textfield',
                    name: 'queryKey',
                    hideLabel: false,
                    labelWidth:'0',
                    width: '200px',
                    emptyText:'用户名',
                    enableKeyEvents:true
                },
                {
                    id:"orgName",
                    xtype: 'textfield',
                    name: 'orgName',
                    hideLabel: true,
                    labelWidth:'0',
                    width: '200px',
                    emptyText:'机构名',
                    enableKeyEvents:true
                },
                {
                    xtype: 'combobox',
                    id:"isEnabled",
                    name:"isEnabled",
                    hideLabel: true,
                    labelWidth:'0',
                    width: '80px',
                    editable:false,//不可编辑
                    // emptyText: '全部',
                    store:Ext.create('Ext.data.Store', {
                        fields: ['value', 'name'],
                        data : [
                            {"value":"", "name":"全部"},
                            {"value":"1", "name":"启用"},
                            {"value":"0", "name":"禁用"}
                        ]
                    }),
                    displayField: 'name',
                    valueField: 'value',
                    listeners: {
                        afterRender: function(combo) {
                            combo.setValue('');//同时下拉框会将与name为firstValue值对应的 text显示
                        },
                        select:function () {
                            var queryKey = Ext.getCmp("queryKey").getValue();
                            var orgName = Ext.getCmp("orgName").getValue();
                            var isEnabled = Ext.getCmp("isEnabled").getValue();
                            me.store.getProxy().extraParams = {
                                isEnabled: isEnabled,
                                orgName: orgName,
                                queryKey: queryKey
                            };
                            me.store.loadPage(1);
                        }
                    }
                },
                {
                    text: '搜索',
                    id:"userSearch",
                    name: 'userSearch',
                    listeners:{
                        click:function(){
                            var queryKey = Ext.getCmp("queryKey").getValue();
                            var orgName = Ext.getCmp("orgName").getValue();
                            var isEnabled = Ext.getCmp("isEnabled").getValue();
                            me.store.getProxy().extraParams = {
                                isEnabled: isEnabled,
                                orgName: orgName,
                                queryKey: queryKey
                            };
                            me.store.loadPage(1);
                        }
                    }
                }
            ]
        });

        this.callParent(arguments);
    }
});