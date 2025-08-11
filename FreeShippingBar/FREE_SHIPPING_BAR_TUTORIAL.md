# How to Build a Custom Free Shipping Progress Bar for Shopify Dawn Theme

A free shipping progress bar is one of the most effective ways to increase your average order value and improve customer experience. In this comprehensive tutorial, you'll learn how to build a fully customizable free shipping bar for the Shopify Dawn theme from scratch.

## What You'll Build

By the end of this tutorial, you'll have:
- ✅ A dynamic progress bar that updates in real-time
- ✅ Customizable messages and styling through theme settings
- ✅ Smooth animations and responsive design
- ✅ Integration with both cart drawer and cart page
- ✅ Support for custom colors and alignment

![Free Shipping Bar Demo](demo-image.png)

## Prerequisites

- Basic knowledge of Shopify theme development
- Familiarity with Liquid, HTML, CSS, and JavaScript
- Access to a Shopify store with the Dawn theme
- Code editor (VS Code recommended)

## Step 1: Create the Icon Snippets

First, we'll create the icon snippets needed for our progress bar.

### Create the Checkmark Icon

Create a new file: `snippets/icon-checkmark.liquid`

```liquid
{{- 'icon-checkmark.svg' | inline_asset_content -}}
```

### Create the Truck Icon

Create a new file: `snippets/icon-truck.liquid`

```liquid
{{- 'icon-truck.svg' | inline_asset_content -}}
```

> **Note**: Make sure you have `icon-checkmark.svg` and `icon-truck.svg` files in your `assets` folder. These should already exist in the Dawn theme.

## Step 2: Create the Main Free Shipping Bar Snippet

Create a new file: `snippets/free-shipping-bar.liquid`

```liquid
{% comment %}
  Renders free shipping progress bar
  
  Usage:
  {% render 'free-shipping-bar', cart: cart %}
{% endcomment %}

{%- liquid
  assign free_shipping_threshold = settings.free_shipping_threshold | times: 1 | default: 1000
  assign cart_total = cart.total_price
  assign remaining_amount = free_shipping_threshold | minus: cart_total
  assign progress_percentage = cart_total | times: 100 | divided_by: free_shipping_threshold
  assign progress_percentage = progress_percentage | at_least: 0 | at_most: 100
  
  if remaining_amount <= 0
    assign has_free_shipping = true
  else
    assign has_free_shipping = false
  endif

  assign current_formatted = cart_total | money
  assign remaining_formatted = remaining_amount | money
  assign threshold_formatted = free_shipping_threshold | money
  assign progress_percent_formatted = progress_percentage | round | append: '%'
  assign progress_message_html = settings.free_shipping_bar_message_progress 
    | replace: '{{ amount }}', remaining_formatted 
    | replace: '{{ threshold }}', threshold_formatted 
    | replace: '{{ progress }}', progress_percent_formatted
-%}

{%- if settings.show_free_shipping_bar and cart != empty -%}
  <style>
    .free-shipping-bar {
      --color-background: {{ settings.cart_free_shipping_bar_background_color }};
      --color-text: {{ settings.cart_free_shipping_bar_text_color }};
      --color-progress-background: {{ settings.cart_free_shipping_bar_progress_background_color }};
      --color-progress-success-background: {{ settings.cart_free_shipping_bar_success_background_color }};
      --text-align: {{ settings.cart_free_shipping_bar_text_align }};
    }
  </style>
  <free-shipping-bar class="free-shipping-bar" data-free-shipping-threshold="{{ free_shipping_threshold }}">
    <div class="free-shipping-bar__container">
      {%- if has_free_shipping -%}
        <div class="free-shipping-bar__message free-shipping-bar__message--success">
          <span class="free-shipping-bar__icon">
            {%- render 'icon-checkmark' -%}
          </span>
          <span class="free-shipping-bar__text">
            {{ settings.free_shipping_bar_message_success }}
          </span>
        </div>
      {%- else -%}
        <div class="free-shipping-bar__progress">
          <div class="free-shipping-bar__progress-text">
            {{ progress_message_html }}
          </div>
        </div>
      {%- endif -%}
      <div class="free-shipping-bar__progress-bar">
        <div class="free-shipping-bar__progress-fill" style="width: {{ progress_percentage }}%"
          data-progress="{{ progress_percentage }}"></div>
      </div>
    </div>
  </free-shipping-bar>
{%- endif -%}
```

