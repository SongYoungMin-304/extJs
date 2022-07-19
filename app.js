/*
 * $(document).ready(function(){
 * alert('HelloWorld');
 * })
 */
Ext.onReady(function(){
    //Ext.Msg.alert("타이틀","HelloWorld2");
    // fit 가득참
    // border
    // center 가운데
    // absolute 자식 위치 절대적
    // acordian -> 클릭 시 보여줌
    // card -> 메뉴바 처럼 클릭하며 화면 보여주는 거.ㅎㅎ

    Ext.create("Ext.container.Viewport",{
        layout : 'fit',
        border : true,
        items : [{
            xtype : 'panel',
            title : '부모패널',
            layout: 'card',
            items : [{
                xtype : 'panel',
                title : '첫째 패널',
                html : '첫째입니다'
            }, {
                xtype : 'panel',
                title : '둘째 패널',
                html : '둘째입니다.'
            }]
        }]
    })
})