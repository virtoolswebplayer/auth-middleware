/**
 * Created by gaoletian on 15/11/10.
 */

var P = require('bluebird');

/**
 *
 * @param {Object} [options]
 * @param {String} [options.appName]         必填 取值范围 oms = 财富管理系统, rcs = 风控系统
 * @param {String} [options.cacheServer]     可选 redis host 默认 '127.0.0.1'
 * @param {Intger} [options.cacheServerPort] 可选 redis port 默认 6379
 * @param {Object} [options.cacheClient]     可选 如配置了client 则使用此 redis client
 * @returns {Function} middleware
 */

module.exports = function (options) {

    var opt = options || {};

    var appName = opt.appName,
        cacheServer = opt.cacheServer || '127.0.0.1',
        cacheServerPort = opt.cacheServerPort || 6379,
        cacheClient = opt.cacheClient
        ;

    if (appName === undefined) {
        throw new TypeError('authMiddleware配置错误: appName属性必须指定 "oms" 或 "rcs" ');
    }

    if (cacheClient === undefined) {
        cacheClient = require('redis').createClient(cacheServerPort, cacheServer);
    }

    // 异步任务队列
    var tasks = [];

    P.all(tasks).then(
        function (ok) {
            //成功读取权限
        },
        function (err) {
            //读取权限失败
            throw new Error('从缓存中读取角色权限时失败,查看Redis连接是否已断开');
        });

    return function authService(req, res, next) {

        //
        /**
         * 获取客户端信息
         * sessionId,
         */
        console.log('authService', opt);
        next();
    };
};