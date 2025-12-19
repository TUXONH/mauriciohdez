<script setup>
const services = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12 2 2 4-4"/></svg>`,
    title: 'Web Application Development',
    description: 'Full-stack web applications built with modern frameworks. From MVP to enterprise-grade solutions, I deliver performant and maintainable applications.',
    features: ['Single Page Applications', 'Progressive Web Apps', 'Admin Dashboards', 'E-commerce Platforms'],
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9"/></svg>`,
    title: 'API Development & Integration',
    description: 'RESTful and GraphQL APIs designed for scalability and security. Seamless integration with third-party services and legacy systems.',
    features: ['REST & GraphQL APIs', 'Third-party Integrations', 'Payment Gateways', 'Authentication Systems'],
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
    title: 'Cloud Solutions & DevOps',
    description: 'Cloud infrastructure setup, optimization, and management. Automated deployment pipelines and monitoring for reliable operations.',
    features: ['AWS / GCP / Azure', 'CI/CD Pipelines', 'Container Orchestration', 'Infrastructure as Code'],
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14,2 14,8 20,8"/><path d="m10 13-2 2 2 2"/><path d="m14 17 2-2-2-2"/></svg>`,
    title: 'Code Review & Refactoring',
    description: 'Improve your existing codebase with thorough code reviews, refactoring, and best practices implementation.',
    features: ['Code Quality Audits', 'Performance Optimization', 'Technical Debt Reduction', 'Documentation'],
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    title: 'Technical Consulting',
    description: 'Strategic guidance on technology decisions, architecture planning, and team mentoring to set your projects up for success.',
    features: ['Architecture Design', 'Technology Selection', 'Team Training', 'Project Planning'],
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`,
    title: 'Mobile-First Development',
    description: 'Responsive web applications and hybrid mobile apps that provide seamless experiences across all devices.',
    features: ['Responsive Design', 'Cross-platform Apps', 'Mobile Optimization', 'Touch-friendly UI'],
  },
]
</script>

<template>
  <section class="services section" id="services">
    <div class="container">
      <div class="section__header">
        <span class="services__label">Services</span>
        <h2 class="section__title">How I Can Help You</h2>
        <p class="section__subtitle">
          End-to-end software development services tailored to your business needs.
          From initial concept to ongoing support.
        </p>
      </div>

      <div class="services__grid">
        <article
          v-for="service in services"
          :key="service.title"
          class="service-card"
        >
          <div class="service-card__icon" v-html="service.icon"></div>
          <h3 class="service-card__title">{{ service.title }}</h3>
          <p class="service-card__description">{{ service.description }}</p>
          <ul class="service-card__features">
            <li
              v-for="feature in service.features"
              :key="feature"
              class="service-card__feature"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              {{ feature }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services__label {
  display: block;
  font-size: var(--text-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-primary);
  margin-bottom: var(--space-4);
}

.services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.service-card {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  transition: all var(--transition-base);
}

.service-card:hover {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.service-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(6, 182, 212, 0.1));
  color: var(--color-primary);
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-5);
}

.service-card__title {
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--color-secondary);
  margin-bottom: var(--space-3);
}

.service-card__description {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: var(--space-5);
}

.service-card__features {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.service-card__feature {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: var(--color-text);
}

.service-card__feature svg {
  color: var(--color-accent);
  flex-shrink: 0;
}

@media (max-width: 1024px) {
  .services__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .services__grid {
    grid-template-columns: 1fr;
  }
}
</style>

