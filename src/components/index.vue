<template>
  <div id="components-layout-demo-top-side">
    <v-layout style="height: 100vh">
      <v-header>
        <div class="logo"></div>
        <v-menu theme="dark" mode="horizontal" :style="{lineHeight: '64px'}"></v-menu>
      </v-header>
      <v-content :style="{ padding: '50px', height:'100%' }">
        <v-layout style="background: #fff; padding: 24px 0;height: calc(100% - 50px)">
          <v-sider :width="200" style="background: #fff">
            <v-menu mode="inline" :data="menuData"></v-menu>
          </v-sider>
          <v-content :style="{ padding: '0 24px', minHeight: 280 }">Content</v-content>
        </v-layout>
      </v-content>
      <v-footer :style="{ textAlign: 'center' }">
        FinalWork ©2018 Created by Eggsy
      </v-footer>
    </v-layout>
  </div>
</template>

<script>
  import * as sendmail from '@/assets/sendmail.json';
    export default {
        name: 'index',
      data () {
        return {
          menuData: []
          //   [{
          //   name: Object.keys(cases),
          //   icon: 'appstore',
          //   children: [{
          //     name: 'option9'
          //   }, {
          //     name: 'option10'
          //   }, {
          //     name: 'option11'
          //   }, {
          //     name: 'option12'
          //   }]
          // }]
        }
      },
      created () {
          let casesBF = [];
          casesBF = sendmail;
          let tmpChildren = [];
          casesBF.forEach(e => {
            const tmpKey = Object.keys(e)[0];
            const tmpChildrenValues = Object.values(e)[0];
            tmpChildrenValues.forEach(m => {
              tmpChildren.push({name: m});
            });
            this.menuData.push({name: tmpKey, icon: 'appstore', children: tmpChildren});
            tmpChildren = [];
          });
      }
    }
</script>

<style scoped>
  #components-layout-demo-top-side .logo {
    width: 120px;
    height: 31px;
    background: #333;
    border-radius: 6px;
    margin: 16px 28px 16px 0;
    float: left;
  }
</style>
