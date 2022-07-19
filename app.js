/*
 * $(document).ready(function(){
 * alert('HelloWorld');
 * })
 */
Ext.onReady(function(){
    //Ext.Msg.alert("타이틀","HelloWorld2");
    Ext.create("Ext.container.Viewport",{
        layout : 'fit',
        border : true,
        items : [{
            xtype : 'panel',
            title : '부모패널',
            layout: 'absolute',
            items : [{
                xtype : 'panel',
                width : 300,
                height : 300,
                x : 100,
                y : 200,
                border: true,
                title : '첫째 패널',
            }, {
                xtype : 'panel',
                x : 150,
                y : 300,
                width : 300,
                height : 300,
                border: true,
                title : '둘째 패널',
            }]
        }]
    })
})