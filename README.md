# auth-middleware
通用认证服务中间件

# 功能说明
1. 自动从redis里读取权限配置
2. 支持配置
3. 负责维护redis缓存的用户会话到期时间
4. 检测会话状态（已登陆、未登陆）
5. 自动识别访问设备（手机、PC、其它）并收集客户端信息如：User-Agent（设备ID,操作系统等）

# 用法

- 配置

```js
var authConfig = 
{
  app: 'oms', // 子系统-财富管理系统，可选风控系统，财富管理系统等
  cacheServers:'127.0.0.1', // redis host
  cacheServerPort:'6379', // redis port
  javaApi:'http://192.168.1.60:533', // java api url
  redirectUrl: 'sso login',
};
```

- 与express集成

```javascript
var express =require('express'),
    cookieParser = require('cookie-parser'),
    bodyParser   = require('body-parser'),
    authService  = require('auth-middleware')
    ;

// 先启用bodyParser和cookieParser
express.use(bodyParser);
express.use(cookieParser);

// 所有请求调用权限认证服务
express.use(authService(authConfig));

// 指定路由调用权限认证服务
express.use('/rest',authService(authConfig));

express.listen(3000);
```
