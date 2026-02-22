<script setup>
import { ref } from 'vue'

const faqs = [
  {
    question: 'What types of projects do you work on?',
    answer: 'I work on a variety of projects including web applications, e-commerce platforms, API integrations, cloud infrastructure, and technical consulting. Whether you need a new application built from scratch or improvements to an existing system, I can help.',
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a full web application could take 2-3 months. During our initial consultation, I\'ll provide a detailed timeline with milestones so you know exactly what to expect.',
  },
  {
    question: 'How do you handle communication during a project?',
    answer: 'I provide regular updates through your preferred channel — email, Slack, or video calls. You\'ll receive weekly progress reports and demos. I believe transparent communication is key to a successful project.',
  },
  {
    question: 'Do you offer post-launch support?',
    answer: 'Yes. I offer ongoing maintenance and support packages after launch. This includes bug fixes, performance monitoring, feature updates, and scaling assistance. I\'m committed to the long-term success of your project.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'I work with both fixed-price and hourly models depending on the project. Fixed-price works best for well-defined projects, while hourly is ideal for ongoing work or projects with evolving requirements. I\'ll recommend the best model during our initial discussion.',
  },
  {
    question: 'Can you work with my existing team?',
    answer: 'Absolutely. I frequently collaborate with in-house teams, other developers, and designers. I adapt to your existing workflows, tools, and processes to ensure a smooth integration.',
  },
]

const openIndex = ref(null)

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section class="faq section" id="faq">
    <div class="container">
      <div class="section__header">
        <span class="faq__label">FAQ</span>
        <h2 class="section__title">Frequently Asked Questions</h2>
        <p class="section__subtitle">
          Answers to common questions about my services and process.
        </p>
      </div>

      <div class="faq__list">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="faq-item"
          :class="{ 'faq-item--open': openIndex === index }"
        >
          <button class="faq-item__question" @click="toggle(index)">
            <span>{{ faq.question }}</span>
            <svg
              class="faq-item__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>
          <div class="faq-item__answer">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>

      <div class="faq__more">
        <p>Still have questions?</p>
        <a href="#contact" class="btn btn--secondary">
          Get in Touch
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq__label {
  display: block;
  font-size: var(--text-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-primary);
  margin-bottom: var(--space-4);
}

.faq__list {
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.faq-item {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: border-color var(--transition-fast);
}

.faq-item--open {
  border-color: var(--color-primary);
}

.faq-item__question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  width: 100%;
  padding: var(--space-5) var(--space-6);
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-secondary);
  text-align: left;
  transition: color var(--transition-fast);
}

.faq-item__question:hover {
  color: var(--color-primary);
}

.faq-item__icon {
  flex-shrink: 0;
  color: var(--color-text-muted);
  transition: transform var(--transition-base);
}

.faq-item--open .faq-item__icon {
  transform: rotate(180deg);
  color: var(--color-primary);
}

.faq-item__answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-slow), padding var(--transition-slow);
}

.faq-item--open .faq-item__answer {
  max-height: 300px;
}

.faq-item__answer p {
  padding: 0 var(--space-6) var(--space-5);
  color: var(--color-text-muted);
  line-height: 1.7;
}

.faq__more {
  text-align: center;
  margin-top: var(--space-10);
}

.faq__more p {
  color: var(--color-text-muted);
  margin-bottom: var(--space-4);
}

@media (max-width: 768px) {
  .faq-item__question {
    padding: var(--space-4) var(--space-5);
    font-size: var(--text-sm);
  }

  .faq-item__answer p {
    padding: 0 var(--space-5) var(--space-4);
    font-size: var(--text-sm);
  }
}
</style>
