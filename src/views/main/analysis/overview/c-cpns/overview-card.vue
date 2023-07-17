<template>
  <div class="overview-card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <h3>{{ title }}</h3>
        </div>
      </template>
      <slot name="content">content</slot>
    </el-card>
  </div>
</template>

<script setup lang="ts">
interface IProp {
  title: string
}

defineProps<IProp>()
</script>

<style lang="less" scoped></style>
