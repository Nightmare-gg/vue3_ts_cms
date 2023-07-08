import type { RouteRecordRaw } from 'vue-router'

function loadLocalRoutes() {
  // 1.动态获取所有的路由对象, 放到数组中
  // * 路由对象都在独立的文件中
  // * 从文件中将所有路由对象先读取数组中
  const localRoutes: RouteRecordRaw[] = []

  // 1.1.读取router/main所有的ts文件
  const files: Record<string, any> = import.meta.glob(
    '../router/main/**/*.ts',
    {
      eager: true
    }
  )
  // 1.2.将加载的对象放到localRoutes
  for (const key in files) {
    const module = files[key]
    localRoutes.push(module.default)
  }

  return localRoutes
}

export let firstMenu: any = null

export function mapMenusToRoutes(userMenus: any[]) {
  // 1.加载本地路由
  const localRoutes = loadLocalRoutes()

  // 2.根据菜单去匹配正确的路由
  const routes: RouteRecordRaw[] = []
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      const route = localRoutes.find((item) => item.path === submenu.url)
      if (route) {
        // 给route的顶层菜单增加重定向功能（但只需要添加一次即可)
        if (!routes.find((item) => item.path === menu.url)) {
          routes.push({ path: menu.url, redirect: route.path })
        }

        // 二级菜单
        routes.push(route)
      }

      // 记录第一个被匹配到的菜单
      if (!firstMenu && route) firstMenu = submenu
    }
  }
  return routes
}

export function mapPathToMenu(path: string, userMenus: any[]) {
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        return submenu
      }
    }
  }
}

interface IBreadCrumbs {
  name: string
  path: string
}

export function mapPathToBreadCrumbs(path: string, userMenus: any[]) {
  // 定义面包屑
  const breadCrumbs: IBreadCrumbs[] = []
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        // 顶层菜单
        breadCrumbs.push({ name: menu.name, path: menu.url })
        // 匹配菜单
        breadCrumbs.push({ name: submenu.name, path: submenu.url })
      }
    }
  }
  return breadCrumbs
}