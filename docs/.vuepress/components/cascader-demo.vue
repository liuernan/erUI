<template>
  <div>
    <p>静态传入数据：</p>
    <er-cascader :source="source" panel-height="200" @change="staticOnChange">
    </er-cascader>
    <p>选择的结果是：{{staticCascaderResult}}</p>
    <p>代码：</p>
    <pre style="height: 500px;"><code>{{staticCode}}</code></pre>

    <p>动态传入数据：</p>
    <er-cascader :source="sourceSync" :load-data="loadCascaderData" panel-height="200" @change="syncOnChange">
    </er-cascader>
    <p>选择的结果是：{{syncCascaderResult}}</p>
    <p>代码：</p>
    <pre style="height: 500px;"><code>{{syncCode}}</code></pre>
  </div>
</template>
<script>
  import Cascader from '../../../src/components/cascader/cascader';

  // cascader test data  --start
  import cascaderData from '../../../src/assets/chinese-regions';

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
    components: {
      'er-cascader': Cascader
    },
    data() {
      return {
        staticCascaderResult: [],
        syncCascaderResult: [],
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
        staticCode: `// HTML
<er-cascader :source="source" panel-height="200" @change="staticOnChange">
</er-cascader>
// JS
data() {
  return {
    staticCascaderResult: [],
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
    }]
  }
},
methods: {
  staticOnChange(value) {
    this.staticCascaderResult = value;
  }
}`, // .replace(/ {8}/g, '').trim()
        syncCode: `// HTML
<er-cascader :source="sourceSync" :load-data="loadCascaderData" panel-height="200" @change="syncOnChange">
</er-cascader>
// JS
data() {
  return {
    syncCascaderResult: [],
    sourceSync: [{
      value: 'init',
      label: '初始化先传一个',
      isLeaf: false,
      children: []
    }]
  }
}
// cascader test data  --start
import cascaderData from '../../../src/assets/chinese-regions';

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
methods: {
  syncOnChange(value) {
    this.syncCascaderResult = value;
  },
  loadCascaderData(selecetdItems, callback) {
    const selectedItem = selecetdItems[selecetdItems.length - 1];
    selectedItem.loading = true;
    ajax(selectedItem, (children) => {
      selectedItem.children = children;
      selectedItem.loading = false;
    });
  }
}` // .replace(/ {8}/g, '').trim()
      }
    },
    methods: {
      staticOnChange(value) {
        this.staticCascaderResult = value;
      },
      syncOnChange(value) {
        this.syncCascaderResult = value;
      },
      loadCascaderData(selecetdItems, callback) {
        const selectedItem = selecetdItems[selecetdItems.length - 1];
        selectedItem.loading = true;
        ajax(selectedItem, (children) => {
          selectedItem.children = children;
          selectedItem.loading = false;
        });
      }
    }
  }
</script>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>