<template>
  <div class="layout">
    <Layout>
      <Sider ref="side1" v-model="isCollapsed" hide-trigger collapsible :collapsed-width="78">
        <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
          <MenuItem name="1-1">
            <Icon type="ios-navigate" />
            <span>Option 1</span>
          </MenuItem>
          <MenuItem name="1-2">
            <Icon type="ios-search" />
            <span>Option 2</span>
          </MenuItem>
          <MenuItem name="1-3">
            <Icon type="ios-settings" />
            <span>Option 3</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Icon :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24" @click.native="collapsedSider" />
        </Header>
        <Content :style="{margin: '20px', background: '#fff', minHeight: 'calc(100vh - ( 10px + 24px + 24px + 24px + 22px ))'}">
          Content
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  name: 'LayoutIndex',
  data() {
    return {
      isCollapsed: false,
    }
  },
  computed: {
    rotateIcon() {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : '',
      ]
    },
    menuitemClasses() {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : '',
      ]
    },
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse()
    },
  },
}
</script>
<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>
