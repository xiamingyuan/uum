/**
 * Created by apple on 17/3/10.
 */
Ext.define("app.store.app", {
    extend: "Ext.data.Store",
    storeId:'app',
    pageSize: 5,
    model: "app.model.app",
    proxy: {
        type: 'ajax',
        url: 'app',
        extraParams: {
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