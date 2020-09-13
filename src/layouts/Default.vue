<template>
  <div id="default-layout">
    <header>
      <h1>Layout padrão</h1>
    </header>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss"></style>
