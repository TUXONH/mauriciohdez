<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <a href="#" class="header__logo">
        <span class="logo-text">MH</span>
        <span class="logo-name">Mauricio Hdez</span>
      </a>

      <nav class="header__nav" :class="{ 'header__nav--open': isMenuOpen }">
        <ul class="nav__list">
          <li v-for="link in navLinks" :key="link.href" class="nav__item">
            <a :href="link.href" class="nav__link" @click="closeMenu">
              {{ link.label }}
            </a>
          </li>
        </ul>
        <a href="#contact" class="btn btn--primary nav__cta" @click="closeMenu">
          Let's Talk
        </a>
      </nav>

      <button
        class="header__toggle"
        :class="{ 'header__toggle--active': isMenuOpen }"
        @click="toggleMenu"
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
}

.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.header__logo {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  text-decoration: none;
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
  color: var(--color-secondary);
}

.header__nav {
  display: flex;
  align-items: center;
  gap: var(--space-8);
}

.nav__list {
  display: flex;
  align-items: center;
  gap: var(--space-6);
}

.nav__link {
  font-weight: 500;
  color: var(--color-text);
  transition: color var(--transition-fast);
  position: relative;
}

.nav__link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-primary);
  transition: width var(--transition-fast);
}

.nav__link:hover {
  color: var(--color-primary);
}

.nav__link:hover::after {
  width: 100%;
}

.header__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: var(--space-2);
  background: none;
  border: none;
  cursor: pointer;
}

.header__toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--color-secondary);
  transition: all var(--transition-fast);
}

.header__toggle--active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.header__toggle--active span:nth-child(2) {
  opacity: 0;
}

.header__toggle--active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .header__toggle {
    display: flex;
  }

  .header__nav {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: flex-start;
    padding: var(--space-8);
    background-color: var(--color-bg);
    transform: translateX(100%);
    transition: transform var(--transition-base);
  }

  .header__nav--open {
    transform: translateX(0);
  }

  .nav__list {
    flex-direction: column;
    gap: var(--space-6);
  }

  .nav__link {
    font-size: var(--text-xl);
  }

  .nav__cta {
    margin-top: var(--space-8);
    width: 100%;
  }
}
</style>

