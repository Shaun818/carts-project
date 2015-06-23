;(function ( $ ) {
    var Controller = function ( view, model ) {
        model.update( view );

        return this;
    };

    window.Cart.Controller = Controller;
} ( jQuery ));
