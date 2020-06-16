<template>
  <div>
    <p>单选：</p>
    <er-collapse :selected.sync="selectedCollapses">
      <er-collapse-item title="标题1">内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1</er-collapse-item>
      <er-collapse-item title="标题2">内容2内容2内容2</er-collapse-item>
      <er-collapse-item title="标题3">
        内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3
      </er-collapse-item>
    </er-collapse>
    <p>选中的内容是：{{selectedCollapses}}</p>
    <p>代码：</p>
    <pre><code>{{singleCode}}</code></pre>

    <p>多选：</p>
    <er-collapse :selected.sync="selectedCollapsesMultiple" multiple>
      <er-collapse-item title="标题1">内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1</er-collapse-item>
      <er-collapse-item title="标题2">内容2内容2内容2</er-collapse-item>
      <er-collapse-item title="标题3">
        内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3
      </er-collapse-item>
    </er-collapse>
    <p>选中的内容是：{{selectedCollapsesMultiple}}</p>
    <p>代码：</p>
    <pre><code>{{multipleCode}}</code></pre>
  </div>
</template>
<script>
  import Collapse from '../../../src/components/collapse/collapse';
  import CollapseItem from '../../../src/components/collapse/collapse-item';

  export default {
    components: {
      'er-collapse': Collapse,
      'er-collapse-item': CollapseItem
    },
    data() {
      return {
        selectedCollapses: ['标题2'],
        selectedCollapsesMultiple: ['标题2'],
        singleCode: `
          <er-collapse :selected.sync="selectedCollapses">
            <er-collapse-item title="标题1">内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1</er-collapse-item>
            <er-collapse-item title="标题2">内容2内容2内容2</er-collapse-item>
            <er-collapse-item title="标题3">
              内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3
            </er-collapse-item>
          </er-collapse>`.replace(/ {8}/g, '').trim(),
        multipleCode: `
          <er-collapse :selected.sync="selectedCollapsesMultiple" multiple>
            <er-collapse-item title="标题1">内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1</er-collapse-item>
            <er-collapse-item title="标题2">内容2内容2内容2</er-collapse-item>
            <er-collapse-item title="标题3">
              内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3
            </er-collapse-item>
          </er-collapse>`.replace(/ {8}/g, '').trim()
      }
    }
  }
</script>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>