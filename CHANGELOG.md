# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.1.37](https://github.com/Roy2017/ciToolPublic/compare/v0.1.36...v0.1.37) (2021-12-17)


### Features

* **增加复制文件夹:** 文件夹功能 ([1eb9f9c](https://github.com/Roy2017/ciToolPublic/commit/1eb9f9cc70fceab2eaa97ccf197f062aa702f7fb))


### Bug Fixes

* **修复.gitignore:** 修复.gitignore问题 ([3bd9bd2](https://github.com/Roy2017/ciToolPublic/commit/3bd9bd2d7f2d2bf24d4393c15a02049a69cf7528))

### 0.1.36 (2021-12-17)


### Features

* **完善commit部分:** 优化commit部分 ([a96c4a4](https://github.com/Roy2017/ciToolPublic/commit/a96c4a4a9ca71d76ed11e1136e57017b3462a641))

### [0.1.35](https://github.com/Roy2017/ciTool/compare/v0.1.34...v0.1.35) (2021-11-26)


### Bug Fixes

* **src/index.js:** 用npx 修复husky版本问题 ([d52a34c](https://github.com/Roy2017/ciTool/commit/d52a34c135c9dcc2cd61519bcc77aea004e260e5))

### [0.1.34](https://github.com/Roy2017/ciTool/compare/v0.1.33...v0.1.34) (2021-11-24)


### Features

* **peerdependencies:** 增加peerDependencies ([4242ae4](https://github.com/Roy2017/ciTool/commit/4242ae4c321641c593c160de5f5817d5df60a5b7))
* **src/utils/githandle.js:** 兼容publish时只有一条commit-msg的情况 ([10e6112](https://github.com/Roy2017/ciTool/commit/10e6112a144425a1c6e4e443cec82aef4ce51229))

### [0.1.33](https://github.com/Roy2017/ciTool/compare/v0.1.32...v0.1.33) (2021-10-20)


### Features

* **src/index.js:** 增加git pull的错误输出 ([35817dc](https://github.com/Roy2017/ciTool/commit/35817dc8c56ca41d5dc20d75c61f58406ae1d9b6))


### Bug Fixes

* **src/utils/getgitpath.mjs:** 修复获取git执行bash地址的方式 ([c066584](https://github.com/Roy2017/ciTool/commit/c066584d5492dcdc0c1aed0de90f942df1ffa820))

### [0.1.32](https://github.com/Roy2017/ciTool/compare/v0.1.31...v0.1.32) (2021-09-02)


### Bug Fixes

* **src/commithandle/rollup.config.js:** 修复replace的配置问题 ([87aea7d](https://github.com/Roy2017/ciTool/commit/87aea7de1a2de51d16a85f88130a1fbf662ee4b9))

### [0.1.31](https://github.com/Roy2017/ciTool/compare/v0.1.30...v0.1.31) (2021-09-02)


### Features

* **src/releasehandle/h5release/index.js:** 兼容某些需要在gitbash环境运行的指令 ([61e97df](https://github.com/Roy2017/ciTool/commit/61e97df5d866f0de583fd65ec8588aebbe44d7dd))


### Bug Fixes

* **src/releasehandle/h5release/index.js:** 修复h5模式只在testing环境时才自动到服务器拉代码 ([f3319b0](https://github.com/Roy2017/ciTool/commit/f3319b03fd2327c5a2a1fa90a04b4d75848f7c67))

### [0.1.30](https://github.com/Roy2017/ciTool/compare/v0.1.29...v0.1.30) (2021-08-25)


### Bug Fixes

* **src/index.js:** 修复检查升级和压缩文件之间的冲突，更新commander。 ([80cb211](https://github.com/Roy2017/ciTool/commit/80cb211bdea1501715efe82658de2c51f357e02c))

### [0.1.29](https://github.com/Roy2017/ciTool/compare/v0.1.28...v0.1.29) (2021-08-23)


### Bug Fixes

* **package/.gitignore:** 修改ignore问题 ([ca5f771](https://github.com/Roy2017/ciTool/commit/ca5f77127dac78c0226cff712abeafc8a04ed983))

### [0.1.28](https://github.com/Roy2017/ciTool/compare/v0.1.27...v0.1.28) (2021-08-23)


### Bug Fixes

* **h5release.js:** 清空release文件夹前检查 ([bb70d51](https://github.com/Roy2017/ciTool/commit/bb70d51fe2a8b9b025802c56c815d4fd1ac2f37b))

### [0.1.27](https://github.com/Roy2017/ciTool/compare/v0.1.26...v0.1.27) (2021-08-17)


### Features

* **src/utils/checknpm.js:** 增加面子工程，增加版本检查提示。 ([901b736](https://github.com/Roy2017/ciTool/commit/901b7364336c12cbbae466db65148d217809e1ca))

### [0.1.26](https://github.com/Roy2017/ciTool/compare/v0.1.25...v0.1.26) (2021-08-16)


### Features

* **src/releasehandle/h5release/index.js:** 增加uc环境时push新的tag，增加h5的testing环境拉去服务器代码功能 ([8696428](https://github.com/Roy2017/ciTool/commit/86964283fa43075287a0b814108f648a00887ded))

### [0.1.25](https://github.com/Roy2017/ciTool/compare/v0.1.24...v0.1.25) (2021-08-16)


### Bug Fixes

* **src/index.js:** 修改git pull时机，只在push和publish指令里使用 ([fbe1e8f](https://github.com/Roy2017/ciTool/commit/fbe1e8fd890c6a2d55cbeea98c196dc2cadb9518))
* **src/releasehandle/index.js:** 测试打包 ([3066614](https://github.com/Roy2017/ciTool/commit/30666140f59e4baa522aa2d04562862f9f7050ff))

### [0.1.24](https://github.com/Roy2017/ciTool/compare/v0.1.23...v0.1.24) (2021-08-11)

### [0.1.23](https://github.com/Roy2017/ciTool/compare/v0.1.22...v0.1.23) (2021-08-11)


### Bug Fixes

* **script/prepublish.js:** 发版readme.md ([5d0cc39](https://github.com/Roy2017/ciTool/commit/5d0cc39a0fd815883db73b21438dd24949da1c1d))

### [0.1.22](https://github.com/Roy2017/ciTool/compare/v0.1.21...v0.1.22) (2021-08-11)


### Features

* **readme.md:** 增加README.md ([6ea1d7e](https://github.com/Roy2017/ciTool/commit/6ea1d7efcc2bcef792c9dd6af86ec4809c67c3c6))


### Bug Fixes

* **src/index.js:** 修复version问题 ([643941e](https://github.com/Roy2017/ciTool/commit/643941ef7bda3bdc5f7024dd922533de77ea5dad))
* **src/releasehandle/h5release/index.js:** publish环境增加NODE_ENV：production环境变量 ([c0e3552](https://github.com/Roy2017/ciTool/commit/c0e3552241f179c11ce792a0110ae70e080b4e1b))
* **src/releasehandle/index.js:** 修复环境变量问题 ([423d7d5](https://github.com/Roy2017/ciTool/commit/423d7d54e15eb55977f95aa7f5b2cbdb84706e41))

### [0.1.21](https://github.com/Roy2017/ciTool/compare/v0.1.20...v0.1.21) (2021-08-11)


### Bug Fixes

* **src/index.js:** 修复ciToolConfig过早引入问题 ([c3c3481](https://github.com/Roy2017/ciTool/commit/c3c34816538c30e27a7681ea664f69609525df64))

### [0.1.20](https://github.com/Roy2017/ciTool/compare/v0.1.19...v0.1.20) (2021-08-11)

### [0.1.19](https://github.com/Roy2017/ciTool/compare/v0.1.18...v0.1.19) (2021-08-11)


### Bug Fixes

* **script/prepublish.js:** 修复发布问题 ([8e80bf3](https://github.com/Roy2017/ciTool/commit/8e80bf3bd57ed1b1b3b49df70c6cd30ae299b87b))

### [0.1.18](https://github.com/Roy2017/ciTool/compare/v0.1.17...v0.1.18) (2021-08-11)


### Bug Fixes

* **script/prepublish.js:** 修复发布脚本 ([e8e4f4c](https://github.com/Roy2017/ciTool/commit/e8e4f4c8386ed676ded4f9366655b3638e84c485))

### [0.1.17](https://github.com/Roy2017/ciTool/compare/v0.1.16...v0.1.17) (2021-08-11)


### Bug Fixes

* **script/prepublish.js:** 测试1 ([63138fe](https://github.com/Roy2017/ciTool/commit/63138fe9009211d5230fe6dc33db2be8e897807f))

### [0.1.16](https://github.com/Roy2017/ciTool/compare/v0.1.15...v0.1.16) (2021-08-11)


### Bug Fixes

* **script/prepublish.js:** 完善1 ([63354e7](https://github.com/Roy2017/ciTool/commit/63354e7a4f6a4c88f9f79c259440e1a9d7050dc1))

### [0.1.15](https://github.com/Roy2017/ciTool/compare/v0.1.14...v0.1.15) (2021-08-11)


### Bug Fixes

* **script/prepublish.js:** 修复1 ([089b7a5](https://github.com/Roy2017/ciTool/commit/089b7a5139c0f618d96872bf965423b3965a6c44))

### [0.1.14](https://github.com/Roy2017/ciTool/compare/v0.1.13...v0.1.14) (2021-08-11)


### Features

* **script/prepublish.js:** 加commit指令，加gitignore ([34a30e5](https://github.com/Roy2017/ciTool/commit/34a30e5609dc0e0233ddca63237aa15f53dedd7e))

### [0.1.13](https://github.com/Roy2017/ciTool/compare/v0.1.12...v0.1.13) (2021-08-11)


### Features

* **尝试发版:** 发版1 ([bed3565](https://github.com/Roy2017/ciTool/commit/bed3565fdf0d0896e979bd0afca9f5af4df10316))


### Bug Fixes

* **尝试打包:** 打包1 ([33213ba](https://github.com/Roy2017/ciTool/commit/33213ba25be63996b461b259c11087d20135b6e4))

### [0.1.11](https://github.com/Roy2017/ciTool/compare/v0.1.10...v0.1.11) (2021-08-09)


### Bug Fixes

* **src/releasehandle/index.js:** 修复打包时环境变量问题 ([18b19e4](https://github.com/Roy2017/ciTool/commit/18b19e4d612f6983075e6c2809337861c2fb168d))

### [0.1.10](https://github.com/Roy2017/ciTool/compare/v0.1.9...v0.1.10) (2021-08-09)


### Bug Fixes

* **package.json:** 修复publish行为 ([060ff27](https://github.com/Roy2017/ciTool/commit/060ff27a5ddf8ced3785f69f058bdd83b8a0a756))

### [0.1.9](https://github.com/Roy2017/ciTool/compare/v0.1.8...v0.1.9) (2021-08-09)


### Features

* **package.json:** 增加prepublishOnly ([eddd195](https://github.com/Roy2017/ciTool/commit/eddd195cc8b561c3c36374efadbb2573aaa58dc5))

### [0.1.8](https://github.com/Roy2017/ciTool/compare/v0.1.7...v0.1.8) (2021-08-09)


### Bug Fixes

* **修复:** 修复发布指令 ([382d231](https://github.com/Roy2017/ciTool/commit/382d231a17b3dda028702948a5d065c58ed29d71))
* **增加发版指令:** 解决发版问题 ([8f67157](https://github.com/Roy2017/ciTool/commit/8f67157bf58cb3e42020f14ab4a0917418f192d1))

### [0.1.7](https://github.com/Roy2017/ciTool/compare/v0.1.6...v0.1.7) (2021-08-09)


### Features

* **citoolconfig.js:** 增加自动化部署功能 ([7a9e6c3](https://github.com/Roy2017/ciTool/commit/7a9e6c32d896d494c90ad379cd3a50dc1b6bca0f))


### Bug Fixes

* **package.json:** 解决发版问题 ([9119a0f](https://github.com/Roy2017/ciTool/commit/9119a0f681ba0e129b715aff901f1661a7a38bca))

### [0.1.6](https://github.com/Roy2017/ciTool/compare/v0.1.5...v0.1.6) (2021-08-06)


### Features

* **src/index.js:** 增加commit后再运行push的兼容问题 ([eae0a24](https://github.com/Roy2017/ciTool/commit/eae0a2486c71abf7c152e10dc57f8d1281db7788))
* **src/index.js:** 增加init功能 ([dfb4082](https://github.com/Roy2017/ciTool/commit/dfb4082ea865730b305f2aec45402204bd79d612))


### Bug Fixes

* **src/index.js:** 完善commit和push指令 ([c319100](https://github.com/Roy2017/ciTool/commit/c3191007f2091873601b38f86719707e27fc74bf))
* **src/index.js:** 完善publish流程 ([e7f6d48](https://github.com/Roy2017/ciTool/commit/e7f6d4820cb74beb9107149569ae624441d02db2))
* **src/index.js:** 先commit了 ([384a504](https://github.com/Roy2017/ciTool/commit/384a504217147c1a785c107fc30723963cd7530e))
* **src/index.js:** 修复push问题 ([9e83db9](https://github.com/Roy2017/ciTool/commit/9e83db914907fd18b350e0f6270c848a5d94bb7d))

### [0.1.5](https://github.com/Roy2017/ciTool/compare/v0.1.4...v0.1.5) (2021-08-05)


### Bug Fixes

* **package.json:** 修复postinstall ([773cb99](https://github.com/Roy2017/ciTool/commit/773cb993169601606aea3196a66dac3d4e5ea258))

### [0.1.4](https://github.com/Roy2017/ciTool/compare/v0.1.3...v0.1.4) (2021-08-05)


### Bug Fixes

* **src/commithandle/index.js:** 修复commitizen 路径问题 ([4149acd](https://github.com/Roy2017/ciTool/commit/4149acdb79ed318e0b128d448f154cf921489903))

### [0.1.3](https://github.com/Roy2017/ciTool/compare/v0.1.2...v0.1.3) (2021-08-04)

### [0.1.2](https://github.com/Roy2017/ciTool/compare/v0.1.1...v0.1.2) (2021-08-04)


### Bug Fixes

* **修复version问题:** 修复version问题 ([ac91620](https://github.com/Roy2017/ciTool/commit/ac91620d7b03592b45654f594fe2e3ada403df1d))

### [0.1.1](https://github.com/Roy2017/ciTool/compare/v2.2.0...v0.1.1) (2021-08-04)


### Features

* 1 ([d153ec6](https://github.com/Roy2017/ciTool/commit/d153ec67a0a46a729807b3121e9e96f969e77391))
* 更新src/commitHandle/index.js ([7078ef9](https://github.com/Roy2017/ciTool/commit/7078ef941cf0efcb44d3af9a2c933b8ae1d661ea))
* **src/commithandle/postcommithandle.js:** 完成整个流程 ([a3ed207](https://github.com/Roy2017/ciTool/commit/a3ed2077e5fba6da5f04a719446bd133aa6f5f1b))


### Bug Fixes

* **bin/xes-citool.js:** 完善功能 ([d9a9545](https://github.com/Roy2017/ciTool/commit/d9a95450ecd1bc6d21b6cdd8e18967968ce17879))
* **src/commithandle/postcommithandle.js:** 更新message问题 ([fb9a9be](https://github.com/Roy2017/ciTool/commit/fb9a9be6c047c9ab949bada4373b006445aaadc8))
