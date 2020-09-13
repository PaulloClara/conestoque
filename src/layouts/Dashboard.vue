<template>
  <div id="dashboard-layout">
    <span>dashboard layout</span>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DashboardLayout extends Vue {}
</script>

<style lang="scss"></style>
