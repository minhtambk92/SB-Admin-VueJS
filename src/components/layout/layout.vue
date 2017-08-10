<template>
 <div>
   <navigation-bar></navigation-bar>

   <!-- Page Content -->
   <div id="page-wrapper">
     <router-view></router-view>
   </div>
   <!-- /#page-wrapper -->
 </div>

</template>

<script>
  import navigation from './partials/navigation.vue'

  export default {
    name: 'layout',
    components: {
      'navigationBar': navigation
    }
  }
</script>
