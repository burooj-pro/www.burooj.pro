<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8">
        <header class="mb-4">
          <h1 class="fw-bold">Privacy Policy</h1>
          <p class="text-muted">Last updated: {{ lastUpdated }}</p>
        </header>

        <section class="mb-4">
          <p>
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
        </section>

        <section class="mb-4">
          <h2 class="h4 fw-bold">Information We Collect</h2>
          <p>
            We may collect information that you voluntarily provide to us when you contact us or use our services, as well as usage data collected automatically.
          </p>
        </section>

        <section class="mb-4">
          <h2 class="h4 fw-bold">How We Use Your Information</h2>
          <p>
            We use the information we collect to operate and maintain our website, respond to inquiries, improve user experience, and comply with legal obligations.
          </p>
        </section>

        <section class="mb-4">
          <h2 class="h4 fw-bold">Third-Party Services</h2>
          <p>
            We may use third-party services (such as analytics or embedded forms) that collect, monitor, and analyze usage to help us improve our website.
          </p>
        </section>

        <section class="mb-4">
          <h2 class="h4 fw-bold">Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal data, including the right to access, correct, or delete your information.
          </p>
        </section>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'no-contact',
  head() {
    return {
      title: 'Burooj Pro | Privacy Policy',
      meta: [
        { hid: 'description', name: 'description', content: 'Privacy Policy for Burooj Pro' }
      ]
    }
  },
  data() {
    return {
      lastUpdated: 'October 1, 2025'
    }
  }
}
</script>

<style>

</style> 