### Key Features Explained:

1. **Dynamic Calculations**: The snippet calculates remaining amount, progress percentage, and formats monetary values
2. **Token Replacement**: Custom messages support `{{ amount }}`, `{{ threshold }}`, and `{{ progress }}` tokens
3. **Conditional Display**: Shows different content based on whether free shipping is achieved
4. **CSS Custom Properties**: Uses CSS variables for easy theming

## Step 3: Create the CSS Styles

Create a new file: `assets/component-free-shipping-bar.css`

```css
.free-shipping-bar {
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 0.4rem;
  border: 1px solid var(--color-border);
  background-color: var(--color-background);
  color: var(--color-text);
}

.free-shipping-bar__container {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.free-shipping-bar__message {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.free-shipping-bar__message--success {
  color: var(--color-success);
}

.free-shipping-bar__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
}

.free-shipping-bar__icon .icon {
  width: 1rem;
  height: 1rem;
}

.free-shipping-bar__text {
  flex: 1;
}

.free-shipping-bar__progress {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.free-shipping-bar__progress-bar {
  width: 100%;
  height: 1rem;
  background: var(--color-progress-background);
  border-radius: 25rem;
  overflow: hidden;
}

.free-shipping-bar__progress-fill {
  display: block!important;
  height: 100%;
  background: var(--color-progress-success-background);
  border-radius: 0.25rem;
  transition: width 0.3s ease;
  position: relative;
  overflow: hidden;
}

.free-shipping-bar__progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 0.25rem;
  background: linear-gradient(90deg, 
    var(--color-progress-success-background),
    var(--color-progress-background), 
    var(--color-progress-success-background), 
    var(--color-progress-background)
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.free-shipping-bar__progress-text {
  text-align: var(--text-align);
}

/* Cart drawer specific styles */
.cart-drawer .free-shipping-bar {
  margin: 0.75rem 0 30px;
  padding: 0.75rem;
}

.cart-drawer .free-shipping-bar__progress-text {
  line-height: 1.3;
}

/* Responsive adjustments */
@media screen and (max-width: 749px) {
  .free-shipping-bar {
    margin: 0.75rem 0;
    padding: 0.75rem;
  }
}

.free-shipping-bar__progress-fill[data-progress="100"]:after {
  visibility: hidden;
}
```

### CSS Features:

1. **Smooth Animations**: Progress bar updates with CSS transitions
2. **Shimmer Effect**: Animated gradient for visual appeal
3. **Responsive Design**: Adapts to different screen sizes
4. **CSS Variables**: Easy customization through theme settings

## Step 4: Create the JavaScript Functionality

Create a new file: `assets/free-shipping-bar.js`

