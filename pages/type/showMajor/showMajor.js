getApp();

Page({
    data: {
        typeid: "",
        majorid: "",
        catid: "92",
        banner: {
            thumb: "mba2",
            id: 59
        },
        mainList: [ {
            url: "schoolMajor",
            img: "mxx"
        }, {
            url: "rulesMajor",
            img: "mjz"
        } ],
        articleLink: [ {
            id: 60,
            name: "报考条件",
            icon: "bktj"
        }, {
            id: 62,
            name: "报名时间",
            icon: "bmsj"
        }, {
            id: 63,
            name: "申硕流程",
            icon: "liucheng"
        }, {
            catid: 5,
            name: "常见问题",
            icon: "wenda1"
        }, {
            catid: 8,
            name: "资讯信息",
            icon: "zxxx"
        }, {
            catid: 46,
            name: "考试信息",
            icon: "kaoshi"
        }, {
            name: "在线问答",
            icon: "wenda"
        }, {
            name: "在线报名",
            icon: "bm"
        } ]
    },
    onLoad: function(a) {
        wx.showShareMenu({
            withShareTicket: !0
        }), this.setData({
            typeid: a.typeid
        }), this.getInfo(), "mba" == a.majorid ? this.setData({
            majorid: "mba",
            lxid: "731",
            banner: {
                thumb: "mba2",
                id: 59
            },
            articleLink: [ {
                id: 62,
                name: "报考条件",
                icon: "bktj"
            }, {
                id: 60,
                name: "报名时间",
                icon: "bmsj"
            }, {
                id: 63,
                name: "申硕流程",
                icon: "liucheng"
            }, {
                catid: 5,
                name: "常见问题",
                icon: "wenda1"
            }, {
                catid: 8,
                name: "资讯信息",
                icon: "zxxx"
            }, {
                catid: 46,
                name: "考试信息",
                icon: "kaoshi"
            }, {
                name: "在线问答",
                icon: "wenda"
            }, {
                name: "在线报名",
                icon: "bm"
            } ]
        }) : "emba" == a.majorid ? this.setData({
            majorid: "emba",
            lxid: "732",
            banner: {
                thumb: "emba2",
                id: 31
            },
            articleLink: [ {
                id: 33,
                name: "报名流程",
                icon: "bm"
            }, {
                id: 34,
                name: "报考条件",
                icon: "bktj"
            }, {
                id: 35,
                name: "申硕流程",
                icon: "liucheng"
            }, {
                catid: 5,
                name: "常见问题",
                icon: "wenda1"
            }, {
                catid: 8,
                name: "资讯信息",
                icon: "zxxx"
            }, {
                catid: 46,
                name: "考试信息",
                icon: "kaoshi"
            }, {
                name: "在线问答",
                icon: "wenda"
            }, {
                name: "在线报名",
                icon: "bm"
            } ]
        }) : "mem" == a.majorid ? this.setData({
            majorid: "mem",
            lxid: "737",
            banner: {
                thumb: "mem2",
                id: 17
            },
            articleLink: [ {
                id: 18,
                name: "报名时间",
                icon: "bmsj"
            }, {
                id: 16,
                name: "报考条件",
                icon: "bmtj"
            }, {
                id: 20,
                name: "申硕流程",
                icon: "liucheng"
            }, {
                catid: 5,
                name: "常见问题",
                icon: "wenda1"
            }, {
                catid: 8,
                name: "资讯信息",
                icon: "zxxx"
            }, {
                catid: 46,
                name: "考试信息",
                icon: "kaoshi"
            }, {
                name: "在线问答",
                icon: "wenda"
            }, {
                name: "在线报名",
                icon: "bm"
            } ]
        }) : "mf" == a.majorid ? this.setData({
            majorid: "mf",
            lxid: "567",
            banner: {
                thumb: "mf2",
                id: 58
            },
            articleLink: [ {
                id: 55,
                name: "报考条件",
                icon: "bktj"
            }, {
                id: 57,
                name: "报名时间",
                icon: "bmsj"
            }, {
                id: 54,
                name: "申硕流程",
                icon: "liucheng"
            }, {
                catid: 5,
                name: "常见问题",
                icon: "wenda1"
            }, {
                catid: 8,
                name: "资讯信息",
                icon: "zxxx"
            }, {
                catid: 46,
                name: "考试信息",
                icon: "kaoshi"
            }, {
                name: "在线问答",
                icon: "wenda"
            }, {
                name: "在线报名",
                icon: "bm"
            } ]
        }) : "mpa" == a.majorid ? this.setData({
            majorid: "mpa",
            lxid: "733",
            banner: {
                thumb: "mpa2",
                id: 11
            },
            articleLink: [ {
                id: 14,
                name: "报考条件",
                icon: "bktj"
            }, {
                id: 13,
                name: "报名时间",
                icon: "bmsj"
            }, {
                id: 12,
                name: "申硕流程",
                icon: "liucheng"
            }, {
                catid: 5,
                name: "常见问题",
                icon: "wenda1"
            }, {
                catid: 8,
                name: "资讯信息",
                icon: "zxxx"
            }, {
                catid: 46,
                name: "考试信息",
                icon: "kaoshi"
            }, {
                name: "在线问答",
                icon: "wenda"
            }, {
                name: "在线报名",
                icon: "bm"
            } ]
        }) : "mpacc" == a.majorid && this.setData({
            majorid: "mpacc",
            lxid: "734",
            banner: {
                thumb: "mpacc2",
                id: 44
            },
            articleLink: [ {
                id: 46,
                name: "报考条件",
                icon: "bktj"
            }, {
                id: 45,
                name: "报名时间",
                icon: "bmsj"
            }, {
                id: 48,
                name: "申硕流程",
                icon: "liucheng"
            }, {
                catid: 5,
                name: "常见问题",
                icon: "wenda1"
            }, {
                catid: 8,
                name: "资讯信息",
                icon: "zxxx"
            }, {
                catid: 46,
                name: "考试信息",
                icon: "kaoshi"
            }, {
                name: "在线问答",
                icon: "wenda"
            }, {
                name: "在线报名",
                icon: "bm"
            } ]
        }), this.getMajor();
    },
    onShareAppMessage: function(a) {
        return {
            title: "在职硕士招生信息网_路灯在职研究生"
        };
    },
    getInfo: function() {
        wx.getStorageSync("session_id");
        var a = wx.getStorageSync("id"), n = this;
        "true" == wx.getStorageSync("quit") ? n.setData({
            hasLogin: !1
        }) : wx.request({
            url: getApp().globalData.https + "myInfo",
            data: {
                id: a
            },
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function(a) {
                200 == a.data.status ? n.setData({
                    hasLogin: !0
                }) : n.setData({
                    hasLogin: !1
                });
            },
            fail: function(a) {
                console.log(a);
            }
        });
    },
    onShow: function() {
        this.getInfo();
    },
    getPhoneNumber: function(a) {
        var n = this;
        wx.checkSession({
            success: function() {
                var n = wx.getStorageSync("session_id"), i = wx.getStorageSync("openid"), e = wx.getStorageSync("userkey");
                null == a.detail.iv ? wx.showToast({
                    title: "为了您更好的体验,请先同意授权",
                    icon: "none",
                    duration: 2e3
                }) : wx.request({
                    url: getApp().globalData.https + "LoginInfo",
                    data: {
                        iv: a.detail.iv,
                        encryptedData: a.detail.encryptedData,
                        userkey: e,
                        openid: i,
                        laiyuanmc: getApp().globalData.laiyuanmc
                    },
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        Cookie: "PHPSESSID=" + n + "; path=/"
                    },
                    method: "GET",
                    success: function(a) {
                        200 == a.data.status ? (wx.setStorageSync("quit", "false"), wx.navigateTo({
                            url: "../../baoming/baoming?title=&typeid=2&school="
                        })) : 101 == a.data.status && console.log(a);
                    },
                    fail: function(a) {
                        console.log(1111);
                    }
                });
            },
            fail: function() {
                console.log("session_key 已经失效，需要重新执行登录流程"), n.wxlogin();
            }
        });
    },
    getMajor: function(a) {
        var n = this;
        wx.request({
            url: getApp().globalData.https + "ZyIndexApi/lx/" + n.data.typeid + "/name/" + n.data.majorid,
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(a) {
                wx.showToast({
                    title: "加载中",
                    icon: "loading",
                    duration: 500
                }), n.setData({
                    articleList: a.data.data
                });
            },
            fail: function(a) {
                console.log(a);
            },
            complete: function() {}
        });
    },
    preventTouchMove: function() {}
});