<script setup>
import { useContactForm } from '@/composables/useContactForm'

const {
  form,
  errors,
  isSubmitting,
  isSubmitted,
  submitError,
  validateField,
  submitForm,
  resetForm,
} = useContactForm()

const contactInfo = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    label: 'Email',
    value: 'contact@mauriciohdez.dev',
    href: 'mailto:contact@mauriciohdez.dev',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    label: 'Location',
    value: 'Remote - Worldwide',
    href: null,
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    label: 'Availability',
    value: 'Open to new projects',
    href: null,
  },
]

const handleSubmit = async () => {
  await submitForm()
}
</script>

<template>
  <section class="contact section section--alt" id="contact">
    <div class="container">
      <div class="section__header">
        <span class="contact__label">Contact</span>
        <h2 class="section__title">Let's Work Together</h2>
        <p class="section__subtitle">
          Have a project in mind? I'd love to hear about it.
          Send me a message and let's discuss how I can help.
        </p>
      </div>

      <div class="contact__grid">
        <div class="contact__info">
          <h3 class="contact__info-title">Get in Touch</h3>
          <p class="contact__info-text">
            I typically respond within 24-48 hours. For urgent matters,
            feel free to reach out via email directly.
          </p>

          <div class="contact__details">
            <div
              v-for="info in contactInfo"
              :key="info.label"
              class="contact-detail"
            >
              <div class="contact-detail__icon" v-html="info.icon"></div>
              <div class="contact-detail__content">
                <span class="contact-detail__label">{{ info.label }}</span>
                <a
                  v-if="info.href"
                  :href="info.href"
                  class="contact-detail__value contact-detail__value--link"
                >
                  {{ info.value }}
                </a>
                <span v-else class="contact-detail__value">{{ info.value }}</span>
              </div>
            </div>
          </div>

          <div class="contact__availability">
            <div class="availability-badge">
              <span class="availability-dot"></span>
              Currently accepting new projects
            </div>
          </div>
        </div>

        <div class="contact__form-wrapper">
          <!-- Success State -->
          <div v-if="isSubmitted" class="contact__success">
            <div class="success-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <h3>Message Sent!</h3>
            <p>Thanks for reaching out. I'll get back to you within 24-48 hours.</p>
            <button class="btn btn--secondary" @click="resetForm">
              Send Another Message
            </button>
          </div>

          <!-- Contact Form -->
          <form v-else class="contact__form" @submit.prevent="handleSubmit" novalidate>
            <div class="form-group">
              <label for="name" class="form-label">Name</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                class="form-input"
                :class="{ error: errors.name }"
                placeholder="Your name"
                @blur="validateField('name')"
              />
              <span v-if="errors.name" class="form-error">{{ errors.name }}</span>
            </div>

            <div class="form-group">
              <label for="email" class="form-label">Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                class="form-input"
                :class="{ error: errors.email }"
                placeholder="your.email@example.com"
                @blur="validateField('email')"
              />
              <span v-if="errors.email" class="form-error">{{ errors.email }}</span>
            </div>

            <div class="form-group">
              <label for="message" class="form-label">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                class="form-textarea"
                :class="{ error: errors.message }"
                placeholder="Tell me about your project, timeline, and budget..."
                rows="5"
                @blur="validateField('message')"
              ></textarea>
              <span v-if="errors.message" class="form-error">{{ errors.message }}</span>
            </div>

            <div v-if="submitError" class="form-group">
              <div class="submit-error">{{ submitError }}</div>
            </div>

            <button
              type="submit"
              class="btn btn--primary btn--lg contact__submit"
              :disabled="isSubmitting"
            >
              <span v-if="isSubmitting" class="spinner"></span>
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact__label {
  display: block;
  font-size: var(--text-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-primary);
  margin-bottom: var(--space-4);
}

.contact__grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: var(--space-12);
  align-items: start;
}

.contact__info-title {
  font-size: var(--text-2xl);
  font-weight: 600;
  color: var(--color-secondary);
  margin-bottom: var(--space-4);
}

.contact__info-text {
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: var(--space-8);
}

.contact__details {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  margin-bottom: var(--space-8);
}

.contact-detail {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
}

.contact-detail__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: var(--color-bg);
  color: var(--color-primary);
  border-radius: var(--radius-md);
  flex-shrink: 0;
}

.contact-detail__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.contact-detail__label {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.contact-detail__value {
  font-weight: 500;
  color: var(--color-text);
}

.contact-detail__value--link {
  color: var(--color-primary);
}

.contact-detail__value--link:hover {
  text-decoration: underline;
}

.contact__availability {
  padding: var(--space-5);
  background-color: var(--color-bg);
  border-radius: var(--radius-lg);
}

.availability-badge {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-weight: 500;
  color: #16a34a;
}

.availability-dot {
  width: 10px;
  height: 10px;
  background-color: #22c55e;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.1); }
}

.contact__form-wrapper {
  background-color: var(--color-bg);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  box-shadow: var(--shadow-lg);
}

.contact__form {
  display: flex;
  flex-direction: column;
}

.contact__submit {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
}

.contact__submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-top-color: currentColor;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.submit-error {
  padding: var(--space-3) var(--space-4);
  background-color: rgba(239, 68, 68, 0.1);
  color: #dc2626;
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
}

.contact__success {
  text-align: center;
  padding: var(--space-8);
}

.success-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  border-radius: 50%;
  margin-bottom: var(--space-6);
}

.contact__success h3 {
  font-size: var(--text-2xl);
  font-weight: 600;
  color: var(--color-secondary);
  margin-bottom: var(--space-3);
}

.contact__success p {
  color: var(--color-text-muted);
  margin-bottom: var(--space-6);
}

@media (max-width: 1024px) {
  .contact__grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
}
</style>

