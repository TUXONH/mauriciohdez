<script setup>
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import TechStackSection from '@/components/sections/TechStackSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>

<template>
  <div class="app">
    <TheHeader />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TechStackSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <TheFooter />
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
