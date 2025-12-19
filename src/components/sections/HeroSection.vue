<script setup>
const specialties = [
  'Full-Stack Development',
  'Cloud Architecture',
  'API Design',
  'System Integration',
]
</script>

<template>
  <section class="hero" id="hero">
    <div class="container hero__container">
      <div class="hero__content">
        <div class="hero__badge">
          <span class="badge-dot"></span>
          Available for new projects
        </div>

        <h1 class="hero__title">
          Hi, I'm <span class="hero__name">Mauricio Hdez</span>
        </h1>

        <p class="hero__role">Freelance Software Developer</p>

        <p class="hero__description">
          I help businesses build scalable, high-performance software solutions that solve real problems.
          From concept to deployment, I deliver clean code and exceptional user experiences.
        </p>

        <div class="hero__specialties">
          <span
            v-for="specialty in specialties"
            :key="specialty"
            class="specialty-tag"
          >
            {{ specialty }}
          </span>
        </div>

        <div class="hero__actions">
          <a href="#contact" class="btn btn--primary btn--lg">
            Start a Project
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
          </a>
          <a href="#projects" class="btn btn--secondary btn--lg">
            View My Work
          </a>
        </div>
      </div>

      <div class="hero__visual">
        <div class="hero__image-container">
          <div class="hero__code-block">
            <div class="code-header">
              <span class="code-dot code-dot--red"></span>
              <span class="code-dot code-dot--yellow"></span>
              <span class="code-dot code-dot--green"></span>
            </div>
            <pre class="code-content"><code><span class="code-keyword">const</span> developer = {
  <span class="code-property">name</span>: <span class="code-string">"Mauricio Hdez"</span>,
  <span class="code-property">focus</span>: <span class="code-string">"Business Solutions"</span>,
  <span class="code-property">passion</span>: <span class="code-string">"Clean Code"</span>,

  <span class="code-method">deliver</span>() {
    <span class="code-keyword">return</span> <span class="code-string">"Exceptional Results"</span>;
  }
};</code></pre>
          </div>
        </div>
      </div>
    </div>

    <div class="hero__scroll">
      <a href="#about" class="scroll-indicator" aria-label="Scroll to next section">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 72px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.03) 0%, rgba(6, 182, 212, 0.05) 100%);
  z-index: -1;
}

.hero__container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
  align-items: center;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  background-color: rgba(34, 197, 94, 0.1);
  color: #16a34a;
  font-size: var(--text-sm);
  font-weight: 500;
  border-radius: var(--radius-full);
  margin-bottom: var(--space-6);
}

.badge-dot {
  width: 8px;
  height: 8px;
  background-color: #22c55e;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.hero__title {
  font-size: var(--text-5xl);
  font-weight: 700;
  line-height: 1.1;
  color: var(--color-secondary);
  margin-bottom: var(--space-4);
}

.hero__name {
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__role {
  font-size: var(--text-2xl);
  font-weight: 500;
  color: var(--color-text-muted);
  margin-bottom: var(--space-6);
}

.hero__description {
  font-size: var(--text-lg);
  color: var(--color-text);
  line-height: 1.7;
  max-width: 500px;
  margin-bottom: var(--space-6);
}

.hero__specialties {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-8);
}

.specialty-tag {
  padding: var(--space-2) var(--space-4);
  background-color: var(--color-bg-alt);
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  font-weight: 500;
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
}

.hero__actions {
  display: flex;
  gap: var(--space-4);
}

.hero__visual {
  display: flex;
  justify-content: center;
}

.hero__code-block {
  background-color: #1e293b;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  max-width: 400px;
  transform: rotate(2deg);
}

.code-header {
  display: flex;
  gap: 8px;
  padding: var(--space-4);
  background-color: #0f172a;
}

.code-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.code-dot--red { background-color: #ef4444; }
.code-dot--yellow { background-color: #eab308; }
.code-dot--green { background-color: #22c55e; }

.code-content {
  padding: var(--space-4) var(--space-6);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  line-height: 1.8;
  color: #e2e8f0;
  overflow-x: auto;
}

.code-keyword { color: #c084fc; }
.code-property { color: #60a5fa; }
.code-string { color: #4ade80; }
.code-method { color: #fbbf24; }

.hero__scroll {
  position: absolute;
  bottom: var(--space-8);
  left: 50%;
  transform: translateX(-50%);
}

.scroll-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: var(--color-text-muted);
  border: 2px solid var(--color-border);
  border-radius: 50%;
  animation: bounce 2s infinite;
  transition: all var(--transition-fast);
}

.scroll-indicator:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}

@media (max-width: 1024px) {
  .hero__container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero__description {
    margin: 0 auto var(--space-6);
  }

  .hero__specialties {
    justify-content: center;
  }

  .hero__actions {
    justify-content: center;
  }

  .hero__visual {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero__title {
    font-size: var(--text-4xl);
  }

  .hero__role {
    font-size: var(--text-xl);
  }

  .hero__actions {
    flex-direction: column;
  }

  .hero__actions .btn {
    width: 100%;
  }
}
</style>

