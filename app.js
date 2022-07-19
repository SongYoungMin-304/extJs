/*
 * $(document).ready(function(){
 * alert('HelloWorld');
 * })
 */
Ext.onReady(function(){
    //Ext.Msg.alert("타이틀","HelloWorld2");
    Ext.create("Ext.container.Viewport",{
        renderTo : Ext.getBody(),
        // 이 컴포넌트를 어디에 넣을 것인가..
        layout : 'border',
        border : true,
        items : [
            {
                xtype : "panel",
                flex : 1,
                region : 'north',
                title : "패널1",
                layout : "border",
            },
            {
                xtype : "panel",
                flex: 1,
                region : 'center',
                title : "패널2",
            },
            {
                xtype : "panel",
                flex: 1,
                region : 'east',
                title : "패널 east",
            },
            {
                xtype : "panel",
                flex: 1,
                region : 'west',
                title : "패널 west",
            },
            {
                xtype : "panel",
                flex: 1,
                region : 'south',
                title : "패널 south",
            }

            // north, center, south, east, west
        ]
    })
})