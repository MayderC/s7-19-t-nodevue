<script>
export default {
  name: "AppLogo",
};
</script>

<template>
  <div class="h-16 flex items-center z-10">
    <div class="ml-4 flex lg:ml-0 lg:mr-8">
      <router-link to="/">
        <img class="w-14" src="../../assets/img/logo.png" alt="" srcset="" />
      </router-link>
    </div>
  </div>
</template>