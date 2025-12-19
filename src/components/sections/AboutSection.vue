<script setup>
const highlights = [
  { number: '8+', label: 'Years of Experience' },
  { number: '50+', label: 'Projects Delivered' },
  { number: '30+', label: 'Happy Clients' },
]
</script>

<template>
  <section class="about section section--alt" id="about">
    <div class="container">
      <div class="about__grid">
        <div class="about__content">
          <span class="about__label">About Me</span>
          <h2 class="about__title">
            Turning Complex Problems Into Elegant Solutions
          </h2>

          <div class="about__text">
            <p>
              I'm a freelance software developer with a passion for building products that make a difference.
              With over 8 years of experience, I've helped startups and established businesses
              transform their ideas into robust, scalable applications.
            </p>
            <p>
              My approach combines technical expertise with a deep understanding of business needs.
              I don't just write code—I craft solutions that align with your goals, scale with your growth,
              and deliver measurable results.
            </p>
            <p>
              Whether you need a complete web application, an API integration, or technical consultation,
              I bring the same level of dedication and attention to detail to every project.
            </p>
          </div>

          <div class="about__values">
            <div class="value">
              <div class="value__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              </div>
              <div>
                <h4 class="value__title">Quality First</h4>
                <p class="value__text">Clean, maintainable code that stands the test of time.</p>
              </div>
            </div>

            <div class="value">
              <div class="value__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
              </div>
              <div>
                <h4 class="value__title">Reliability</h4>
                <p class="value__text">Consistent delivery and transparent communication.</p>
              </div>
            </div>

            <div class="value">
              <div class="value__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 13L2 9Z"/></svg>
              </div>
              <div>
                <h4 class="value__title">Results Driven</h4>
                <p class="value__text">Focused on delivering tangible business value.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="about__sidebar">
          <div class="about__highlights">
            <div
              v-for="highlight in highlights"
              :key="highlight.label"
              class="highlight"
            >
              <span class="highlight__number">{{ highlight.number }}</span>
              <span class="highlight__label">{{ highlight.label }}</span>
            </div>
          </div>

          <div class="about__cta">
            <p>Ready to discuss your project?</p>
            <a href="#contact" class="btn btn--primary">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-16);
  align-items: start;
}

.about__label {
  display: inline-block;
  font-size: var(--text-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-primary);
  margin-bottom: var(--space-4);
}

.about__title {
  font-size: var(--text-4xl);
  font-weight: 700;
  color: var(--color-secondary);
  line-height: 1.2;
  margin-bottom: var(--space-8);
}

.about__text {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin-bottom: var(--space-10);
}

.about__text p {
  color: var(--color-text);
  line-height: 1.8;
}

.about__values {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.value {
  display: flex;
  gap: var(--space-4);
  align-items: flex-start;
}

.value__icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  color: white;
  border-radius: var(--radius-md);
}

.value__title {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-secondary);
  margin-bottom: var(--space-1);
}

.value__text {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.about__sidebar {
  position: sticky;
  top: 100px;
}

.about__highlights {
  background-color: var(--color-bg);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  box-shadow: var(--shadow-lg);
  margin-bottom: var(--space-6);
}

.highlight {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: var(--space-4) 0;
}

.highlight:not(:last-child) {
  border-bottom: 1px solid var(--color-border);
}

.highlight__number {
  font-size: var(--text-4xl);
  font-weight: 700;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.highlight__label {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  font-weight: 500;
}

.about__cta {
  background-color: var(--color-secondary);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  text-align: center;
}

.about__cta p {
  color: white;
  margin-bottom: var(--space-4);
}

@media (max-width: 1024px) {
  .about__grid {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }

  .about__sidebar {
    position: static;
  }

  .about__highlights {
    display: flex;
    justify-content: space-around;
  }

  .highlight {
    padding: var(--space-4);
  }

  .highlight:not(:last-child) {
    border-bottom: none;
    border-right: 1px solid var(--color-border);
  }
}

@media (max-width: 768px) {
  .about__title {
    font-size: var(--text-3xl);
  }

  .about__highlights {
    flex-direction: column;
  }

  .highlight:not(:last-child) {
    border-right: none;
    border-bottom: 1px solid var(--color-border);
  }
}
</style>

