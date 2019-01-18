const state = {
    code1 : `
<!-- START of Rakuten Marketing Conversion Tag -->
<!-- 「注意／削除する場合はリンクシェアジャパンへ連絡下さい」「ATTENTION／Please contact LINKSHARE Japan when you delete」 -->
<script type="text/javascript">

var MCR_TRANSACTION_ID       	= {{mcr-transaction_id}};
var MCR_TRANSACTION_PRICE       = {{mcr-transaction_price}};

if(MCR_TRANSACTION_ID != ''){
    var rm_trans = {
        trafficGateConfig:{
            mid:"XXX"
        },
        orderid : MCR_TRANSACTION_ID,
        currency: 'JPY',
        conversionType: 'Sale',
        lineitems : [{
            quantity : 1,
            unitPriceLessTax: MCR_TRANSACTION_PRICE,
            SKU: '1'
        }]
    };
}else{
    var rm_trans = '';
}
`


}

export default {
    state,
}