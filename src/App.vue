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
      children.forEach((item) => {
        item.children = [];
        let innerChildren = cascaderData.filter((innerItem) => {
          return innerItem.parent_id === item.id
        });
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

</style>
