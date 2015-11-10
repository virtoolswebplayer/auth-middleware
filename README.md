# auth-middleware
通用认证服务中间件

# 功能说明
1. 自动从redis里读取权限配置
2. 支持配置

# 用法

- 配置

```js
var authConfig = 
{
  app: 'oms', // 子系统-财富管理系统，可选风控系统，财富管理系统等
  cacheServers:'127.0.0.1', // redis host
  cacheServerPort:'6379', // redis port
  javaApi:'http://192.168.1.60:533', // java api url
  device: 'pc', // [pc,mobile] 
  os: 'ios, android, window, mac',
  redirectUrl: 'sso login',
  deviceID:'123456', //设备ID
};
```

- 与express集成

```javascript
var express =require('express');
var authService = require('auth-middleware');

// 调用权限认证服务
express.use(authService(authConfig));

express.listen(3000);
```
