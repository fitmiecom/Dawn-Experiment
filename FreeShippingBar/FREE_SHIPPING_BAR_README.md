# Free Shipping Bar Feature

This feature adds a dynamic free shipping progress bar to both the cart drawer and cart page.

## Features

- **Dynamic Progress Bar**: Shows progress towards free shipping threshold
- **Real-time Updates**: Updates automatically when cart contents change
- **Responsive Design**: Works on both desktop and mobile
- **Customizable**: Configurable threshold and enable/disable option
- **Visual Feedback**: Different states for progress vs qualified
- **Smooth Animations**: Progress bar animates smoothly

## Files Added/Modified

### New Files
- `snippets/free-shipping-bar.liquid` - Main free shipping bar component
- `snippets/icon-checkmark.liquid` - Checkmark icon for qualified state
- `snippets/icon-truck.liquid` - Truck icon for progress state
- `assets/component-free-shipping-bar.css` - Styling for the free shipping bar
- `assets/free-shipping-bar.js` - JavaScript functionality

### Modified Files
- `snippets/cart-drawer.liquid` - Added free shipping bar to cart drawer
- `sections/main-cart-footer.liquid` - Added free shipping bar to cart page
- `sections/main-cart-items.liquid` - Added JavaScript dependency
- `config/settings_schema.json` - Added free shipping settings
- `config/settings_data.json` - Added default settings
- `locales/en.default.json` - Added translation strings

## Settings

The free shipping bar can be configured in the theme customizer under **Cart** settings:

- **Show free shipping progress bar**: Enable/disable the feature (default: true)
- **Free shipping threshold**: Set the amount needed for free shipping in cents (default: 10000 = $100.00)

## Usage

The free shipping bar automatically appears when:
1. The feature is enabled in settings
2. The cart is not empty
3. The cart total is below the free shipping threshold

### States

1. **Progress State**: Shows current cart total, remaining amount needed, and progress bar
2. **Qualified State**: Shows success message when free shipping threshold is met

### Translations

The following translation keys are available:
- `sections.cart.free_shipping_qualified` - "You've qualified for free shipping!"
- `sections.cart.free_shipping_progress` - "Add {{ amount }} more for free shipping"
- `sections.cart.free_shipping_progress_text` - "{{ current }} of {{ threshold }}"

## Technical Details

### JavaScript Events
The free shipping bar subscribes to `PUB_SUB_EVENTS.cartUpdate` events to receive real-time cart updates.

### CSS Classes
- `.free-shipping-bar` - Main container
- `.free-shipping-bar__container` - Inner container
- `.free-shipping-bar__message` - Message container
- `.free-shipping-bar__message--success` - Success state styling
- `.free-shipping-bar__progress` - Progress section
- `.free-shipping-bar__progress-bar` - Progress bar container
- `.free-shipping-bar__progress-fill` - Progress bar fill
- `.free-shipping-bar__progress-text` - Progress text

### Custom Element
The free shipping bar uses a custom web component `<free-shipping-bar>` for encapsulation and functionality.

## Browser Support

- Modern browsers with ES6+ support
- Custom Elements v1
- CSS Grid and Flexbox

## Dependencies

- `pubsub.js` - For event handling
- `constants.js` - For event constants
- `cart.js` - For cart functionality 