;(function ( $ ) {

$.mockjax({
    url: '/api/cart',
    responseText: {
        subtotal: '$600.00',
        shippingCost: '$0.00',
        items: [{
            name: 'REI Kingdom 6 Tent',
            color: 'Green',
            sku: '8278070001',
            quantity: 1,
            price: {
                original: '$350.00',
                sale: '$300.00',
                savings: '$50',
                total: '$300.00'
            },
            image: 'assets/rei-kingdom-tent.jpg',
            timeAdded: '2015-03-12T00:49:29.066Z'
        },{
            name: 'Novara Mens Jacket',
            color: 'Red',
            sku: '8278070002',
            quantity: 3,
            price: {
                original: '$100.00',
                sale: null,
                savings: null,
                total: '$300.00'
            },
            image: 'assets/novara-mens-jacket.jpg',
            timeAdded: '2015-03-12T00:51:27.881Z'
        }]
    }
});

$.mockjax({
    url: '/api/cart-hard-mode',
    responseText: {
        subtotal: 600.0,
        shippingCost: 0,
        items: [{
            name: 'rei kingdom 6 tent',
            color: 'Green',
            sku: '8278070001',
            quantity: 1,
            price: {
                original: 350.0,
                sale: 300.0,
                savings: 50,
                total: 300.0
            },
            image: 'assets/rei-kingdom-tent.jpg',
            timeAdded: '2015-03-12T00:49:29.066Z'
        },{
            name: 'novara mens jacket',
            color: 'Red',
            sku: '8278070002',
            quantity: 3,
            price: {
                original: 100.0,
                sale: null,
                savings: null,
                total: 300.0
            },
            image: 'assets/novara-mens-jacket.jpg',
            timeAdded: '2015-03-12T00:51:27.881Z'
        }]
    }
});

$.mockjax({
    url: '/api/recommendations',
    responseText: [
        {
            name: 'Garmin Forerunner 220 GPS Fitness Monitor',
            price: '$36.95',
            rating: 5.0,
            image: 'assets/garmin-forerunner-220.jpg'
        },
        {
            name: 'REI First Aid Kit',
            price: '$54.50',
            rating: 5.0,
            image: 'assets/rei-first-aid-kit.jpg'
        }
    ]
});

} ( jQuery ));
