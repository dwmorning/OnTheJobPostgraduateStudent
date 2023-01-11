getApp();

Page({
    data: {
        typeid: "",
        catid: "92",
        banner: {
            thumb: "tdxl2",
            id: 53
        },
        mainList: [ {
            url: "school",
            img: "xxx"
        }, {
            url: "major",
            img: "zzy"
        }, {
            url: "rules",
            img: "cjz"
        } ],
        articleLink: [ {
            id: 50,
            name: "报考条件",
            icon: "bktj"
        }, {
            id: 92,
            name: "报名时间",
            icon: "bmsj"
        }, {
            id: 49,
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
        } ],
        kaoshi: !1
    },
    onLoad: function(n) {
        var a = this;
        wx.getSystemInfo({
            success: function(n) {
                a.setData({
                    winHeight: n.windowHeight
                });
            }
        }), a.setData({
            majortxt: n.majortxt
        }), wx.showShareMenu({
            withShareTicket: !0
        }), a.getInfo(), 1 == n.typeid ? a.setData({
            typeid: 1,
            banner: {
                thumb: "tdxl2",
                id: 53
            },
            articleLink: [ {
                id: 50,
                name: "报考条件",
                icon: "bktj"
            }, {
                id: 52,
                name: "报名时间",
                icon: "bmsj"
            }, {
                id: 49,
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
            } ],
            kaoshi: !0
        }) : 2 == n.typeid ? a.setData({
            typeid: 2,
            banner: {
                thumb: "zyss2",
                id: 71
            },
            articleLink: [ {
                id: 74,
                name: "报考条件",
                icon: "bktj"
            }, {
                id: 80,
                name: "报名时间",
                icon: "bmsj"
            }, {
                id: 77,
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
            } ],
            kaoshi: !0
        }) : 3 == n.typeid ? a.setData({
            typeid: 3,
            banner: {
                thumb: "gjss2",
                id: 7
            },
            articleLink: [ {
                id: 8,
                name: "报考条件",
                icon: "bktj"
            }, {
                id: 10,
                name: "获得证书",
                icon: "bmsj"
            }, {
                id: 9,
                name: "报名流程",
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
        }) : 4 == n.typeid ? a.setData({
            typeid: 4,
            banner: {
                thumb: "zwhb2",
                id: 68
            },
            articleLink: [ {
                id: 69,
                name: "报考条件",
                icon: "bktj"
            }, {
                id: 82,
                name: "报名时间",
                icon: "bmsj"
            }, {
                id: 70,
                name: "报名流程",
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
        }) : 5 == n.typeid ? a.setData({
            typeid: 5,
            banner: {
                thumb: "zzbs2",
                id: 23
            },
            articleLink: [ {
                id: 26,
                name: "报考条件",
                icon: "bktj"
            }, {
                id: 24,
                name: "报名时间",
                icon: "bmsj"
            }, {
                id: 25,
                name: "报名流程",
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
            } ],
            kaoshi: !0
        }) : 6 == n.typeid ? a.setData({
            typeid: 6,
            banner: {
                thumb: "gjbs2",
                id: 41
            },
            articleLink: [ {
                id: 42,
                name: "报考条件",
                icon: "bktj"
            }, {
                id: 40,
                name: "获得证书",
                icon: "bmsj"
            }, {
                id: 43,
                name: "报名流程",
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
        }) : 7 == n.typeid && a.setData({
            typeid: 7,
            banner: {
                thumb: "gjyx2",
                id: 3
            },
            articleLink: [ {
                id: 4,
                name: "报考条件",
                icon: "bktj"
            }, {
                id: 5,
                name: "报名时间",
                icon: "bmsj"
            }, {
                id: 6,
                name: "报名流程",
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
        }), a.getMajor(), a.getRules();
    },
    onShareAppMessage: function(n) {
        return {
            title: "在职研究生招生信息网_路灯在职研究生"
        };
    },
    getInfo: function() {
        wx.getStorageSync("session_id");
        var n = wx.getStorageSync("id"), a = this;
        "true" == wx.getStorageSync("quit") ? a.setData({
            hasLogin: !1
        }) : wx.request({
            url: getApp().globalData.https + "myInfo",
            data: {
                id: n
            },
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function(n) {
                200 == n.data.status ? a.setData({
                    hasLogin: !0
                }) : a.setData({
                    hasLogin: !1
                });
            },
            fail: function(n) {
                console.log(n);
            }
        });
    },
    onShow: function() {
        this.getInfo();
    },
    getPhoneNumber: function(n) {
        var a = this;
        wx.checkSession({
            success: function() {
                var i = wx.getStorageSync("session_id"), e = wx.getStorageSync("openid"), t = wx.getStorageSync("userkey");
                null == n.detail.iv ? wx.showToast({
                    title: "为了您更好的体验,请先同意授权",
                    icon: "none",
                    duration: 2e3
                }) : wx.request({
                    url: getApp().globalData.https + "LoginInfo",
                    data: {
                        iv: n.detail.iv,
                        encryptedData: n.detail.encryptedData,
                        userkey: t,
                        openid: e,
                        laiyuanmc: getApp().globalData.laiyuanmc
                    },
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        Cookie: "PHPSESSID=" + i + "; path=/"
                    },
                    method: "GET",
                    success: function(n) {
                        200 == n.data.status ? (wx.setStorageSync("quit", "false"), wx.navigateTo({
                            url: "../../baoming/baoming?title=&typeid=" + a.data.typeid + "&school="
                        })) : 101 == n.data.status && console.log(n);
                    },
                    fail: function(n) {
                        console.log(1111);
                    }
                });
            },
            fail: function() {
                console.log("session_key 已经失效，需要重新执行登录流程"), a.wxlogin();
            }
        });
    },
    getMajor: function(n) {
        var a = this;
        wx.request({
            url: getApp().globalData.https + "ZyIndexApi/lx/" + a.data.typeid,
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(n) {
                wx.showToast({
                    title: "加载中",
                    icon: "loading",
                    duration: 500
                }), a.setData({
                    articleList: n.data.data
                });
            },
            fail: function(n) {
                console.log(n);
            },
            complete: function() {}
        });
    },
    getRules: function(n) {
        var a = this;
        wx.request({
            url: getApp().globalData.https + "JzSx/lx/" + a.data.typeid,
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(n) {
                a.setData({
                    jzList: n.data.data.jz_list
                });
            },
            fail: function(n) {
                console.log(n);
            },
            complete: function() {}
        });
    },
    preventTouchMove: function() {}
});