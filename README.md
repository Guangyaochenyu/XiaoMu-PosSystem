# XiaoMu-PosSystem
小超市收银系统，包含前台和后台。

# 2021/08/16 11:38:00
近期将会完全重写，坑已经在挖了...

## 演示

在线演示地址见: [http://47.100.173.231:44444](http://47.100.173.231:44444)

默认用户名/密码： admin / password

## 结构

服务端和客户端打包在一起，正常打包使用时软件打开客户端后会在后台静默启动服务端。

当局域网内有多台收银机时，可由其中一台充当服务端，其他收银机充当客户端。

在软件根目录下建立一个`.noserver`的空文件即可不启动服务端，打开客户端后在登录界面修改服务器地址即可。

打开`powershell`后执行如下命令即可:

```
echo "" > .noserver
```

## 文档

服务端API文档见 [API文档](./server/doc/API.md)

打包文档见 [打包文档](./build.md)

## 前台销售

- ✅模糊查询商品
- ✅挂起/取出订单
- ✅查看/撤销历史订单
- ✅提交订单
- ✅会员积分
- ✅修改商品价格/数量
- ❌解析散称物品条码
- ❌客显通讯
- ❌钱箱通讯
- ❌小票打印

## 后台管理

- ✅供应商建立/删除
- ✅商品分类建立/删除
- ✅商品分类建立/删除/禁用
- ❌商品标价签打印
- ❌电子秤通讯
- ✅促销活动建立/删除
- ✅会员建立/删除/禁用
- ✅建立进货单
- ✅管理员(收银员)建立/禁用/修改
- ✅历史订单查询/分析
- ✅导入商品数据
- ✅导出商品/销售/会员数据
- ✅店名修改


## 硬件部分

因为身边没有设备，所以硬件通讯部分暂时凉了，电子秤部分仅和大华电子秤做了对接。
