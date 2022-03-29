<template>
    <section id="service_page" class="bg-light py-3 py-md-5">
        <div class="container py-3 py-md-5">
            <header class="gray-border-left mb-3 mb-md-5">
                <h1>Drone Cleaning</h1>
            </header>
            <article class="card rounded-3 shadow-sm">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="~/assets/images/services/s01.webp" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <p class="lead text-muted card-text">Whether your needs are commercial or residential, Buruge has a drone cleaning solution for your building. </p>
                        <p class="card-text">We use custom-designed, state-of-the-art drone technology to clean building exteriors in a fraction of the time at a fraction of the cost. </p>
                        <p class="card-text">Drones technology used to wash exteriors of commercial/residential buildings and reduce risk on employees during cleaning process.</p>
                        <a href="#contact" class="btn btn-primary btn-sm mt-auto align-self-end">Get in touch</a>
                    </div>
                    </div>
                </div>
                
            </article>
        </div>
    </section>
</template>

<script>
export default {
    head() {
      return {
          title: 'Drone Cleaning',
          meta: [
              {
                  hid: 'description',
                  name: 'description',
                  content:'Whether your needs are commercial or residential, Buruge has a drone cleaning solution for your building'
              }

          ]
      }
  }
}
</script>

<style>

</style>