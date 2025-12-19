<script setup>
const projects = [
  {
    title: 'Collaborate 4 Kids',
    description: 'Enhanced an existing WordPress e-commerce platform for healthcare professionals selling certified educational courses for children with special needs. Focused on improving course-based product structure, checkout flows, payment reliability, and overall user experience.',
    technologies: ['WordPress', 'JavaScript', 'WooCommerce', 'Stripe'],
    url: 'https://collaborate4kids.com/',
  },
  {
    title: 'Amazing Cancun Tours',
    description: 'Improved and customized an existing tourism e-commerce site for online tour sales in the Riviera Maya. Worked on product configuration, booking flow optimizations, and usability improvements to increase clarity and conversion.',
    technologies: ['WordPress', 'WooCommerce'],
    url: 'https://amazingcancuntours.com/',
  },
  {
    title: 'Whale Shark Mexico',
    description: 'Extended an existing e-commerce platform focused on whale shark tour bookings. Enhanced tour product setup, seasonal availability handling, and user experience for international customers.',
    technologies: ['WordPress', 'WooCommerce'],
    url: 'https://whalesharkmexico.com.mx/',
  },
  {
    title: 'Fast & Fun Language',
    description: 'Upgraded and evolved an existing web platform for online Spanish classes. Improved frontend architecture, class listing and scheduling flows, and overall performance to support future scalability.',
    technologies: ['Next.js', 'React', 'TypeScript'],
    url: 'https://fastandfunlanguage.com/',
  },
]
</script>

<template>
  <section class="projects section" id="projects">
    <div class="container">
      <div class="section__header">
        <span class="projects__label">Selected Work</span>
        <h2 class="section__title">Projects</h2>
        <p class="section__subtitle">
          Real-world improvements and customizations delivered for clients across e-commerce and web platforms.
        </p>
      </div>

      <div class="projects__grid">
        <article
          v-for="project in projects"
          :key="project.title"
          class="project-card"
        >
          <h3 class="project-card__title">{{ project.title }}</h3>
          <p class="project-card__description">{{ project.description }}</p>

          <div class="project-card__footer">
            <div class="project-card__tech">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="project-card__tag"
              >
                {{ tech }}
              </span>
            </div>

            <a
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="project-card__link"
            >
              <span>Visit Site</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
            </a>
          </div>
        </article>
      </div>

      <div class="projects__cta">
        <p>Interested in seeing more or discussing a similar project?</p>
        <a href="#contact" class="btn btn--primary btn--lg">
          Let's Talk
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects__label {
  display: block;
  font-size: var(--text-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-primary);
  margin-bottom: var(--space-4);
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
}

.project-card {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  transition: all var(--transition-base);
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.project-card__title {
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--color-secondary);
  margin-bottom: var(--space-3);
}

.project-card__description {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: var(--space-5);
  flex-grow: 1;
}

.project-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: var(--space-4);
}

.project-card__tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  flex: 1;
}

.project-card__tag {
  padding: var(--space-1) var(--space-3);
  background-color: var(--color-bg-alt);
  color: var(--color-text-muted);
  font-size: var(--text-xs);
  font-weight: 500;
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
}

.project-card__link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-primary);
  text-decoration: none;
  white-space: nowrap;
  transition: all var(--transition-base);
}

.project-card__link:hover {
  color: var(--color-secondary);
}

.project-card__link svg {
  transition: transform var(--transition-base);
}

.project-card__link:hover svg {
  transform: translate(2px, -2px);
}

.projects__cta {
  margin-top: var(--space-12);
  text-align: center;
  padding: var(--space-10);
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.05), rgba(6, 182, 212, 0.05));
  border-radius: var(--radius-xl);
}

.projects__cta p {
  font-size: var(--text-lg);
  color: var(--color-text);
  margin-bottom: var(--space-6);
}

@media (max-width: 768px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }

  .project-card__footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .project-card__link {
    margin-top: var(--space-3);
  }
}
</style>

