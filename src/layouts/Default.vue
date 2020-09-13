<template>
  <div id="default-layout">
    <span>default layout</span>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss"></style>
