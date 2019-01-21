const state = {
    code1 : `
======================================================================
○変数の設定
======================================================================

`,
code2 :`


======================================================================
○`,
code3 : `様のLSタグアレンジ(for ITP)
 - ※重要※「ranMID: 'XXX'」のXXXに、`,
code4 :`様のMIDをセットすること。
 - カスタマー番号は無し。
 - 注文番号は、transactionIdを参照。
 - transactionDiscountをdiscountAmountにセットする。discountCodeは「DISCOUNT」（固定）とする。
 - 商品明細のpriceは税抜き。
 - SKU集約処理有り。
======================================================================`,
mcrtransactionidblock :`mcr-transaction_id
 データレイヤー変数
 `,
    mcrpriceblock :`mcr-transaction_price
 データレイヤー変数
 `
}

export default {
    state,
}