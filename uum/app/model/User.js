/**
 * Created by apple on 17/3/10.
 */
Ext.define('app.model.User', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'name', type: 'string' },
        { name: 'gender', type: 'int' },
        { name: 'enabled', type: 'bool' },
        { name: 'userRoleInfo', type: 'string' },
        { name: 'createTime', type: 'date',dateFormat : 'time'}
    ]
});