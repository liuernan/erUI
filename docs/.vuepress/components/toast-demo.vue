<template>
  <div>
    <p>用法：</p>
    <er-button icon="settings" @click="testToastTop">点我从上面触发 toast</er-button>
    <er-button icon="settings" @click="testToastMiddle">点我从中间触发 toast</er-button>
    <er-button icon="settings" @click="testToastBottom">点我从下面触发 toast</er-button>
    <p>代码：</p>
    <pre><code>{{selectedCode}}</code></pre>
  </div>
</template>
<script>
  import Button from '../../../src/components/button';
  import Plugin from '../../../src/components/plugin';
  import Vue from 'vue';

  Vue.use(Plugin);

  export default {
    components: {
      'er-button': Button
    },
    data() {
      return {
        selectedCode: `
          // HTML
          <er-button icon="settings" @click="testToastTop">点我从上面触发 toast</er-button>
          <er-button icon="settings" @click="testToastMiddle">点我从中间触发 toast</er-button>
          <er-button icon="settings" @click="testToastBottom">点我从下面触发 toast</er-button>

          // CSS
          .wrapper-toast {
            z-index: 30 !important;
          }

          // JS
          import Plugin from '../../../src/components/plugin';
          Vue.use(Plugin);
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
            }
          }`.replace(/ {8}/g, '').trim()
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
          autoClose: 3,
          position: position,
          closeButton: {
            text: '关闭',
            callback: () => {
              console.log('用户的 callback 触发了');
            }
          }
        })
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