```javascript
class FreeShippingBar extends HTMLElement {
  constructor() {
    super();
    this.threshold = parseInt(this.dataset.freeShippingThreshold) || 10000;
    this.progressFill = this.querySelector('.free-shipping-bar__progress-fill');
    this.message = this.querySelector('.free-shipping-bar__message');
    this.messageText = this.querySelector('.free-shipping-bar__text');
    this.progressText = this.querySelector('.free-shipping-bar__progress-text');
    
    this.init();
  }

  init() {
    // Subscribe to cart updates
    this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, (event) => {
      this.updateFreeShippingBar(event);
    });
  }

  disconnectedCallback() {
    if (this.cartUpdateUnsubscriber) {
      this.cartUpdateUnsubscriber();
    }
  }

  updateFreeShippingBar(event) {
    if (!event.cartData) return;

    const cartTotal = event.cartData.total_price;
    const remainingAmount = this.threshold - cartTotal;
    const progressPercentage = Math.min((cartTotal / this.threshold) * 100, 100);

    // Update progress bar
    if (this.progressFill) {
      this.progressFill.style.width = `${progressPercentage}%`;
      this.progressFill.dataset.progress = progressPercentage;
    }

    // Update message and text
    if (remainingAmount <= 0) {
      this.showQualifiedMessage();
    } else {
      this.showProgressMessage(remainingAmount, cartTotal);
    }
  }

  showQualifiedMessage() {
    if (this.message) {
      this.message.classList.add('free-shipping-bar__message--success');
    }

    // Hide progress section
    const progressSection = this.querySelector('.free-shipping-bar__progress');
    if (progressSection) {
      progressSection.style.display = 'none';
    }
  }

  showProgressMessage(remainingAmount, cartTotal) {
    if (this.message) {
      this.message.classList.remove('free-shipping-bar__message--success');
    }

    // Show progress section
    const progressSection = this.querySelector('.free-shipping-bar__progress');
    if (progressSection) {
      progressSection.style.display = 'flex';
    }
  }

  formatMoney(amount) {
    // Convert cents to dollars and format
    const dollars = (amount / 100).toFixed(2);
    return `$${dollars}`;
  }
}

customElements.define('free-shipping-bar', FreeShippingBar);
```

### JavaScript Features:

1. **Web Components**: Uses custom elements for encapsulation
2. **Event-Driven Updates**: Listens to cart update events
3. **Real-Time Updates**: Updates progress without page refresh
4. **Clean Architecture**: Proper initialization and cleanup

## Step 5: Add Theme Settings

Add the following settings to your `config/settings_schema.json` file, inside the cart section:

```json
{
  "type": "header",
  "content": "Free Shipping Bar"
},
{
  "type": "checkbox",
  "id": "show_free_shipping_bar",
  "label": "Show free shipping progress bar",
  "default": true
},
{
  "type": "text",
  "id": "free_shipping_threshold",
  "default": "1000",
  "label": "Free shipping threshold"
},
{
  "type": "richtext",
  "id": "free_shipping_bar_message_progress",
  "default": "<p>Add {{ amount }} more for free shipping!</p>",
  "label": "Progress message",
  "info": "You can use the following variables: {{ amount }} (remaining amount), {{ threshold }} (free shipping threshold), {{ progress }} (progress percentage)"
},
{
  "type": "richtext",
  "id": "free_shipping_bar_message_success",
  "default": "<p>🎉 You've qualified for free shipping!</p>",
  "label": "Goal achieved message",
  "info": "You can use the following variables: {{ amount }} (cart total), {{ threshold }} (free shipping threshold)"
},
{
  "type": "header",
  "content": "Style"
},
{
  "type": "select",
  "id": "cart_free_shipping_bar_text_align",
  "label": "Content alignment",
  "options": [
    {
      "value": "left",
      "label": "Left"
    },
    {
      "value": "center",
      "label": "Center"
    },
    {
      "value": "right",
      "label": "Right"
    }
  ],
  "default": "left"
},
{
  "type": "color",
  "id": "cart_free_shipping_bar_background_color",
  "label": "Background color",
  "default": "#f8f8f8"
},
{
  "type": "color",
  "id": "cart_free_shipping_bar_text_color",
  "label": "Text color",
  "default": "#333333"
},
{
  "type": "color",
  "id": "cart_free_shipping_bar_progress_background_color",
  "label": "Progress background color",
  "default": "#e0e0e0"
},
{
  "type": "color",
  "id": "cart_free_shipping_bar_success_background_color",
  "label": "Progress fill color",
  "default": "#4caf50"
}
```

## Step 6: Integrate with Cart Drawer

Modify your `snippets/cart-drawer.liquid` file to include the free shipping bar. Add this line where you want the bar to appear (typically after the cart header):

```liquid
{% render 'free-shipping-bar', cart: cart %}
```

## Step 7: Integrate with Cart Page

