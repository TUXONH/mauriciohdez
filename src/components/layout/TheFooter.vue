<script setup>
const currentYear = new Date().getFullYear()

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/mauriciohdez',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/mauriciohdez',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
  },
  {
    name: 'Email',
    href: 'mailto:contact@mauriciohdez.dev',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  },
]

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__brand">
          <a href="#" class="footer__logo">
            <span class="logo-text">MH</span>
            <span class="logo-name">Mauricio Hdez</span>
          </a>
          <p class="footer__tagline">
            Building digital solutions that drive business growth.
          </p>
        </div>

        <div class="footer__links">
          <h4 class="footer__heading">Quick Links</h4>
          <ul class="footer__list">
            <li v-for="link in footerLinks" :key="link.href">
              <a :href="link.href" class="footer__link">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <div class="footer__social">
          <h4 class="footer__heading">Connect</h4>
          <div class="social-links">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              :aria-label="social.name"
              class="social-link"
              target="_blank"
              rel="noopener noreferrer"
              v-html="social.icon"
            />
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <p class="footer__copyright">
          © {{ currentYear }} Mauricio Hdez. All rights reserved.
        </p>
        <p class="footer__location">
          Available for remote work worldwide
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-bg-dark);
  color: white;
  padding: var(--space-16) 0 var(--space-8);
}

.footer__content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: var(--space-12);
  padding-bottom: var(--space-12);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer__brand {
  max-width: 300px;
}

.footer__logo {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  text-decoration: none;
  margin-bottom: var(--space-4);
}

.logo-text {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  color: white;
  font-weight: 700;
  font-size: var(--text-lg);
  border-radius: var(--radius-md);
}

.logo-name {
  font-weight: 600;
  font-size: var(--text-lg);
  color: white;
}

.footer__tagline {
  color: var(--color-text-light);
  line-height: 1.6;
}

.footer__heading {
  font-size: var(--text-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-light);
  margin-bottom: var(--space-4);
}

.footer__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer__link {
  color: white;
  transition: color var(--transition-fast);
}

.footer__link:hover {
  color: var(--color-primary);
}

.social-links {
  display: flex;
  gap: var(--space-4);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.social-link:hover {
  background-color: var(--color-primary);
  color: white;
  transform: translateY(-2px);
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-8);
}

.footer__copyright,
.footer__location {
  font-size: var(--text-sm);
  color: var(--color-text-light);
}

@media (max-width: 768px) {
  .footer__content {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .footer__bottom {
    flex-direction: column;
    gap: var(--space-2);
    text-align: center;
  }
}
</style>

