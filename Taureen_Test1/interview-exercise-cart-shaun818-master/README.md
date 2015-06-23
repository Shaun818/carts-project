# interview-exercise-cart

REI is building a new shopping cart, and you're in charge of implementing it.

## What's provided

### Design Specs

We've included red-lines to help describe the layout. To guide your efforts, we'll say that gutters should be 18px. For all other styling, feel free to estimate. That goes for images, too. This is about the code, not your design or PSD-slicing skills.

### Service Endpoints

We set up mock services (using [Mockjax](https://github.com/jakerella/jquery-mockjax)) for the shopping cart and the
 sidebar recommendations. We wired up the data for the cart into the view, but we only set it up to print the name of items in the cart, so it's your job to flesh that out.

#### `/api/cart`

* All items in the cart
* Subtotal
* Shipping costs

#### `/api/cart-hard-mode`

* Same as `/api/cart`, but product names and prices are unformatted (see the [Double Bonus](#double-bonus) section below)

#### `/api/recommendations`

* Two recommendations

### Libraries and resources

* [jQuery](http://api.jquery.com/)
* [Nunjucks](http://mozilla.github.io/nunjucks/)
* REI's icon font (including [Entypo](http://www.entypo.com/))
* images for products

## Expectations

This is the set of features that we expect to see implemented in a finished exercise:

* Cart (list of items and totals area) are complete according to the mockups
* Top navigation is styled but not functional
* Implement the small layout (see `/mock-ups/cart-small.jpg`)
* Use CSS frameworks as you see fit (we use parts of Bootstrap)
* Implement the "Remove" button (just aesthetic since we aren't providing a cart update endpoint)

## BONUS

**None of the following is expected or required.** If you have time, feel free to work on as many as you like. We're excited to see you flex your skills.

### Functionality

* Bring in the sidebar recommendations dynamically (using mock service above)
* Add lazy-loading for images
* Sort cart items by date-added
* Make the hamburger functional

### Styles

* Make the layout responsive by adding a medium breakpoint (see `/mock-ups/cart-medium.jpg`)
* Design and implement a modal for the "Learn more" link in the cart totals area (lorem ipsum is cool)
* Add a zoom feature for product images
* Style the expanded view of the navigation menu/hamburger (fake links and lorem ipsum are cool)
* Build a custom grid for the shopping cart

### DOUBLE BONUS

* Solve the hard-mode version with unformatted product names (make them title-case) and prices (format in US dollars)

## Things to keep in mind

* Commit directly to this repository.
* Outside of the core expectations, you have the freedom to choose what you implement. We want to see what you do best, but also appreciate seeing you try new things to stretch your abilities.
* Budget about four hours for the exercise.
* Please do not share this exercise with anyone but us.
* Have fun!

## Notes

* We're using global scope to allow you to start quickly without installing a bunch of stuff.
* There are items in the designs where the mock-ups don't match the data returned from the mock services. In those cases, go with the data.
* The shipping label above "Subtotal" in the totals section should read "Shipping cost" rather than "FREE shipping" (just testing to see if you read the spec)
