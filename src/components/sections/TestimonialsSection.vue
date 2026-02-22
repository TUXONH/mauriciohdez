<script setup>
import { ref } from 'vue'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, Collaborate 4 Kids',
    text: 'Mauricio transformed our e-commerce platform. His attention to detail and understanding of our business needs resulted in a significant improvement in our checkout conversion rate. Highly professional and reliable.',
    rating: 5,
  },
  {
    name: 'Carlos Mendoza',
    role: 'Founder, Amazing Cancun Tours',
    text: 'Working with Mauricio was a game-changer for our tourism business. He optimized our booking flow and the results speak for themselves — more bookings and happier customers. I couldn\'t recommend him more.',
    rating: 5,
  },
  {
    name: 'Emily Chen',
    role: 'Director, Fast & Fun Language',
    text: 'Mauricio upgraded our entire frontend architecture with Next.js and React. The platform is now faster, more scalable, and our students love the improved experience. His technical expertise is outstanding.',
    rating: 5,
  },
]

const activeIndex = ref(0)

const setActive = (index) => {
  activeIndex.value = index
}

const next = () => {
  activeIndex.value = (activeIndex.value + 1) % testimonials.length
}

const prev = () => {
  activeIndex.value = (activeIndex.value - 1 + testimonials.length) % testimonials.length
}
</script>

<template>
  <section class="testimonials section" id="testimonials">
    <div class="container">
      <div class="section__header">
        <span class="testimonials__label">Testimonials</span>
        <h2 class="section__title">What Clients Say</h2>
        <p class="section__subtitle">
          Don't just take my word for it — here's what my clients have to say about working together.
        </p>
      </div>

      <div class="testimonials__carousel">
        <button class="carousel__btn carousel__btn--prev" @click="prev" aria-label="Previous testimonial">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>

        <div class="testimonials__track">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.name"
            class="testimonial-card"
            :class="{ 'testimonial-card--active': index === activeIndex }"
          >
            <div class="testimonial-card__stars">
              <svg v-for="star in testimonial.rating" :key="star" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>

            <blockquote class="testimonial-card__text">
              "{{ testimonial.text }}"
            </blockquote>

            <div class="testimonial-card__author">
              <div class="testimonial-card__avatar">
                {{ testimonial.name.charAt(0) }}
              </div>
              <div class="testimonial-card__info">
                <span class="testimonial-card__name">{{ testimonial.name }}</span>
                <span class="testimonial-card__role">{{ testimonial.role }}</span>
              </div>
            </div>
          </div>
        </div>

        <button class="carousel__btn carousel__btn--next" @click="next" aria-label="Next testimonial">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>

      <div class="testimonials__dots">
        <button
          v-for="(_, index) in testimonials"
          :key="index"
          class="dot"
          :class="{ 'dot--active': index === activeIndex }"
          @click="setActive(index)"
          :aria-label="`Go to testimonial ${index + 1}`"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials__label {
  display: block;
  font-size: var(--text-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-primary);
  margin-bottom: var(--space-4);
}

.testimonials__carousel {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  max-width: 800px;
  margin: 0 auto;
}

.carousel__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: var(--color-bg);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: 50%;
  cursor: pointer;
  transition: all var(--transition-fast);
  flex-shrink: 0;
}

.carousel__btn:hover {
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.testimonials__track {
  flex: 1;
  overflow: hidden;
  position: relative;
  min-height: 280px;
}

.testimonial-card {
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: translateX(20px);
  transition: all var(--transition-slow);
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--space-8);
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
}

.testimonial-card--active {
  opacity: 1;
  transform: translateX(0);
  pointer-events: auto;
}

.testimonial-card__stars {
  display: flex;
  gap: var(--space-1);
  color: #f59e0b;
  margin-bottom: var(--space-5);
}

.testimonial-card__text {
  font-size: var(--text-lg);
  color: var(--color-text);
  line-height: 1.8;
  margin-bottom: var(--space-6);
  font-style: italic;
}

.testimonial-card__author {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.testimonial-card__avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  color: white;
  font-weight: 700;
  font-size: var(--text-lg);
  border-radius: 50%;
}

.testimonial-card__info {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.testimonial-card__name {
  font-weight: 600;
  color: var(--color-secondary);
}

.testimonial-card__role {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.testimonials__dots {
  display: flex;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-6);
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background-color: var(--color-border);
  cursor: pointer;
  transition: all var(--transition-fast);
  padding: 0;
}

.dot--active {
  background-color: var(--color-primary);
  transform: scale(1.3);
}

@media (max-width: 768px) {
  .testimonials__carousel {
    gap: var(--space-2);
  }

  .carousel__btn {
    width: 40px;
    height: 40px;
  }

  .testimonial-card {
    padding: var(--space-5);
  }

  .testimonial-card__text {
    font-size: var(--text-base);
  }

  .testimonials__track {
    min-height: 320px;
  }
}
</style>
