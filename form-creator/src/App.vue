<template>
  <div>
    <!-- Header -->
    <HeaderMyApp></HeaderMyApp>

    <!-- Body-->
    <MainBody></MainBody>

    <!-- Footer -->
     <FooterMyApp></FooterMyApp>

  </div>

</template>

<script>
import HeaderMyApp from './components/HeaderMyApp';
import MainBody from './components/MainBody';
import FooterMyApp from './components/FooterMyApp';
export default {
  name: "App",
  components: {
    HeaderMyApp,
    MainBody,
    FooterMyApp
  }
};
</script>

<style>

</style>
