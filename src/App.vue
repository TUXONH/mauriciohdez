<script setup>
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import FloatingContact from '@/components/FloatingContact.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import ProcessSection from '@/components/sections/ProcessSection.vue'
import TechStackSection from '@/components/sections/TechStackSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
import FaqSection from '@/components/sections/FaqSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

useScrollAnimation()
</script>

<template>
  <div class="app">
    <TheHeader />
    <main>
      <HeroSection />
      <AboutSection class="animate-on-scroll" />
      <ServicesSection class="animate-on-scroll" />
      <ProcessSection class="animate-on-scroll" />
      <TechStackSection class="animate-on-scroll" />
      <ProjectsSection class="animate-on-scroll" />
      <TestimonialsSection class="animate-on-scroll" />
      <FaqSection class="animate-on-scroll" />
      <ContactSection class="animate-on-scroll" />
    </main>
    <TheFooter />
    <FloatingContact />
  </div>
</template>

<style>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
