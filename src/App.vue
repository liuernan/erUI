<template>
  <div id="app">
    <div style="padding: 20px;border: 1px solid red;">
      <p>上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文</p>
      <er-cascader :source="sourceSync" :load-data="loadCascaderData" panel-height="200" @change="onChange">
      </er-cascader>
      <p>上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文</p>
    </div>
    <div style="padding: 20px;border: 1px solid red;">
      <p>{{cascaderResult}}</p>
      <p>上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文</p>
      <er-cascader :source="source" panel-height="200" @change="onChange">
      </er-cascader>
      <p>上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文上下文</p>
    </div>

    <div style="padding: 20px">
      <er-collapse :selected.sync="selectedCollapses" @update:selected="selecteCollapse" multiple>
        <er-collapse-item title="标题1">内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1</er-collapse-item>
        <er-collapse-item title="标题2">内容2内容2内容2</er-collapse-item>
        <er-collapse-item title="标题3">
          内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3
        </er-collapse-item>
      </er-collapse>
    </div>
    选中的内容是：{{selectedCollapses}}
    <div style="padding: 20px">
      <er-collapse :selected.sync="selectedCollapses">
        <er-collapse-item title="标题1">内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1</er-collapse-item>
        <er-collapse-item title="标题2">内容2内容2内容2</er-collapse-item>
        <er-collapse-item title="标题3">
          内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3
        </er-collapse-item>
      </er-collapse>
    </div>
    <div style="padding: 300px;border: 1px solid red; overflow: hidden">
      <er-popover>
        <template slot="popover-content" slot-scope="{close}">
          <div>我是 popover 的内容</div>
          <er-button icon="settings" @click="close">关闭</er-button>
        </template>
        <er-button>点我上面出现 popover</er-button>
      </er-popover>
      <er-popover position="bottom">
        <template slot="popover-content">
          <div>我是 popover 的内容</div>
        </template>
        <er-button>点我出现 popover</er-button>
      </er-popover>
      <er-popover position="left">
        <template slot="popover-content">
          <div>
            左边出现的内容左边出现的左边出现的内容左边出现的左边出现的内容左边出现的左边出现的内容左边出现的左边出现的内容左边出现的左边出现的内容左边出现的左边出现的内容左边出现的左边出现的内容左边出现的左边出现的内容左边出现的
          </div>
        </template>
        <er-button>点我出现 popover</er-button>
      </er-popover>
      <er-popover position="right">
        <template slot="popover-content">
          <div>我是 popover 的内容</div>
        </template>
        <er-button>点我出现 popover</er-button>
      </er-popover>
    </div>
    <div style="border: 1px solid red; overflow: hidden;width: 800px;height: 800px">
      <er-popover trigger="hover">
        <template slot="popover-content">
          <div>我是 popover 的内容我是 popover 的内容我是 popover 的内容我是 popover 的内容我是 popover 的内容我是 popover 的内容我是 popover 的内容我是
            popover 的内容我是 popover 的内容我是 popover 的内容我是 popover 的内容
          </div>
        </template>
        <er-button>hover 我出现 popover</er-button>
      </er-popover>
      <er-popover trigger="hover" position="bottom">
        <template slot="popover-content">
          <div>
            popoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopover
          </div>
        </template>
        <er-button>hover 我出现 popover</er-button>
      </er-popover>
      <er-popover trigger="hover" position="left">
        <template slot="popover-content">
          <div>我是 popover 的内容我是 popover 的内容我是 popover 的内容我是 popover 的内容我是 popover 的内容我是 popover 的内容我是 popover 的内容我是
            popover 的内容我是 popover 的内容
          </div>
        </template>
        <er-button>hover 我出现 popover</er-button>
      </er-popover>
      <er-popover trigger="hover" position="right">
        <template slot="popover-content">
          <div>我是 popover 的内容</div>
        </template>
        <er-button>hover 我出现 popover</er-button>
      </er-popover>
    </div>
    <div class="buxiangqimingzi">
      <er-tabs :selected.sync="selectedTab" direction="horizontal">
        <er-tabs-nav>
          <template slot="er-nav-button">
            <er-button icon="settings">操作按钮</er-button>
          </template>
          <er-tabs-item class="item-test" name="women">美女</er-tabs-item>
          <er-tabs-item class="item-test" name="live">直播</er-tabs-item>
          <er-tabs-item class="item-test" name="videos" disabled>小电影</er-tabs-item>
        </er-tabs-nav>
        <er-tabs-content>
          <er-tabs-panel class="panel-test" name="women">美女的区域美女的区域美女的区域美女的区域美女的区域美女的区域</er-tabs-panel>
          <er-tabs-panel class="panel-test" name="live">直播的区域直播的区域直播的区域直播的区域直播的区域直播的区域直播的区域</er-tabs-panel>
          <er-tabs-panel class="panel-test" name="videos">全是小电影全是小电影全是小电影全是小电影全是小电影全是小电影全是小电影全是小电影全是小电影</er-tabs-panel>
        </er-tabs-content>
      </er-tabs>
    </div>
    <div>
      <er-button icon="settings" @click="testToastTop">点我从上面触发 toast</er-button>
      <er-button icon="settings" @click="testToastMiddle">点我从中间触发 toast</er-button>
      <er-button icon="settings" @click="testToastBottom">点我从下面触发 toast</er-button>
    </div>
    <div>
      <er-layout>
        <er-sider class="sider">sider</er-sider>
        <er-layout>
          <er-header class="header">header</er-header>
          <er-content class="content">content</er-content>
          <er-footer class="footer">footer</er-footer>
        </er-layout>
      </er-layout>
      <er-layout>
        <er-header class="header">header</er-header>
        <er-layout>
          <er-content class="content">content</er-content>
          <er-sider class="sider">sider</er-sider>
        </er-layout>
        <er-footer class="footer">footer</er-footer>
      </er-layout>
      <er-layout>
        <er-header class="header">header</er-header>
        <er-layout>
          <er-sider class="sider">sider</er-sider>
          <er-content class="content">content</er-content>
        </er-layout>
        <er-footer class="footer">footer</er-footer>
      </er-layout>
      <er-layout class="layout">
        <er-header class="header">header</er-header>
        <er-content class="content">content</er-content>
        <er-footer class="footer">footer</er-footer>
      </er-layout>
    </div>
    <div class="buxiangqimingzi">
      <er-row>
        <er-col class="reactive"
                :span="2"
                :ipad="{span: 8}"
                :narrow-pc="{span: 12}"
                :pc="{span: 16}"
                :wide-pc="{span: 20}"
        ></er-col>
        <er-col class="reactive"
                :span="22"
                :ipad="{span: 16}"
                :narrow-pc="{span: 12}"
                :pc="{span: 8}"
                :wide-pc="{span: 4}"
        ></er-col>
      </er-row>
    </div>
    <div class="buxiangqimingzi">
      <er-row>
        <er-col :span="6">
          <er-row :align="`center`">
            <er-col>1</er-col>
            <er-col>2</er-col>
          </er-row>
        </er-col>
        <er-col :span="18">
          <er-row :align="`right`">
            <er-col>1</er-col>
            <er-col>2</er-col>
            <er-col>3</er-col>
            <er-col>4</er-col>
            <er-col>5</er-col>
            <er-col>6</er-col>
            <er-col>7</er-col>
            <er-col>8</er-col>
          </er-row>
        </er-col>
      </er-row>
    </div>
    <div class="buxiangqimingzi">
      <er-row :gutter="20">
        <er-col span="2">2</er-col>
        <er-col :span="20" :offset="2">22</er-col>
      </er-row>
      <er-row>
        <er-col span="4">4</er-col>
        <er-col :span="20">20</er-col>
      </er-row>
      <er-row :gutter="20">
        <er-col :span="8">8</er-col>
        <er-col :span="2">2</er-col>
        <er-col :span="12" :offset="2">12</er-col>
      </er-row>
      <er-row :gutter="20">
        <er-col :span="4">4</er-col>
        <er-col :span="6" :offset="2">6</er-col>
        <er-col :span="10" :offset="2">10</er-col>
      </er-row>
      <er-row :gutter="20">
        <er-col :span="4">4</er-col>
        <er-col :span="4" :offset="1">4</er-col>
        <er-col :span="4" :offset="1">4</er-col>
        <er-col :span="4" :offset="1">4</er-col>
        <er-col :span="4" :offset="1">4</er-col>
      </er-row>
      <er-row :gutter="20">
        <er-col :span="4">1</er-col>
        <er-col :span="4">2</er-col>
        <er-col :span="4">3</er-col>
        <er-col :span="4">4</er-col>
        <er-col :span="4">5</er-col>
        <er-col :span="4">6</er-col>
      </er-row>
    </div>
    <div class="buxiangqimingzi">
      <er-button icon="upload" :loading=loading1 @click="loading1 = !loading1">上传</er-button>
      <er-button icon="download" icon-position="right" :loading=loading2 @click="loading2 = !loading2">下载</er-button>
    </div>
    <div class="buxiangqimingzi">
      <er-button icon="left" icon-position="left">上一步</er-button>
      <er-button icon="right" icon-position="right">下一步</er-button>
    </div>
    <div class="buxiangqimingzi">
      <er-button icon="settings">设置</er-button>
      <er-button icon="left" icon-position="left">上一步</er-button>
      <er-button icon="right" icon-position="right">下一步</er-button>
    </div>
    <div class="buxiangqimingzi">
      <er-button-group>
        <er-button icon="left" icon-position="left">上一步</er-button>
        <er-button icon="right" icon-position="right">下一步</er-button>
      </er-button-group>
      <er-button-group>
        <er-button icon="left" icon-position="left">上一步</er-button>
        <er-button>更多</er-button>
        <er-button icon="right" icon-position="right">下一步</er-button>
      </er-button-group>
    </div>
    <div class="buxiangqimingzi">
      <input type="text">
      <input :value="message" @input="message = $event.target.value"></input>
      <er-input v-model="message"></er-input>
      <p>{{ message }}</p>
      <er-input value="我被 disabled" disabled></er-input>
      <er-input value="我被 readonly" readonly></er-input>
    </div>
    <div class="buxiangqimingzi">
      <er-input value="我被 error" error="你怎么可能有错"></er-input>
      <er-input value="我被 tips" tips="我就是想提示你点什么"></er-input>
      <er-input value="我被 tips" tips="我就是想提示你点什么"></er-input>
    </div>
  </div>
