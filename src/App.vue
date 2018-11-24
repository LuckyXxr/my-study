<template lang="jade">
  div(id="app")
    div(id="nav")
      router-link(to="/") Home |
      router-link(to="/about") About
    router-view

</template>

<style>
  @import "assets/styles/app.css";
</style>
