const state = {
    code1 : `<!-- START of Rakuten Marketing Conversion Tag -->
<!-- 「注意／削除する場合はリンクシェアジャパンへ連絡下さい」「ATTENTION／Please contact LINKSHARE Japan when you delete」 -->
<script type="text/javascript">

var MCR_TRANSACTION_ID       	= {{mcr-transaction_id}};
var MCR_TRANSACTION_PRICE       = {{mcr-transaction_price}};

var rm_trans = {
    trafficGateConfig:{
        mid:"XXX"
    },
    orderid : MCR_TRANSACTION_ID,
    currency: 'JPY',
    conversionType: 'Sale',
    lineitems : [{
        quantity : 1,`,

    code2 :`        SKU: '1'
    }]
};
`


}

export default {
    state,
}