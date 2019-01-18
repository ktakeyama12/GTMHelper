const state = {
code1 :
`
<!-- START of Rakuten Marketing Conversion Tag -->
<!-- 「注意／削除する場合はリンクシェアジャパンへ連絡下さい」「ATTENTION／Please contact LINKSHARE Japan when you delete」 -->
        <script type="text/javascript">
        
        var MCR_TRANSACTION_ID       = GTM_HINT.orderNumber;
        var MCR_TRANSACTION_PRODUCTS = GTM_HINT.details;
        
        var products = [];
        for (var i = 0; i < MCR_TRANSACTION_PRODUCTS.length; i++) {
            var quantity            = parseInt(MCR_TRANSACTION_PRODUCTS[i].quantity, 10);
            var unit_price          = parseInt(MCR_TRANSACTION_PRODUCTS[i].price, 10);`
            ,

code2 :
`
var sku                 = MCR_TRANSACTION_PRODUCTS[i].id;
    var name                = sku

    if (products[sku]) {
        products[sku].quantity += quantity;
    } else {
        products[sku] = {
            quantity         : quantity,
            unitPriceLessTax : unit_price_less_tax,
            unitPrice        : unit_price,
            SKU              : sku,
            productName      : sku
        };
    }
}

var line_items = [];
for (var sku in products) {
    if (products[sku].SKU) {
        line_items.push(products[sku]);
    }
}

var discountAmount = GTM_HINT.total.price - GTM_HINT.revenue;

if (discountAmount>0) {
        var discount = 'DISCOUNT';
} else {
        var discount = '';
}

var rm_trans = {
    affiliateConfig: {ranMID: 'XXX', discountType: 'order'},
    orderid : MCR_TRANSACTION_ID,
    currency: 'JPY',
    customerStatus: '',
    conversionType: 'Sale',
    customerID: '',
    discountCode: discount,
    discountAmount: discountAmount,
    taxAmount: 0,
    lineitems: line_items
};
    `
}

export default {
    state,
}