/**
 * Created by apple on 17/3/10.
 */
Ext.define('app.model.app', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'code', type: 'string' },
        { name: 'name', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'createTime', type: 'date',dateFormat : 'time'}
    ]
});