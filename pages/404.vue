<template>
  <div id="not-found-page" class="vh-100 bg-primary d-flex align-items-center justify-content-center">
    <div class="text-white">
        <header>
            <h1 class="display-1">404 <br> <small>Page Not Found</small></h1>
            <p>The page you are looking for is not found, if you feel this is a mistake, please contact site administrator</p>
            <a href="/" class="btn btn-primary" type="button">Go back to main page</a>
        </header>
    </div>
  </div>
</template>

<script>
export default {
    layout: 'blank',
    head() {
      return {
          title: 'Burooj Pro | 404 Page Not Found',
      }
  }
}
</script>

<style>

</style>