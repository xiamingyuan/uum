/**
 * Created by apple on 17/3/10.
 */
Ext.define("app.store.User", {
    extend: "Ext.data.Store",
    storeId:'User',
    pageSize: 5,
    model: "app.model.User",
    proxy: {
        type: 'ajax',
        url: 'user',
        extraParams: {
            isEnabled: "",
            orgName: "",
            queryKey: ""
        },
        reader: {
            type: 'json',
            rootProperty: 'data',//返回数据 字段
            totalProperty : 'totalCount'
        }
    },
    autoLoad: {start: 0, limit: this.pageSize}
});