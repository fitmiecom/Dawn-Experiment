class AgeVerification {
  constructor() {
    this.storageKey = 'age_verification_verified';
    this.ageVerification = document.querySelector('[data-age-verification]');
    this.button = document.querySelector('[data-age-verification-button]');
    this.body = document.body;
    
    if (!this.ageVerification) return;
    
    this.init();
  }

  init() {
    // Check if user has already verified
    const isVerified = localStorage.getItem(this.storageKey);
    
    if (!isVerified) {
      this.show();
    } else {
      this.hide();
    }

    // Add button click handler
    if (this.button) {
      this.button.addEventListener('click', () => {
        this.verify();
      });
    }

    // Prevent body scroll when age verification is visible
    if (!isVerified) {
      this.body.style.overflow = 'hidden';
    }
  }

  show() {
    if (this.ageVerification) {
      this.ageVerification.classList.add('is-visible');
      this.body.style.overflow = 'hidden';
    }
  }

  hide() {
    if (this.ageVerification) {
      this.ageVerification.classList.remove('is-visible');
      this.body.style.overflow = '';
    }
  }

  verify() {
    // Store verification in localStorage
    localStorage.setItem(this.storageKey, 'true');
    
    // Hide the age verification
    this.hide();
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new AgeVerification();
  });
} else {
  new AgeVerification();
}

