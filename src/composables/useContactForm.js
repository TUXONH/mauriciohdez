import { ref, reactive, computed } from 'vue'

export function useContactForm() {
  const form = reactive({
    name: '',
    email: '',
    message: '',
  })

  const errors = reactive({
    name: '',
    email: '',
    message: '',
  })

  const isSubmitting = ref(false)
  const isSubmitted = ref(false)
  const submitError = ref('')

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateField = (field) => {
    errors[field] = ''

    switch (field) {
      case 'name':
        if (!form.name.trim()) {
          errors.name = 'Name is required'
        } else if (form.name.trim().length < 2) {
          errors.name = 'Name must be at least 2 characters'
        }
        break

      case 'email':
        if (!form.email.trim()) {
          errors.email = 'Email is required'
        } else if (!isValidEmail(form.email)) {
          errors.email = 'Please enter a valid email address'
        }
        break

      case 'message':
        if (!form.message.trim()) {
          errors.message = 'Message is required'
        } else if (form.message.trim().length < 10) {
          errors.message = 'Message must be at least 10 characters'
        }
        break
    }

    return !errors[field]
  }

  const validateForm = () => {
    validateField('name')
    validateField('email')
    validateField('message')

    return !errors.name && !errors.email && !errors.message
  }

  const isFormValid = computed(() => {
    return (
      form.name.trim().length >= 2 &&
      isValidEmail(form.email) &&
      form.message.trim().length >= 10
    )
  })

  const resetForm = () => {
    form.name = ''
    form.email = ''
    form.message = ''
    errors.name = ''
    errors.email = ''
    errors.message = ''
    isSubmitted.value = false
    submitError.value = ''
  }

  // TODO: Replace with your Formspree form ID from https://formspree.io
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

  const submitForm = async () => {
    if (!validateForm()) {
      return false
    }

    isSubmitting.value = true
    submitError.value = ''

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      isSubmitted.value = true
      return true
    } catch (error) {
      submitError.value = 'Something went wrong. Please try again or email me directly.'
      return false
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    form,
    errors,
    isSubmitting,
    isSubmitted,
    submitError,
    isFormValid,
    validateField,
    validateForm,
    submitForm,
    resetForm,
  }
}

