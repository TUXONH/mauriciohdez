<script setup>
const techCategories = [
  {
    name: 'Frontend',
    technologies: [
      { name: 'Vue.js', level: 'Expert' },
      { name: 'React', level: 'Advanced' },
      { name: 'TypeScript', level: 'Expert' },
      { name: 'Tailwind CSS', level: 'Expert' },
      { name: 'Nuxt', level: 'Advanced' },
    ],
  },
  {
    name: 'Backend',
    technologies: [
      { name: 'Node.js', level: 'Expert' },
      { name: 'Python', level: 'Advanced' },
      { name: 'Go', level: 'Intermediate' },
      { name: 'PostgreSQL', level: 'Expert' },
      { name: 'MongoDB', level: 'Advanced' },
    ],
  },
  {
    name: 'DevOps & Cloud',
    technologies: [
      { name: 'AWS', level: 'Advanced' },
      { name: 'Docker', level: 'Expert' },
      { name: 'Kubernetes', level: 'Intermediate' },
      { name: 'GitHub Actions', level: 'Expert' },
      { name: 'Terraform', level: 'Intermediate' },
    ],
  },
  {
    name: 'Tools & Others',
    technologies: [
      { name: 'Git', level: 'Expert' },
      { name: 'REST APIs', level: 'Expert' },
      { name: 'GraphQL', level: 'Advanced' },
      { name: 'Redis', level: 'Advanced' },
      { name: 'Linux', level: 'Advanced' },
    ],
  },
]

const getLevelClass = (level) => {
  const classes = {
    'Expert': 'level--expert',
    'Advanced': 'level--advanced',
    'Intermediate': 'level--intermediate',
  }
  return classes[level] || ''
}
</script>

<template>
  <section class="tech section section--alt" id="technologies">
    <div class="container">
      <div class="section__header">
        <span class="tech__label">Technologies</span>
        <h2 class="section__title">My Tech Stack</h2>
        <p class="section__subtitle">
          A curated selection of technologies I use to build robust, scalable solutions.
        </p>
      </div>

      <div class="tech__grid">
        <div
          v-for="category in techCategories"
          :key="category.name"
          class="tech-category"
        >
          <h3 class="tech-category__title">{{ category.name }}</h3>
          <ul class="tech-category__list">
            <li
              v-for="tech in category.technologies"
              :key="tech.name"
              class="tech-item"
            >
              <span class="tech-item__name">{{ tech.name }}</span>
              <span
                class="tech-item__level"
                :class="getLevelClass(tech.level)"
              >
                {{ tech.level }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="tech__note">
        <p>
          <strong>Always learning:</strong> I continuously explore new technologies and stay updated
          with industry best practices to deliver cutting-edge solutions.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tech__label {
  display: block;
  font-size: var(--text-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-primary);
  margin-bottom: var(--space-4);
}

.tech__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

.tech-category {
  background-color: var(--color-bg);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  border: 1px solid var(--color-border);
}

.tech-category__title {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-secondary);
  margin-bottom: var(--space-5);
  padding-bottom: var(--space-4);
  border-bottom: 2px solid var(--color-primary);
}

.tech-category__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.tech-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-2) 0;
}

.tech-item__name {
  font-weight: 500;
  color: var(--color-text);
}

.tech-item__level {
  font-size: var(--text-xs);
  font-weight: 600;
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-sm);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.level--expert {
  background-color: rgba(34, 197, 94, 0.1);
  color: #16a34a;
}

.level--advanced {
  background-color: rgba(37, 99, 235, 0.1);
  color: var(--color-primary);
}

.level--intermediate {
  background-color: rgba(245, 158, 11, 0.1);
  color: #d97706;
}

.tech__note {
  margin-top: var(--space-10);
  padding: var(--space-6);
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.05), rgba(6, 182, 212, 0.05));
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--color-primary);
}

.tech__note p {
  color: var(--color-text);
  text-align: center;
}

@media (max-width: 1024px) {
  .tech__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .tech__grid {
    grid-template-columns: 1fr;
  }
}
</style>

