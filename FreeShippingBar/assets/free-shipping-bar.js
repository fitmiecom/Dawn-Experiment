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
      // this.message.innerHTML = `
      //   <span class="free-shipping-bar__icon">
      //     ${this.getCheckmarkIcon()}
      //   </span>
      //   <span class="free-shipping-bar__text">
      //     ${window.theme.strings.cart?.free_shipping_qualified || "You've qualified for free shipping!"}
      //   </span>
      // `;
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
      // this.message.innerHTML = `
      //   <span class="free-shipping-bar__icon">
      //     ${this.getTruckIcon()}
      //   </span>
      //   <span class="free-shipping-bar__text">
      //     ${this.formatMessage(window.theme.strings.cart?.free_shipping_progress || "Add {{ amount }} more for free shipping", remainingAmount)}
      //   </span>
      // `;
    }

    // Show progress section
    const progressSection = this.querySelector('.free-shipping-bar__progress');
    if (progressSection) {
      progressSection.style.display = 'flex';
    }

    // Update progress text
    if (this.progressText) {
      this.progressText.textContent = this.formatMessage(
        window.theme.strings.cart?.free_shipping_progress_text || "{{ current }} of {{ threshold }}",
        cartTotal,
        this.threshold
      );
    }
  }

  formatMessage(template, ...values) {
    let message = template;
    
    if (values.length === 1) {
      // Single value (remaining amount)
      message = message.replace('{{ amount }}', this.formatMoney(values[0]));
    } else if (values.length === 2) {
      // Two values (current and threshold)
      message = message.replace('{{ current }}', this.formatMoney(values[0]));
      message = message.replace('{{ threshold }}', this.formatMoney(values[1]));
    }
    
    return message;
  }

  formatMoney(amount) {
    // Convert cents to dollars and format
    const dollars = (amount / 100).toFixed(2);
    return `$${dollars}`;
  }

  getCheckmarkIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" class="icon icon-checkmark" viewBox="0 0 12 9"><path fill="currentColor" fill-rule="evenodd" d="M11.35.643a.5.5 0 0 1 .006.707l-6.77 6.886a.5.5 0 0 1-.719-.006L.638 4.845a.5.5 0 1 1 .724-.69l2.872 3.011 6.41-6.51a.5.5 0 0 1 .706.006z"/></svg>`;
  }

  getTruckIcon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-accordion icon-truck" viewBox="0 0 20 20"><path d="M0 3.752c0-.277.224-.502.5-.502h10.147a.5.5 0 0 1 .5.502v9.91l-.595 1.003H7.223V13.66h2.923V4.253H1.002v9.408h1.682v1.004H.501A.5.5 0 0 1 0 14.163zm18.999 4.33c0-.277.224-.502.5-.502h.147a.5.5 0 0 1 .5.502v9.91l-.595 1.003h-2.923V13.66h2.923V4.253h-9.408v9.408h1.682v1.004h-1.682a.5.5 0 0 1-.5-.502z"/></svg>`;
  }
}

customElements.define('free-shipping-bar', FreeShippingBar); 