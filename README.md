# er-ui-demo

[![Build Status](https://travis-ci.com/liuernan/erUI.svg?branch=master)](https://travis-ci.com/liuernan/erUI)

## 介绍

  这是一个基于 Vue 的 UI 框架，我拿来练手的，现在刚起步还非常非常的挫。^_^

## 使用指南

  * 很挫的第一步：使用本框架前，请先在你的项目中添加下面的 CSS
  
  ```CSS
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ```

  以上 CSS 语法 IE 8 以上支持
  
  * 安装（此时我已经假定你的项目是通过 Vue-Cli 来创建的，如果不是，那么不保证我的框架你可以安装成功）
  ```
  npm install er-ui-demo
  ```
  * 在项目中引入
  ```javascript 1.6
  import {Button, ButtonGroup, Icon} from 'er-ui-demo'
  import '../node_modules/er-ui-demo/dist/index.css'
  
  export default {
    name: 'App',
    components: {
      'er-button': Button,
      'er-button-group': ButtonGroup,
      'er-icon': Icon
    }
  }
  ```
  现在，你终于可以在你的项目里，使用我的 UI 组件了。

## 问题交流

  请在 GitHub 上提 issue

## 版本日志

## 联系方式

## 贡献代码

## 许可协议
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019-present, 刘二男
