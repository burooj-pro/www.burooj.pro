<template>
    <main>
        <SectionsHero />
        <SectionsAbout />
        <SectionsServices />
        <SectionsProjects />
        
    </main>
</template>

<script>
export default {
  name: 'IndexPage',
  head(){
    return {
      script: [
				{type: 'text/javascript',src: 'https://webforms.pipedrive.com/f/loader'},
			],
    }
  },
}
</script>