Modify your `sections/main-cart-footer.liquid` file to include the free shipping bar:

```liquid
{% render 'free-shipping-bar', cart: cart %}
```

Also, add the JavaScript dependency to your `sections/main-cart-items.liquid`:

```liquid
<script src="{{ 'free-shipping-bar.js' | asset_url }}" defer="defer"></script>
```

## Step 8: Include CSS in Theme

Make sure to include the CSS file in your theme. Add this to your `layout/theme.liquid` in the head section:

```liquid
{{ 'component-free-shipping-bar.css' | asset_url | stylesheet_tag }}
```

## Step 9: Test and Customize

1. **Test the functionality**:
   - Add items to cart and verify the progress bar updates
   - Test reaching the free shipping threshold
   - Verify it works in both cart drawer and cart page

2. **Customize through theme settings**:
   - Go to your theme customizer
   - Navigate to Cart settings
   - Customize messages, colors, and alignment
   - Set your free shipping threshold

## Advanced Customizations

### Custom Token Variables

You can extend the token replacement system by adding more variables:

```liquid
assign progress_message_html = settings.free_shipping_bar_message_progress 
  | replace: '{{ amount }}', remaining_formatted 
  | replace: '{{ threshold }}', threshold_formatted 
  | replace: '{{ progress }}', progress_percent_formatted
  | replace: '{{ current }}', current_formatted
  | replace: '{{ savings }}', savings_formatted
```

### Multiple Shipping Tiers

For stores with multiple shipping tiers, you can extend the logic:

```liquid
{%- liquid
  if cart_total >= settings.premium_shipping_threshold
    assign shipping_tier = 'premium'
  elsif cart_total >= settings.free_shipping_threshold
    assign shipping_tier = 'free'
  else
    assign shipping_tier = 'standard'
  endif
-%}
```

### Animation Enhancements

Add more sophisticated animations:

```css
.free-shipping-bar__progress-fill {
  background: linear-gradient(45deg, 
    var(--color-progress-success-background) 25%, 
    transparent 25%, 
    transparent 50%, 
    var(--color-progress-success-background) 50%, 
    var(--color-progress-success-background) 75%, 
    transparent 75%
  );
  background-size: 1rem 1rem;
  animation: progress-stripes 1s linear infinite;
}

@keyframes progress-stripes {
  0% { background-position: 0 0; }
  100% { background-position: 1rem 0; }
}
```

## Troubleshooting

### Common Issues:

1. **Progress bar not updating**: Ensure JavaScript is loaded and cart events are firing
2. **Styling issues**: Check CSS file is included and CSS variables are defined
3. **Settings not appearing**: Verify settings_schema.json syntax is correct
4. **Icons not showing**: Confirm SVG files exist in assets folder

### Debug Tips:

1. Use browser developer tools to check for JavaScript errors
2. Verify cart data structure in console: `console.log(event.cartData)`
3. Check CSS custom properties in inspector
4. Test with different cart amounts to verify calculations

## Performance Considerations

1. **CSS**: Use efficient selectors and minimal repaints
2. **JavaScript**: Debounce rapid cart updates if needed
3. **Images**: Optimize any background images or icons
4. **Loading**: Use `defer` attribute on script tags

## Conclusion

You've successfully built a comprehensive free shipping progress bar for your Shopify Dawn theme! This feature will help increase your average order value and improve customer experience.

The implementation includes:
- ✅ Real-time progress updates
- ✅ Customizable messages and styling
- ✅ Responsive design
- ✅ Smooth animations
- ✅ Theme customizer integration

## Next Steps

Consider these enhancements:
- Add multiple shipping tiers
- Implement A/B testing for different messages
- Add analytics tracking for conversion rates
- Create seasonal themes and animations

## Need Help?

If you run into any issues or want to extend this functionality further, feel free to reach out or check the documentation for the specific features you're implementing.

---

*This tutorial was created for Shopify Dawn theme developers. Always test thoroughly in a development environment before deploying to production.*
