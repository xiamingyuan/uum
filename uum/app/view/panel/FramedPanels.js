/**
 * Created by apple on 17/3/8.
 */
Ext.define('app.view.panel.FramedPanels', {
    extend: 'Ext.Container',
    xtype: 'framed-panels',
    width: 660,

    layout: {
        type: 'table',
        columns: 3,
        tdAttrs: { style: 'padding: 10px; vertical-align: top;' }
    },

    defaults: {
        xtype: 'panel',
        width: 200,
        height: 280,
        bodyPadding: 10,
        frame: true
    },
    //<example>
    themes: {
        classic: {
        },
        neptune: {
        }
    },
    //</example>

    initComponent: function () {
        this.items = [
            {
                html:'我们都有圆角，我没有标题'
            },
            {
                title: 'Title',
                html: '我们都有圆角，我有标题'
            },
            {
                title: 'Collapsible',
                collapsible: true,
                html: '我们都有圆角，我能收缩'
            },
            {
                title: 'Tools',
                collapsible: true,
                width: 640,
                html: '我们都有圆角，我有工具栏',
                tools: [
                    { type:'pin' },
                    { type:'refresh' },
                    { type:'search' },
                    { type:'save' }
                ],
                colspan: 3
            }
        ];

        this.callParent();
    }
});
