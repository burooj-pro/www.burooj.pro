<template>
  <div>
    <IncludesHeader />
    <Nuxt />
    <SectionsContact />
    <IncludesFooter />
  </div>
</template>

<script>
export default {
head(){
    return {
      script: [
				{type: 'text/javascript',src: 'https://webforms.pipedrive.com/f/loader'},
			],
    }
  },
}
</script>

<style>

</style>
