<template>
  <div class="no-contact-layout">
    <IncludesHeader />
    <Nuxt />
    <IncludesFooter />

    <a style="color: inherit; " href="https://api.whatsapp.com/send?phone=+966566639994&text=أرغب في الاستفسار" class="float" target="_blank">
        <i class="fa fa-whatsapp my-float" style="color:white"></i>
    </a>
  </div>
</template>

<script>
export default {
  head(){
    return {
      link: [
        {rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css'},
      ],
      script: [
        {type: 'text/javascript',src: 'https://webforms.pipedrive.com/f/loader'},
      ],
    }
  },
}
</script>

<style>
.no-contact-layout #header::before{
	display:none !important;
}
.no-contact-layout .navbar .bg-secondary{
	background-color: transparent !important;
}
.no-contact-layout #header .nav-link{
	color: var(--main-color) !important;
}
.float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:#25d366;
	color:#FFF;
	border-radius:50px;
	text-align:center;
	font-size:30px;
	box-shadow: 2px 2px 3px #999;
	z-index:100;
	text-decoration: none;
}

.my-float{
	margin-top:16px;
}
</style> 