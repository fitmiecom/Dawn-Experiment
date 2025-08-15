
class FreeShippingBar extends HTMLElement {
  constructor() {
    super();
    
    // Initialize properties with error handling
    try {
      this.threshold = parseInt(this.dataset.freeShippingThreshold) || 10000;
      this.progressFill = this.querySelector('.free-shipping-bar__progress-fill');
      this.message = this.querySelector('.free-shipping-bar__message');
      this.messageText = this.querySelector('.free-shipping-bar__text');
      this.progressText = this.querySelector('.free-shipping-bar__progress-text');
      this.progressSection = this.querySelector('.free-shipping-bar__progress');
      
      this.init();
    } catch (error) {
      console.error('FreeShippingBar: Error in constructor:', error);
    }
  }

  init() {
    try {
      // Subscribe to cart updates with error filtering
      this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, (event) => {
        if (event?.cartData && !event.cartData.errors) {
          this.updateFreeShippingBar(event);
        }
      });
    } catch (error) {
      console.error('FreeShippingBar: Error in init:', error);
    }
  }

  disconnectedCallback() {
    try {
      if (this.cartUpdateUnsubscriber) {
        this.cartUpdateUnsubscriber();
      }
    } catch (error) {
      console.error('FreeShippingBar: Error in disconnectedCallback:', error);
    }
  }

  updateFreeShippingBar(event) {
    try {
      if (!event?.cartData?.total_price) return;

      const cartTotal = event.cartData.total_price;
      const remainingAmount = this.threshold - cartTotal;
      const progressPercentage = Math.min((cartTotal / this.threshold) * 100, 100);

      // Update progress bar
      this.updateProgressBar(progressPercentage);

      // Update message based on qualification status
      if (remainingAmount <= 0) {
        this.showQualifiedMessage();
      } else {
        this.showProgressMessage(remainingAmount, cartTotal);
      }
    } catch (error) {
      console.error('FreeShippingBar: Error updating free shipping bar:', error);
    }
  }

  updateProgressBar(percentage) {
    if (this.progressFill) {
      this.progressFill.style.width = `${percentage}%`;
      this.progressFill.dataset.progress = percentage;
    }
  }

  showQualifiedMessage() {
    try {
      if (!this.message) return;

      this.message.classList.add('free-shipping-bar__message--success');
      this.message.innerHTML = `
        <span class="free-shipping-bar__text rte qualified">
          ${this.getQualifiedMessage()}
        </span>
      `;

      this.hideProgressSection();
    } catch (error) {
      console.error('FreeShippingBar: Error showing qualified message:', error);
    }
  }

  showProgressMessage(remainingAmount, cartTotal) {
    try {
      if (!this.message) return;

      this.message.classList.remove('free-shipping-bar__message--success');
      this.message.innerHTML = `
        <span class="free-shipping-bar__text rte progress">
          ${this.formatMessage(this.getProgressMessage(), remainingAmount)}
        </span>
      `;

      this.showProgressSection();
      this.updateProgressText(cartTotal);
    } catch (error) {
      console.error('FreeShippingBar: Error showing progress message:', error);
    }
  }

  getQualifiedMessage() {
    return window.freeShippingStrings?.free_shipping_qualified || 
           "🎉 Congrats! You've unlocked <strong>Free Gift</strong>";
  }

  getProgressMessage() {
    return window.freeShippingStrings?.free_shipping_progress || 
           "You're only {{ amount }} away from <strong>Free Gift</strong>";
  }

  getProgressTextTemplate() {
    return window.freeShippingStrings?.free_shipping_progress_text || 
           "{{ current }} of {{ threshold }}";
  }

  updateProgressText(cartTotal) {
    if (this.progressText) {
      this.progressText.innerHTML = this.formatMessage(
        this.getProgressTextTemplate(),
        cartTotal,
        this.threshold
      );
    }
  }

  showProgressSection() {
    if (this.progressSection) {
      this.progressSection.style.display = 'flex';
    }
  }

  hideProgressSection() {
    if (this.progressSection) {
      this.progressSection.style.display = 'none';
    }
  }

  formatMessage(template, ...values) {
    try {
      if (!template) return '';

      let message = template;
      
      if (values.length === 1) {
        // Single value (remaining amount)
        message = message.replace(/\{\{\s*amount\s*\}\}/g, this.formatMoney(values[0]));
      } else if (values.length === 2) {
        // Two values (current and threshold)
        message = message.replace(/\{\{\s*current\s*\}\}/g, this.formatMoney(values[0]));
        message = message.replace(/\{\{\s*threshold\s*\}\}/g, this.formatMoney(values[1]));
      }
      
      return message;
    } catch (error) {
      console.error('FreeShippingBar: Error formatting message:', error);
      return template || '';
    }
  }

  formatMoney(amount) {
    try {
      if (typeof amount !== 'number' || isNaN(amount)) {
        return '$0.00';
      }
      
      // Convert cents to dollars and format
      const dollars = (amount / 100).toFixed(2);
      return `$${dollars}`;
    } catch (error) {
      console.error('FreeShippingBar: Error formatting money:', error);
      return '$0.00';
    }
  }
}

customElements.define('free-shipping-bar', FreeShippingBar); 