安装组件

```bash
# Ｅlement UI
vue add element 
# 样式导入
npm install style-resources-loader -D
```

环境配置

1. 创建全局主题样式

```js
// vue.config.js 自己创建的
const path = require('path')

module.exports = {
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  },
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/index.styl'),
      ],
    })
}
```