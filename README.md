## 使用

### options
1、工具初始化

-i

生成必要的配置文件和git钩子监听。

### commands
1、commit

用于标准化commit信息

2、push

用于标准commit后，pull并push代码。

3、publish

* 标准化commit。
* 版本号自动升级并生成CHANGELOG.md。
* push源码。
* 执行ciToolConfig.js配置文件对应的cmd.build命令打包。
* 根据不同类型(h5、小程序)和环境(uc、testing)，部署打包后的文件。

type:

必填，支持h5或mini。

options:

-t 

设置打包环境为testing，**版本号不会自动升级**

环境变量：
```js
{ Fetch_Flag: 'testing', NODE_ENV: 'dev' }
```

-u

设置打包环境为uc环境

环境变量：
```js
{ Fetch_Flag: 'uc', NODE_ENV: 'production' }
```
**注意** 

如果不设置-t或-u，不会打包和部署，只会把版本号升级并push源码进行发版。

## commit标准化

```
/**
* feature：新功能
* update：更新某功能
* fixbug：修补某功能的bug
* refactor：重构某个功能
* optimize: 优化构建工具或运行时性能
* style：仅样式改动
* docs：仅文档新增/改动
* chore：构建过程或辅助工具的变动
  */
```

**只有feature和fixbug两种类型的commit-msg会记录到CHANGELOG.md文件里面**


