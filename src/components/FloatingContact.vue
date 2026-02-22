<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const isExpanded = ref(false)

const checkScroll = () => {
  isVisible.value = window.scrollY > 400
  if (!isVisible.value) {
    isExpanded.value = false
  }
}

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll, { passive: true })
  checkScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <Transition name="fab">
    <div v-show="isVisible" class="floating-contact">
      <Transition name="panel">
        <div v-show="isExpanded" class="floating-contact__panel">
          <p class="floating-contact__title">Let's connect</p>
          <a href="mailto:contact@mauriciohdez.dev" class="floating-contact__option">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <span>Send an Email</span>
          </a>
          <a href="#contact" class="floating-contact__option" @click="isExpanded = false">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14,2 14,8 20,8"/></svg>
            <span>Contact Form</span>
          </a>
          <a href="https://linkedin.com/in/mauriciohdez" target="_blank" rel="noopener noreferrer" class="floating-contact__option">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </Transition>

      <button
        class="floating-contact__btn"
        :class="{ 'floating-contact__btn--active': isExpanded }"
        @click="toggleExpanded"
        aria-label="Contact options"
      >
        <svg v-if="!isExpanded" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
    </div>
  </Transition>
</template>

<style scoped>
.floating-contact {
  position: fixed;
  bottom: var(--space-6);
  right: var(--space-6);
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--space-3);
}

.floating-contact__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-base);
}

.floating-contact__btn:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow-xl);
}

.floating-contact__btn--active {
  background: var(--color-secondary);
}

.floating-contact__panel {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-4);
  box-shadow: var(--shadow-xl);
  min-width: 220px;
}

.floating-contact__title {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-secondary);
  padding: var(--space-2) var(--space-3);
  margin-bottom: var(--space-2);
}

.floating-contact__option {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3);
  color: var(--color-text);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  font-size: var(--text-sm);
  font-weight: 500;
}

.floating-contact__option:hover {
  background-color: var(--color-bg-alt);
  color: var(--color-primary);
}

.floating-contact__option svg {
  flex-shrink: 0;
  color: var(--color-primary);
}

/* Transitions */
.fab-enter-active,
.fab-leave-active {
  transition: all var(--transition-base);
}

.fab-enter-from,
.fab-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}

.panel-enter-active,
.panel-leave-active {
  transition: all var(--transition-base);
}

.panel-enter-from,
.panel-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.95);
}

@media (max-width: 768px) {
  .floating-contact {
    bottom: var(--space-4);
    right: var(--space-4);
  }

  .floating-contact__btn {
    width: 52px;
    height: 52px;
  }
}
</style>
