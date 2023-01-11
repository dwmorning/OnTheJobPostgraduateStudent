var t = require("../../wxParse/wxParse.js"), a = require("../../utils/util.js"), e = (getApp(), 
"");

Page({
    data: {
        clicked: !0,
        gotop: !1,
        tagStyle: {
            p: "line-height:32px",
            table: "border-left: 1px solid #beccdb;border-bottom: 1px solid #beccdb;",
            td: "border-right: 1px solid #beccdb;border-color: #beccdb;border-top: 1px solid #beccdb;padding:0 !important;"
        }
    },
    phone: a.phone,
    onLoad: function(a) {
        var o = wx.getStorageSync("session_id"), s = wx.getStorageSync("id"), i = this;
        "true" == wx.getStorageSync("quit") ? i.setData({
            hasLogin: !1
        }) : wx.request({
            url: getApp().globalData.https + "myInfo",
            data: {
                id: s
            },
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function(t) {
                200 == t.data.status ? i.setData({
                    hasLogin: !0
                }) : i.setData({
                    hasLogin: !1
                });
            },
            fail: function(t) {
                console.log(t);
            }
        }), wx.showShareMenu({
            withShareTicket: !0
        }), wx.showToast({
            title: "加载中",
            icon: "loading",
            duration: 500
        }), i.setData({
            catid: a.catid,
            id: a.id
        }), wx.request({
            url: getApp().globalData.https + "ArticleXq/catid/" + i.data.catid + "/id/" + i.data.id,
            data: {},
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                Cookie: "PHPSESSID=" + o + "; path=/"
            },
            method: "GET",
            success: function(a) {
                t.wxParse("content", "html", a.data.data.content, i, 10), i.setData({
                    article: a.data.data,
                    likes: a.data.data.likes
                }), "200" == a.data.data.dzzt ? i.setData({
                    clicked: !0
                }) : i.setData({
                    clicked: !1
                }), "yes" == a.data.data.shoucang ? i.setData({
                    clickedd: !0
                }) : i.setData({
                    clickedd: !1
                }), e = a.data.data;
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {}
        }), wx.getSystemInfo({
            success: function(t) {
                i.setData({
                    winHeight: t.windowHeight
                });
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
    },
    onShareAppMessage: function(t) {
        return {
            title: e.title + "_路灯在职研究生"
        };
    },
    favorclick: function(t) {
        var a = this, e = a.data.catid, o = a.data.id, s = t.currentTarget.dataset.likes, i = wx.getStorageSync("session_id");
        wx.request({
            url: getApp().globalData.https + "add_like/",
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
                "未登录" == t.data.msg ? wx.showModal({
                    content: "请先登录",
                    success: function(t) {
                        t.confirm && wx.switchTab({
                            url: "../user/user"
                        });
                    }
                }) : "取消点赞" == t.data.msg ? (a.setData({
                    clicked: !1,
                    likes: --s
                }), wx.showToast({
                    title: "取消点赞",
                    icon: "success",
                    duration: 1e3
                })) : (a.setData({
                    clicked: !0,
                    likes: ++s
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
        var a = this, e = a.data.catid, o = a.data.id, s = wx.getStorageSync("session_id");
        wx.request({
            url: getApp().globalData.https + "shoucang/",
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
                null == t.data.msg ? wx.showModal({
                    content: "请先登录",
                    success: function(t) {
                        t.confirm && wx.switchTab({
                            url: "../user/user"
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
    }
});