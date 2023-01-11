getApp();

var e = require("../../utils/util.js");

Page({
    data: {
        connect: !1,
        userInfo: {},
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getPhoneNumber"),
        hasUserPhone: wx.canIUse("button.open-type.getPhoneNumber")
    },
    wxlogin: function() {
        wx.login({
            success: function(e) {
                var a = wx.getStorageSync("session_id");
                e.code ? wx.request({
                    url: getApp().globalData.https + "userLogin/code/" + e.code,
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        Cookie: "PHPSESSID=" + a + "; path=/"
                    },
                    method: "GET",
                    success: function(e) {
                        200 == e.data.status && (wx.setStorage({
                            key: "session_id",
                            data: e.data.data.session_ids
                        }), wx.setStorage({
                            key: "id",
                            data: e.data.data.session_ids
                        }), wx.setStorage({
                            key: "userkey",
                            data: e.data.data.userkey
                        }));
                    }
                }) : console.log("登录失败！" + e.errMsg);
            }
        });
    },
    getPhoneNumber: function(e) {
        var a = this;
        wx.checkSession({
            success: function() {
                var t = wx.getStorageSync("session_id"), o = wx.getStorageSync("openid"), n = wx.getStorageSync("userkey");
                console.log(e.detail.iv), null == e.detail.iv ? wx.showToast({
                    title: "为了您更好的体验,请先同意授权",
                    icon: "none",
                    duration: 2e3
                }) : wx.request({
                    url: getApp().globalData.https + "LoginInfo",
                    data: {
                        iv: e.detail.iv,
                        encryptedData: e.detail.encryptedData,
                        userkey: n,
                        openid: o,
                        laiyuanmc: getApp().globalData.laiyuanmc
                    },
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        Cookie: "PHPSESSID=" + t + "; path=/"
                    },
                    method: "GET",
                    success: function(e) {
                        200 == e.data.status ? (wx.setStorageSync("quit", "false"), a.setData({
                            hasUserPhone: !1,
                            phone: e.data.data.tel,
                            nickname: e.data.data.nickname,
                            avatarUrl: e.data.data.faceimg
                        }), wx.setStorage({
                            key: "phone",
                            data: e.data.data.tel
                        }), a.onLoad()) : 101 == e.data.status && console.log(e), a.onShow();
                    },
                    fail: function(e) {
                        console.log(1111);
                    }
                });
            },
            fail: function() {
                console.log("session_key 已经失效，需要重新执行登录流程"), a.wxlogin();
            }
        });
    },
    getPhoneNumberr: function(e) {
        var a = this;
        wx.checkSession({
            success: function() {
                var t = wx.getStorageSync("session_id"), o = wx.getStorageSync("openid"), n = wx.getStorageSync("userkey");
                null == e.detail.iv ? wx.showToast({
                    title: "为了您更好的体验,请先同意授权",
                    icon: "none",
                    duration: 2e3
                }) : wx.request({
                    url: getApp().globalData.https + "LoginInfo",
                    data: {
                        iv: e.detail.iv,
                        encryptedData: e.detail.encryptedData,
                        userkey: n,
                        openid: o,
                        laiyuanmc: getApp().globalData.laiyuanmc
                    },
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        Cookie: "PHPSESSID=" + t + "; path=/"
                    },
                    method: "GET",
                    success: function(e) {
                        200 == e.data.status ? (wx.setStorageSync("quit", "false"), wx.navigateTo({
                            url: "../baoming/baoming?title=&typeid=1&school="
                        })) : 101 == e.data.status && console.log(e), a.onShow();
                    },
                    fail: function(e) {
                        console.log(1111);
                    }
                });
            },
            fail: function() {
                console.log("session_key 已经失效，需要重新执行登录流程"), a.wxlogin();
            }
        });
    },
    phone: e.phone,
    onLoad: function(e) {
        wx.showShareMenu({
            withShareTicket: !0
        });
        var a = wx.getStorageSync("session_id"), t = wx.getStorageSync("id"), o = this;
        o.wxlogin(), wx.request({
            url: getApp().globalData.https + "myInfo",
            data: {
                id: t
            },
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                Cookie: "PHPSESSID=" + a + "; path=/"
            },
            method: "POST",
            success: function(e) {
                200 == e.data.status ? o.setData({
                    hasUserPhone: !1,
                    phone: e.data.data.tel,
                    nickname: e.data.data.nickname,
                    avatarUrl: e.data.data.faceimg
                }) : o.setData({
                    hasUserPhone: !0
                });
            },
            fail: function(e) {
                console.log(e);
            }
        });
    },
    getInfo: function() {
        var e = wx.getStorageSync("session_id"), a = wx.getStorageSync("id"), t = this;
        wx.request({
            url: getApp().globalData.https + "myInfo",
            data: {
                id: a
            },
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                Cookie: "PHPSESSID=" + e + "; path=/"
            },
            method: "POST",
            success: function(e) {
                200 == e.data.status ? t.setData({
                    hasUserPhone: !1,
                    phone: e.data.data.tel,
                    nickname: e.data.data.nickname,
                    avatarUrl: e.data.data.faceimg
                }) : t.setData({
                    hasUserPhone: !0
                });
            },
            fail: function(e) {
                console.log(e);
            }
        });
    },
    onShareAppMessage: function(e) {
        return {
            title: "在职研究生在线报名_路灯在职研究生"
        };
    },
    onShow: function() {
        "true" == wx.getStorageSync("quit") ? this.setData({
            hasUserPhone: !0
        }) : this.setData({
            hasUserPhone: !1
        }), this.setData({
            connect: !1
        }), wx.showTabBar();
    }
});