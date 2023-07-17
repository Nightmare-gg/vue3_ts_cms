<template>
  <div class="list">
    <page-content :content-config="contentConfig" />
  </div>
</template>

<script setup lang="ts">
import pageContent from '@/components/page-content/page-content.vue'

import contentConfig from './config/content.config'
</script>

<style scoped>
.list {
}
</style>
