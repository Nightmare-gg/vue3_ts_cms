<template>
  <div class="chart-card">
    <el-card :header="header" class="box-card">
      <slot>默认内容</slot>
    </el-card>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  header?: string
}

withDefaults(defineProps<IProps>(), {
  header: '卡片的头部标题'
})
</script>

<style lang="less" scoped></style>
