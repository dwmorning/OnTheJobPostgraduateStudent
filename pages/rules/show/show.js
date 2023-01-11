var t = require("../../../wxParse/wxParse.js"), a = require("../../../utils/util.js"), e = (getApp(), 
"");

Page({
    data: {
        bnohide: !1,
        dnohide: !1,
        ban: [],
        gotop: !1,
        tagStyle: {
            p: "line-height:32px",
            table: "border-left: 1px solid #beccdb;border-bottom: 1px solid #beccdb;",
            td: "border-right: 1px solid #beccdb;border-color: #beccdb;border-top: 1px solid #beccdb;"
        },
        clicked: !0,
        clickedd: !0,
        catid: "",
        id: ""
    },
    phone: a.phone,
    onLoad: function(a) {
        wx.showToast({
            title: "加载中",
            icon: "loading",
            duration: 500
        }), wx.showShareMenu({
            withShareTicket: !0
        });
        var o = wx.getStorageSync("session_id"), i = wx.getStorageSync("id"), s = this;
        s.setData({
            catid: a.catid,
            id: a.id
        }), "true" == wx.getStorageSync("quit") ? s.setData({
            hasLogin: !1
        }) : wx.request({
            url: getApp().globalData.https + "myInfo",
            data: {
                id: i
            },
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function(t) {
                200 == t.data.status ? s.setData({
                    hasLogin: !0
                }) : s.setData({
                    hasLogin: !1
                });
            },
            fail: function(t) {
                console.log(t);
            }
        }), s.setData({
            school: a.school,
            typeid: a.typeid
        }), wx.request({
            url: getApp().globalData.https + "JzXq/id/" + a.id + "/catid/" + a.catid,
            data: {},
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                Cookie: "PHPSESSID=" + o + "; path=/"
            },
            method: "GET",
            success: function(a) {
                a.data.data.skfs.length < 2 && s.setData({
                    show: !0
                }), a.data.data.xxdq.length < 2 && s.setData({
                    showw: !0
                }), t.wxParse("article", "html", a.data.data.content, s, 10), s.setData({
                    data: a.data.data,
                    likes: a.data.data.likes
                }), "200" == a.data.data.dzzt ? s.setData({
                    clicked: !0
                }) : s.setData({
                    clicked: !1
                }), "yes" == a.data.data.shoucang ? s.setData({
                    clickedd: !0
                }) : s.setData({
                    clickedd: !1
                }), e = a.data.data;
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {}
        }), wx.getSystemInfo({
            success: function(t) {
                s.setData({
                    winHeight: t.windowHeight - 34
                });
            }
        });
    },
    onShareAppMessage: function(t) {
        return {
            title: e.title + "_路灯在职研究生"
        };
    },
    bshow: function(t) {
        0 == this.data.bnohide ? this.setData({
            bnohide: !0
        }) : this.setData({
            bnohide: !1
        });
    },
    dshow: function(t) {
        0 == this.data.dnohide ? this.setData({
            dnohide: !0
        }) : this.setData({
            dnohide: !1
        });
    },
    goTop: function() {
        wx.pageScrollTo({
            scrollTop: 0,
            duration: 300
        });
    },
    onPageScroll: function(t) {
        t.scrollTop < this.data.winHeight ? this.data.gotop && this.setData({
            gotop: !1
        }) : this.data.gotop || this.setData({
            gotop: !0
        });
    },
    favorclick: function(t) {
        var a = this, e = a.data.catid, o = a.data.id, i = t.currentTarget.dataset.likes, s = wx.getStorageSync("session_id");
        wx.request({
            url: getApp().globalData.https + "add_like/",
            data: {
                catid: e,
                id: o
            },
            method: "GET",
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                Cookie: "PHPSESSID=" + s + "; path=/"
            },
            success: function(t) {
                "未登录" == t.data.msg ? wx.showModal({
                    content: "请先登录",
                    success: function(t) {
                        t.confirm && wx.switchTab({
                            url: "../../user/user"
                        });
                    }
                }) : "取消点赞" == t.data.msg ? (a.setData({
                    clicked: !1,
                    likes: --i
                }), wx.showToast({
                    title: "取消点赞",
                    icon: "success",
                    duration: 1e3
                })) : (a.setData({
                    clicked: !0,
                    likes: ++i
                }), wx.showToast({
                    title: "点赞成功",
                    icon: "success",
                    duration: 1e3
                }));
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {}
        });
    },
    favorclicked: function(t) {
        wx.showToast({
            title: "您已点过赞了!",
            icon: "success",
            duration: 1e3
        });
    },
    shoucang: function(t) {
        var a = this, e = a.data.catid, o = a.data.id, i = wx.getStorageSync("session_id");
        wx.request({
            url: getApp().globalData.https + "shoucang/",
            data: {
                catid: e,
                id: o
            },
            method: "GET",
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                Cookie: "PHPSESSID=" + i + "; path=/"
            },
            success: function(t) {
                null == t.data.msg ? wx.showModal({
                    content: "请先登录",
                    success: function(t) {
                        t.confirm && wx.switchTab({
                            url: "../../user/user"
                        });
                    }
                }) : "收藏已取消" == t.data.msg ? (a.setData({
                    clickedd: !1
                }), wx.showToast({
                    title: "取消收藏",
                    icon: "success",
                    duration: 1e3
                })) : (a.setData({
                    clickedd: !0
                }), wx.showToast({
                    title: "收藏成功",
                    icon: "success",
                    duration: 1e3
                }));
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {}
        });
    },
    getPhoneNumber: function(t) {
        var a = this;
        wx.checkSession({
            success: function() {
                var e = wx.getStorageSync("session_id"), o = wx.getStorageSync("openid"), i = wx.getStorageSync("userkey");
                null == t.detail.iv ? wx.showToast({
                    title: "为了您更好的体验,请先同意授权",
                    icon: "none",
                    duration: 2e3
                }) : wx.request({
                    url: getApp().globalData.https + "LoginInfo",
                    data: {
                        iv: t.detail.iv,
                        encryptedData: t.detail.encryptedData,
                        userkey: i,
                        openid: o,
                        laiyuanmc: getApp().globalData.laiyuanmc
                    },
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        Cookie: "PHPSESSID=" + e + "; path=/"
                    },
                    method: "GET",
                    success: function(t) {
                        200 == t.data.status ? (wx.setStorageSync("quit", "false"), wx.navigateTo({
                            url: "../../baoming/baoming?title=" + a.data.data.title + "&typeid=" + a.data.typeid + "&school=" + a.data.school
                        })) : 101 == t.data.status && console.log(t);
                    },
                    fail: function(t) {
                        console.log(1111);
                    }
                });
            },
            fail: function() {
                console.log("session_key 已经失效，需要重新执行登录流程"), a.wxlogin();
            }
        });
    },
    onShow: function() {
        wx.getStorageSync("session_id");
        var t = wx.getStorageSync("id"), a = this;
        "true" == wx.getStorageSync("quit") ? a.setData({
            hasLogin: !1
        }) : wx.request({
            url: getApp().globalData.https + "myInfo",
            data: {
                id: t
            },
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function(t) {
                200 == t.data.status ? a.setData({
                    hasLogin: !0
                }) : a.setData({
                    hasLogin: !1
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    }
});