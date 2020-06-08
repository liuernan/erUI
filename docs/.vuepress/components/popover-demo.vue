<template>
  <div>
    <p>click 触发：</p>
    <div style="display: block; text-align:center;">
      <er-popover>
        <template slot="popover-content" slot-scope="{close}">
          <div>我是 popover 的内容</div>
          <er-button icon="settings" @click="close">关闭</er-button>
        </template>
        <er-button>点我上面出现 popover</er-button>
      </er-popover>
      <span style="display: block; height: 20px;"></span>

      <er-popover position="bottom">
        <template slot="popover-content">
          <div>我是 popover 的内容</div>
        </template>
        <er-button>点我下面出现 popover</er-button>
      </er-popover>
      <span style="display: block; height: 20px;"></span>

      <er-popover position="left">
        <template slot="popover-content">
          <div>
            左边出现的内容左边出现的左边出现的内容左边出现的左边出现的内容左边出现的左边出现的内容左边出现的左边出现的内容左边出现的左边出现的内容左边出现的左边出现的内容左边出现的左边出现的内容左边出现的左边出现的内容左边出现的
          </div>
        </template>
        <er-button>点我左边出现 popover</er-button>
      </er-popover>
      <span style="display: block; height: 20px;"></span>

      <er-popover position="right">
        <template slot="popover-content">
          <div>我是 popover 的内容</div>
        </template>
        <er-button>点我右边出现 popover</er-button>
      </er-popover>
    </div>

    <p>代码：</p>
    <pre><code>{{clickCode}}</code></pre>

    <p>hover 触发：</p>
    <div style="display: block; text-align:center;">
      <er-popover trigger="hover">
        <template slot="popover-content">
          <div>我是 popover 的内容我是 popover 的内容我是 popover 的内容我是 popover 的内容我是 popover 的内容我是 popover 的内容我是 popover 的内容我是
            popover 的内容我是 popover 的内容我是 popover 的内容我是 popover 的内容
          </div>
        </template>
        <er-button>hover 我上面出现 popover</er-button>
      </er-popover>
      <span style="display: block; height: 20px;"></span>

      <er-popover trigger="hover" position="bottom">
        <template slot="popover-content">
          <div>
            popoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopover
          </div>
        </template>
        <er-button>hover 我下面出现 popover</er-button>
      </er-popover>
      <span style="display: block; height: 20px;"></span>

      <er-popover trigger="hover" position="left">
        <template slot="popover-content">
          <div>我是 popover 的内容我是 popover 的内容我是 popover 的内容我是 popover 的内容我是 popover 的内容我是 popover 的内容我是 popover 的内容我是
            popover 的内容我是 popover 的内容
          </div>
        </template>
        <er-button>hover 我左边出现 popover</er-button>
      </er-popover>
      <span style="display: block; height: 20px;"></span>

      <er-popover trigger="hover" position="right">
        <template slot="popover-content">
          <div>我是 popover 的内容</div>
        </template>
        <er-button>hover 我右边出现 popover</er-button>
      </er-popover>
    </div>
    <p>代码：</p>
    <pre><code>{{hoverCode}}</code></pre>
  </div>
</template>
<script>
  import Popover from '../../../src/components/popover';
  import Button from '../../../src/components/button';

  export default {
    components: {
      'er-popover': Popover,
      'er-button': Button
    },
    data() {
      return {
        clickCode: `
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
            <er-button>点我下面出现 popover</er-button>
          </er-popover>
          <er-popover position="left">
            <template slot="popover-content">
              <div>
                左边出现的内容左边出现的左边出现的内容左边出现的左边出现的内容左边出现的左边出现的内容左边出现的左边出现的内容左边出现的左边出现的内容左边出现的左边出现的内容左边出现的左边出现的内容左边出现的左边出现的内容左边出现的
              </div>
            </template>
            <er-button>点我左边出现 popover</er-button>
          </er-popover>
          <er-popover position="right">
            <template slot="popover-content">
              <div>我是 popover 的内容</div>
            </template>
            <er-button>点我右边出现 popover</er-button>
          </er-popover>`.replace(/ {8}/g, '').trim(),
        hoverCode: `
          <er-popover trigger="hover">
            <template slot="popover-content">
              <div>我是 popover 的内容我是 popover 的内容我是 popover 的内容我是 popover 的内容我是 popover 的内容我是 popover 的内容我是 popover 的内容我是
                popover 的内容我是 popover 的内容我是 popover 的内容我是 popover 的内容
              </div>
            </template>
            <er-button>hover 我上面出现 popover</er-button>
          </er-popover>
          <er-popover trigger="hover" position="bottom">
            <template slot="popover-content">
              <div>
                popoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopoverpopover
              </div>
            </template>
            <er-button>hover 我下面出现 popover</er-button>
          </er-popover>
          <er-popover trigger="hover" position="left">
            <template slot="popover-content">
              <div>我是 popover 的内容我是 popover 的内容我是 popover 的内容我是 popover 的内容我是 popover 的内容我是 popover 的内容我是 popover 的内容我是
                popover 的内容我是 popover 的内容
              </div>
            </template>
            <er-button>hover 我左边出现 popover</er-button>
          </er-popover>
          <er-popover trigger="hover" position="right">
            <template slot="popover-content">
              <div>我是 popover 的内容</div>
            </template>
            <er-button>hover 我右边出现 popover</er-button>
          </er-popover>`.replace(/ {8}/g, '').trim()
      }
    }
  }
</script>

<style>
  .wrapper-toast {
    z-index: 30 !important;
  }
</style>

<style scoped>
  * {
    box-sizing: border-box;
  }
</style>