</template>

<script>
  // cascader test data  --start
  import cascaderData from './assets/chinese-regions';
  const ajax = ({id = 0}, callback) => {
    setTimeout(() => {
      let children = [];
      children = cascaderData.filter((item) => {
        return item.parent_id === id
      });
      children.forEach((item)=>{
        item.children = [];
        let innerChildren = cascaderData.filter((innerItem)=>{return innerItem.parent_id === item.id});
        item.isLeaf = !innerChildren.length;
      });
      callback(children)
    }, 1000)
  };
  // cascader test data --end

  export default {
    name: 'App',
    components: {},
    data() {
      return {
        loading1: true,
        loading2: false,
        message: '支持双向绑定',
        selectedTab: 'live',
        selectedCollapses: ['标题2'],
        source: [{
          value: 'zhejiang',
          label: '浙江',
          children: [
            {
              value: 'hangzhou',
              label: '杭州',
              children: [
                {
                  value: 'shangcheng',
                  label: '上城'
                },
                {
                  value: 'xiacheng',
                  label: '下城'
                },
                {
                  value: 'jianggan',
                  label: '江干'
                },
              ]
            },
            {
              value: 'jiaxing',
              label: '嘉兴',
              children: [
                {
                  value: 'nanhu',
                  label: '南湖'
                },
                {
                  value: 'xiuzhou',
                  label: '秀洲'
                },
                {
                  value: 'jiashan',
                  label: '嘉善'
                },
              ]
            },
          ]
        }, {
          value: 'fujian',
          label: '福建',
          children: [
            {
              value: 'fuzhou',
              label: '福州',
              children: [
                {
                  value: 'gulou',
                  label: '鼓楼'
                },
                {
                  value: 'taijiang',
                  label: '台江'
                },
                {
                  value: 'cangshan',
                  label: '仓山'
                },
              ]
            },
          ]
        }],
        sourceSync: [{
          value: 'init',
          label: '初始化先传一个',
          isLeaf: false,
          children: []
        }],
        cascaderResult: []
      }
    },
    methods: {
      testToastTop() {
        this.testToast('top');
      },
      testToastMiddle() {
        this.testToast('middle');
      },
      testToastBottom() {
        this.testToast('bottom');
      },
      testToast(position) {
        this.$toast('我是一个 toast', {
          autoClose: 50,
          position: position,
          closeButton: {
            text: '关闭',
            callback: () => {
              console.log('用户的 callback 触发了');
            }
          }
        })
      },
      selecteCollapse(arr, vm) {
        // console.log(arr);
        // console.log(vm);
        // console.log('chufale');
      },
      onChange(value) {
        this.cascaderResult = value;
      },
      loadCascaderData(selecetdItems, callback) {
        const selectedItem = selecetdItems[selecetdItems.length - 1];
        selectedItem.loading = true;
        ajax(selectedItem, (children) => {
          selectedItem.children = children;
          selectedItem.loading = false;
        });
        // setTimeout(() => {
        //   selectedItem.children = [
        //     {
        //       value: 'sync1',
        //       label: '动态1',
        //       isLeaf: false,
        //       children: []
        //     },
        //     {
        //       value: 'sync2',
        //       label: '动态2',
        //       isLeaf: true
        //     }
        //   ];
        //   // this.sourceSync = [...this.sourceSync];
        // }, 1000);
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .buxiangqimingzi {
    margin: 20px;
  }

  /* box-sizing: border-box; IE 8 以上兼容 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .reactive {
    height: 100px;
    background-color: pink;
    border: 1px dotted grey;
  }

  .layout {
    height: 100vh;
    background-color: lightgreen;
  }

  .header {
    height: 100px;
    background-color: deepskyblue;
  }

  .sider {
    width: 100px;
    background-color: lightskyblue;
  }

  .content {
    background-color: pink;
  }

  .footer {
    height: 100px;
    background-color: skyblue;
  }
</style>
