jQuery(function ( $ ) {
    var cartTemplate = $( '#js-cart-item-template' ).text();
    var cartTarget = $( '#js-cart-items' );
    var cartTemplate_side = $( '#js-side-cart-items-template' ).text();
    var cartTarget_side = $( '#js-side-cart-items' );

    var view = new window.Cart.View( cartTemplate, cartTarget, cartTemplate_side, cartTarget_side );
    var model = new window.Cart.Model();
    new window.Cart.Controller( view, model );

});