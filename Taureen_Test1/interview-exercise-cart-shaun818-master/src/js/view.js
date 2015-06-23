;(function ( $, nunjucks ) {
    var View = function ( template1, target1 ,template2, target2 ) {
        var items_side={"items":[]};
        template = nunjucks.compile( template1 );
        template_2 = nunjucks.compile( template2 );
        console.log("this123",this);

        this.xew = function ( data ) {
            //console.log("inside xy123z",data);
            data.forEach(function(val){
                //console.log(val);
                items_side.items.push(val);
            });
            console.log(items_side);
            target2.html( template_2.render( items_side ) );
        };
        this.xez = function ( data ) {
            console.log("inside xy1234567",data);
            target1.html( template.render( data ) );

        };
        return this;
    };

    window.Cart.View = View;

} ( window.jQuery, window.nunjucks ));