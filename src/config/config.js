//'use strict'; var _0xc4ae35 = _0x13eb; function _0x4951() { var _0x23797b = ['mysql', 'env', 'database_production', '2747269kwSxOW', 'DB_SSL', '2076725pZGAJm', '4alxypP', 'DB_USERNAME', '1539147DEKujN', 'config', '9752VMLDmp', '517lXjSCz', 'DB_PASSWORD', 'DB_PORT', 'root', '4113gUmfGw', '1JXGBBb', '127.0.0.1', '99290WbMmDl', 'DB_DATABASE_NAME', 'DB_HOST', '6vRBNLl', '+07:00', 'DB_DIALECT', 'database_test', '4230108IdiYwf', '380874PClEWn']; _0x4951 = function () { return _0x23797b; }; return _0x4951(); } (function (_0x4b4921, _0x26fdee) { var _0x9d1e37 = _0x13eb, _0xa0cc59 = _0x4b4921(); while (!![]) { try { var _0x137433 = -parseInt(_0x9d1e37(0x1f0)) / 0x1 * (-parseInt(_0x9d1e37(0x1fa)) / 0x2) + parseInt(_0x9d1e37(0x203)) / 0x3 * (parseInt(_0x9d1e37(0x201)) / 0x4) + parseInt(_0x9d1e37(0x200)) / 0x5 + -parseInt(_0x9d1e37(0x1f5)) / 0x6 * (parseInt(_0x9d1e37(0x1fe)) / 0x7) + -parseInt(_0x9d1e37(0x1ea)) / 0x8 * (parseInt(_0x9d1e37(0x1ef)) / 0x9) + parseInt(_0x9d1e37(0x1f2)) / 0xa * (parseInt(_0x9d1e37(0x1eb)) / 0xb) + -parseInt(_0x9d1e37(0x1f9)) / 0xc; if (_0x137433 === _0x26fdee) break; else _0xa0cc59['push'](_0xa0cc59['shift']()); } catch (_0x2b7da5) { _0xa0cc59['push'](_0xa0cc59['shift']()); } } }(_0x4951, 0x4532b)); function _0x13eb(_0x132a93, _0x45033) { var _0x4951e5 = _0x4951(); return _0x13eb = function (_0x13eb2c, _0x26abba) { _0x13eb2c = _0x13eb2c - 0x1e9; var _0x17a0e6 = _0x4951e5[_0x13eb2c]; return _0x17a0e6; }, _0x13eb(_0x132a93, _0x45033); } require('dotenv')[_0xc4ae35(0x1e9)](), module['exports'] = { 'development': { 'username': process['env'][_0xc4ae35(0x202)], 'password': process[_0xc4ae35(0x1fc)][_0xc4ae35(0x1ec)], 'database': process[_0xc4ae35(0x1fc)][_0xc4ae35(0x1f3)], 'host': process[_0xc4ae35(0x1fc)][_0xc4ae35(0x1f4)], 'port': process[_0xc4ae35(0x1fc)][_0xc4ae35(0x1ed)], 'dialect': process[_0xc4ae35(0x1fc)][_0xc4ae35(0x1f7)], 'define': { 'freezeTableName': !0x0 }, 'dialectOptions': 'true' === process[_0xc4ae35(0x1fc)][_0xc4ae35(0x1ff)] ? { 'ssl': { 'require': !0x0, 'rejectUnauthorized': !0x1 } } : {}, 'timezone': _0xc4ae35(0x1f6) }, 'test': { 'username': _0xc4ae35(0x1ee), 'password': null, 'database': _0xc4ae35(0x1f8), 'host': _0xc4ae35(0x1f1), 'dialect': _0xc4ae35(0x1fb) }, 'production': { 'username': _0xc4ae35(0x1ee), 'password': null, 'database': _0xc4ae35(0x1fd), 'host': _0xc4ae35(0x1f1), 'dialect': _0xc4ae35(0x1fb) } };
require("dotenv").config();

module.exports = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        define: { freezeTableName: true },
        dialectOptions:
            process.env.DB_SSL === "true"
                ? { ssl: { require: true, rejectUnauthorized: false } }
                : {},
        timezone: "+07:00",
    },
    test: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        define: { freezeTableName: true },
        dialectOptions:
            process.env.DB_SSL === "true"
                ? { ssl: { require: true, rejectUnauthorized: false } }
                : {},
        timezone: "+07:00",
    },
};
