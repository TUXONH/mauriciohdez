<script setup>
const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We start with a conversation to understand your business, goals, and technical requirements. I ask the right questions to define the scope clearly.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  },
  {
    number: '02',
    title: 'Proposal & Planning',
    description: 'I deliver a detailed proposal with timeline, milestones, and transparent pricing. No surprises — you know exactly what to expect before we begin.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14,2 14,8 20,8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/></svg>`,
  },
  {
    number: '03',
    title: 'Development',
    description: 'I build iteratively with regular updates and demos. You see progress every week and can provide feedback at each stage to keep the project on track.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'After thorough testing, we deploy your project. I provide post-launch support and am always available for future improvements and scaling needs.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  },
]
</script>

<template>
  <section class="process section section--alt" id="process">
    <div class="container">
      <div class="section__header">
        <span class="process__label">Process</span>
        <h2 class="section__title">How I Work</h2>
        <p class="section__subtitle">
          A clear, structured process that keeps you informed and in control at every stage.
        </p>
      </div>

      <div class="process__timeline">
        <div
          v-for="step in steps"
          :key="step.number"
          class="process-step"
        >
          <div class="process-step__indicator">
            <div class="process-step__icon" v-html="step.icon"></div>
            <div class="process-step__line"></div>
          </div>
          <div class="process-step__content">
            <span class="process-step__number">Step {{ step.number }}</span>
            <h3 class="process-step__title">{{ step.title }}</h3>
            <p class="process-step__description">{{ step.description }}</p>
          </div>
        </div>
      </div>

      <div class="process__cta">
        <p>Ready to get started?</p>
        <a href="#contact" class="btn btn--primary btn--lg">
          Start Your Project
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.process__label {
  display: block;
  font-size: var(--text-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-primary);
  margin-bottom: var(--space-4);
}

.process__timeline {
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.process-step {
  display: flex;
  gap: var(--space-6);
}

.process-step__indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

.process-step__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  color: white;
  border-radius: 50%;
  z-index: 1;
}

.process-step__line {
  width: 2px;
  flex: 1;
  background: linear-gradient(180deg, var(--color-primary), var(--color-border));
  margin: var(--space-2) 0;
}

.process-step:last-child .process-step__line {
  display: none;
}

.process-step__content {
  padding-bottom: var(--space-8);
}

.process-step__number {
  display: inline-block;
  font-size: var(--text-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-primary);
  margin-bottom: var(--space-2);
}

.process-step__title {
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--color-secondary);
  margin-bottom: var(--space-3);
}

.process-step__description {
  color: var(--color-text-muted);
  line-height: 1.7;
}

.process__cta {
  margin-top: var(--space-8);
  text-align: center;
  padding: var(--space-10);
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.05), rgba(6, 182, 212, 0.05));
  border-radius: var(--radius-xl);
}

.process__cta p {
  font-size: var(--text-lg);
  color: var(--color-text);
  margin-bottom: var(--space-6);
}

@media (max-width: 768px) {
  .process-step {
    gap: var(--space-4);
  }

  .process-step__icon {
    width: 48px;
    height: 48px;
  }

  .process-step__content {
    padding-bottom: var(--space-6);
  }
}
</style>
