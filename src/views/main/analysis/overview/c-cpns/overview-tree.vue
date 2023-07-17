<script setup lang="ts"></script>
<template>
  <div class="tree">
    <div id="write">
      <p>
        <span>vue3_ts_cms</span>
        <span>├── LICENSE</span>
        <span>├── README.md</span>
        <span>├── auto-imports.d.ts</span>
        <span>├── components.d.ts</span>
        <span>├── env.d.ts</span>
        <span>├── index.html</span>
        <span>├── package-lock.json</span>
        <span>├── package.json</span>
        <span>├── public</span>
        <span>│ └── favicon.ico</span>
        <span>├── src</span>
        <span>│ ├── App.vue</span>
        <span>│ ├── assets</span>
        <span>│ │ ├── img</span>
        <span>│ │ │ ├── login-bg.svg</span>
        <span>│ │ │ └── logo.svg</span>
        <span>│ │ ├── index.less</span>
        <span>│ │ ├── reset.css</span>
        <span>│ │ └── reset.less</span>
        <span>│ ├── components</span>
        <span>│ │ ├── MainHeader</span>
        <span>│ │ │ ├── HeaderCrumb</span>
        <span>│ │ │ │ └── HeaderCrumb.vue</span>
        <span>│ │ │ ├── HeaderInfo</span>
        <span>│ │ │ │ └── HeaderInfo.vue</span>
        <span>│ │ │ └── MainHeader.vue</span>
        <span>│ │ ├── MainMenu</span>
        <span>│ │ │ └── MainMenu.vue</span>
        <span>│ │ ├── MainTable</span>
        <span>│ │ │ └── MainTable.vue</span>
        <span>│ │ ├── PageEcharts</span>
        <span>│ │ │ ├── data</span>
        <span>│ │ │ │ ├── china.json</span>
        <span>│ │ │ │ ├── china_geo.json</span>
        <span>│ │ │ │ └── location.json</span>
        <span>│ │ │ ├── echart-src</span>
        <span>│ │ │ │ ├── BarEchart.vue</span>
        <span>│ │ │ │ ├── BaseEchart.vue</span>
        <span>│ │ │ │ ├── LineEchart.vue</span>
        <span>│ │ │ │ ├── MapEchart.vue</span>
        <span>│ │ │ │ ├── PieEchart.vue</span>
        <span>│ │ │ │ └── RoseEchart.vue</span>
        <span>│ │ │ ├── index.ts</span>
        <span>│ │ │ ├── types</span>
        <span>│ │ │ │ └── index.ts</span>
        <span>│ │ │ └── utils</span>
        <span>│ │ │ ├── convert-data.ts</span>
        <span>│ │ │ └── coordinate-data.ts</span>
        <span>│ │ └── PageMain</span>
        <span>│ │ ├── PageContent</span>
        <span>│ │ │ └── PageContent.vue</span>
        <span>│ │ ├── PageModal</span>
        <span>│ │ │ ├── PageModal.vue</span>
        <span>│ │ │ └── type.ts</span>
        <span>│ │ └── PageSearch</span>
        <span>│ │ └── PageSearch.vue</span>
        <span>│ ├── global</span>
        <span>│ │ ├── constance.ts</span>
        <span>│ │ └── register-icons.ts</span>
        <span>│ ├── hooks</span>
        <span>│ │ ├── usePageContent.ts</span>
        <span>│ │ ├── usePageModal.ts</span>
        <span>│ │ └── usePermission.ts</span>
        <span>│ ├── main.ts</span>
        <span>│ ├── router</span>
        <span>│ │ ├── AnalysisMain</span>
        <span>│ │ │ ├── AnalysisOverview</span>
        <span>│ │ │ │ └── AnalysisOverview.ts</span>
        <span>│ │ │ └── AnalysisdDashboard</span>
        <span>│ │ │ └── AnalysisdDashboard.ts</span>
        <span>│ │ ├── ProductCenter</span>
        <span>│ │ │ ├── ProductCategory</span>
        <span>│ │ │ │ └── ProductCategory.ts</span>
        <span>│ │ │ └── ProductGoods</span>
        <span>│ │ │ └── ProductGoods.ts</span>
        <span>│ │ ├── StoryChat</span>
        <span>│ │ │ ├── ChatStory</span>
        <span>│ │ │ │ └── ChatStory.ts</span>
        <span>│ │ │ └── StoryList</span>
        <span>│ │ │ └── StoryList.ts</span>
        <span>│ │ ├── SystemMain</span>
        <span>│ │ │ ├── SystemDepartment</span>
        <span>│ │ │ │ └── SystemDepartment.ts</span>
        <span>│ │ │ ├── SystemMenu</span>
        <span>│ │ │ │ └── SystemMenu.ts</span>
        <span>│ │ │ ├── SystemRole</span>
        <span>│ │ │ │ └── SystemRole.ts</span>
        <span>│ │ │ └── SystemUser</span>
        <span>│ │ │ └── SystemUser.ts</span>
        <span>│ │ └── index.ts</span>
        <span>│ ├── service</span>
        <span>│ │ ├── config</span>
        <span>│ │ │ └── index.ts</span>
        <span>│ │ ├── index.ts</span>
        <span>│ │ ├── modules</span>
        <span>│ │ │ ├── home.ts</span>
        <span>│ │ │ ├── login</span>
        <span>│ │ │ │ └── login.ts</span>
        <span>│ │ │ └── main</span>
        <span>│ │ │ ├── analysis</span>
        <span>│ │ │ │ └── analysis.ts</span>
        <span>│ │ │ ├── main.ts</span>
        <span>│ │ │ └── system</span>
        <span>│ │ │ └── index.ts</span>
        <span>│ │ └── request</span>
        <span>│ │ ├── index.ts</span>
        <span>│ │ └── type.ts</span>
        <span>│ ├── store</span>
        <span>│ │ ├── index.ts</span>
        <span>│ │ ├── login</span>
        <span>│ │ │ └── login.ts</span>
        <span>│ │ └── main</span>
        <span>│ │ ├── analysis</span>
        <span>│ │ │ └── analysis.ts</span>
        <span>│ │ ├── main.ts</span>
        <span>│ │ └── system</span>
        <span>│ │ ├── system.ts</span>
        <span>│ │ └── type.ts</span>
        <span>│ ├── types</span>
        <span>│ │ ├── index.ts</span>
        <span>│ │ └── login.ts</span>
        <span>│ ├── utils</span>
        <span>│ │ ├── cache.ts</span>
        <span>│ │ ├── format.ts</span>
        <span>│ │ └── map-menus.ts</span>
        <span>│ ├── views</span>
        <span>│ │ ├── AnalysisMain</span>
        <span>│ │ │ ├── AnalysisOverview</span>
        <span>│ │ │ │ ├── AnalysisOverview.vue</span>
        <span>│ │ │ │ └── OverviewCpn</span>
        <span>│ │ │ │ └── OverviewCard.vue</span>
        <span>│ │ │ └── AnalysisdDashboard</span>
        <span>│ │ │ ├── AnalysisdDashboard.vue</span>
        <span>│ │ │ └── DashCpns</span>
        <span>│ │ │ ├── CountCard</span>
        <span>│ │ │ │ └── CountCard.vue</span>
        <span>│ │ │ └── EchartCard</span>
        <span>│ │ │ └── EchartCard.vue</span>
        <span>│ │ ├── LoginAdmin</span>
        <span>│ │ │ ├── LoginAccount.vue</span>
        <span>│ │ │ ├── LoginAdmin.vue</span>
        <span>│ │ │ └── LoginPhone.vue</span>
        <span>│ │ ├── NotFound</span>
        <span>│ │ │ └── NotFound.vue</span>
        <span>│ │ ├── ProductCenter</span>
        <span>│ │ │ ├── ProductCategory</span>
        <span>│ │ │ │ ├── ProductCategory.vue</span>
        <span>│ │ │ │ └── config</span>
        <span>│ │ │ │ ├── content.config.ts</span>
        <span>│ │ │ │ ├── modal.config.ts</span>
        <span>│ │ │ │ └── search.config.ts</span>
        <span>│ │ │ └── ProductGoods</span>
        <span>│ │ │ ├── ProductGoods.vue</span>
        <span>│ │ │ └── config</span>
        <span>│ │ │ ├── content.config.ts</span>
        <span>│ │ │ ├── modal.config.ts</span>
        <span>│ │ │ └── search.config.ts</span>
        <span>│ │ ├── StoryChat</span>
        <span>│ │ │ ├── ChatStory</span>
        <span>│ │ │ │ └── ChatStory.vue</span>
        <span>│ │ │ └── StoryList</span>
        <span>│ │ │ ├── StoryList.vue</span>
        <span>│ │ │ └── config</span>
        <span>│ │ │ └── content.config.ts</span>
        <span>│ │ └── SystemMain</span>
        <span>│ │ ├── SystemDepartment</span>
        <span>│ │ │ ├── SystemDepartment.vue</span>
        <span>│ │ │ └── config</span>
        <span>│ │ │ ├── content.config.ts</span>
        <span>│ │ │ ├── modal.config.ts</span>
        <span>│ │ │ └── search.config.ts</span>
        <span>│ │ ├── SystemMain.vue</span>
        <span>│ │ ├── SystemMenu</span>
        <span>│ │ │ ├── SystemMenu.vue</span>
        <span>│ │ │ └── config</span>
        <span>│ │ │ └── content.config.ts</span>
        <span>│ │ ├── SystemRole</span>
        <span>│ │ │ ├── SystemRole.vue</span>
        <span>│ │ │ └── config</span>
        <span>│ │ │ ├── content.config.ts</span>
        <span>│ │ │ ├── modal.config.ts</span>
        <span>│ │ │ └── search.config.ts</span>
        <span>│ │ └── SystemUser</span>
        <span>│ │ ├── SystemUser.vue</span>
        <span>│ │ ├── UserCpns</span>
        <span>│ │ │ ├── UserContent.vue</span>
        <span>│ │ │ ├── UserModal.vue</span>
        <span>│ │ │ └── UserSearch.vue</span>
        <span>│ │ └── config</span>
        <span>│ │ ├── content.config.ts</span>
        <span>│ │ ├── modal.config.ts</span>
        <span>│ │ └── search.config.ts</span>
        <span>│ └── vite-env.d.ts</span>
        <span>├── tsconfig.app.json</span>
        <span>├── tsconfig.json</span>
        <span>├── tsconfig.node.json</span>
        <span>└── vite.config.ts</span>
      </p>
    </div>
  </div>
</template>
<style scoped lang="less">
.tree {
  #write {
    margin: 0px auto;
    height: auto;
    width: inherit;
    word-break: normal;
    word-wrap: break-word;
    position: relative;
    white-space: normal;
    overflow-x: visible;
    padding: 10px 20px;

    p {
      span {
        display: block;
        font-weight: 400;
        font-size: 14px;
        color: var(--text-color);
        line-height: 1.5rem;
      }
    }
  }

  #write {
    background: #fcfcfc;
    font-family: 'TeXGyreAdventor', 'Century Gothic', 'Didact Gothic',
      'Yu Gothic', sans-serif;
    font-weight: 300;
  }
}
</style>
