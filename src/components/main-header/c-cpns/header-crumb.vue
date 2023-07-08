<template>
  <div class="crumb">
    <el-breadcrumb separator-icon="ArrowRight">
      <template v-for="(item, index) in breadCrumbs" :key="index">
        <el-breadcrumb-item :to="item.path">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { mapPathToBreadCrumbs } from '@/utils/map-menus'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import useLoginStore from '@/store/login/login'

const route = useRoute()
const userMenus = useLoginStore().userMenus
const breadCrumbs = computed(() => mapPathToBreadCrumbs(route.path, userMenus))
</script>

<style lang="less" scoped></style>
