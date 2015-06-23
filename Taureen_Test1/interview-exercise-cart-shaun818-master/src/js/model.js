;(function ( $ ) {
    var CART_ENDPOINT = '/api/cart';
    var RECS_ENDPOINT = '/api/recommendations';

    var Model = function () {
        return this;
    };

    Model.prototype.update = function ( view ) {
        console.log("view12",view);
        $.getJSON( RECS_ENDPOINT )
            .then( view.xew)
            .fail(function ( err ) {
                console.error( err );
            });
        $.getJSON( CART_ENDPOINT )
            .then( view.xez)
            .fail(function ( err ) {
                console.error( err );
            });

    };



    window.Cart.Model = Model;

} ( jQuery ));
