getApp();

var t = require("../../../utils/util.js"), a = 2;

Page({
    data: {
        titList: [ {
            id: 0,
            title: "热门"
        }, {
            id: 5,
            title: "报考"
        }, {
            id: 7,
            title: "招生"
        }, {
            id: 8,
            title: "资讯"
        }, {
            id: 6,
            title: "公告"
        } ],
        typeid: "",
        majorid: "",
        catid: 0,
        gobottom: !0,
        loding: !0
    },
    onLoad: function(t) {
        wx.showShareMenu({
            withShareTicket: !0
        }), this.setData({
            catid: t.catid,
            typeid: t.typeid,
            majorid: t.majorid
        }), 5 == t.catid ? this.getWenti() : this.getArticle();
    },
    onShareAppMessage: function(t) {
        return {
            title: "在职研究生资讯信息_路灯在职研究生"
        };
    },
    getArticle: function(a) {
        var i = this, e = i.data.catid, o = i.data.typeid, n = i.data.majorid;
        wx.request({
            url: getApp().globalData.https + "LxNews/lx/" + o + "/catid/" + e + "/name/" + n,
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(a) {
                for (var e = a.data.data, o = 0; o < e.length; o++) {
                    var n = e[o].inputtime;
                    e[o].inputtime = t.formatTime(n, "Y-M-D");
                }
                i.setData({
                    zixunList: e
                });
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {}
        });
    },
    getWenti: function(a) {
        var i = this, e = i.data.catid, o = i.data.typeid, n = i.data.majorid;
        wx.request({
            url: getApp().globalData.https + "ArticleList/lx/" + o + "/catid/" + e + "/name/" + n,
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(a) {
                for (var e = a.data.data, o = 0; o < e.length; o++) {
                    var n = e[o].inputtime;
                    e[o].inputtime = t.formatTime(n, "Y-M-D");
                }
                i.setData({
                    zixunList: e
                });
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {}
        });
    },
    titlist: function(t) {
        var i = t.currentTarget.dataset.id;
        this.setData({
            catid: i
        }), wx.showToast({
            title: "加载中",
            icon: "loading",
            duration: 500
        }), 5 == t.currentTarget.dataset.id ? this.getWenti() : this.getArticle(), wx.pageScrollTo({
            scrollTop: 0,
            duration: 300
        }), a = 2;
    },
    onReachBottom: function() {
        var i = this, e = i.data.catid, o = i.data.typeid, n = i.data.majorid;
        i.setData({
            loding: !1,
            gobottom: !0
        }), 5 == e ? wx.request({
            url: getApp().globalData.https + "ArticleList/page/" + a + "/lx/" + o + "/catid/" + e + "/name/" + n,
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(a) {
                for (var e = a.data.data, o = i.data.zixunList, n = 0; n < e.length; n++) {
                    var d = e[n].inputtime;
                    e[n].inputtime = t.formatTime(d, "Y-M-D");
                }
                if ("" == e) return wx.hideLoading(), i.setData({
                    gobottom: !1
                }), !1;
                for (n = 0; n < e.length; n++) o.push(a.data.data[n]);
                i.setData({
                    gobottom: !0
                }), i.setData({
                    zixunList: o
                }), wx.hideLoading();
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {
                a += 1, i.setData({
                    loding: !0
                });
            }
        }) : wx.request({
            url: getApp().globalData.https + "LxNews/page/" + a + "/lx/" + o + "/catid/" + e + "/name/" + n,
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(a) {
                for (var e = a.data.data, o = i.data.zixunList, n = 0; n < e.length; n++) {
                    var d = e[n].inputtime;
                    e[n].inputtime = t.formatTime(d, "Y-M-D");
                }
                if ("" == e) return wx.hideLoading(), i.setData({
                    gobottom: !1
                }), !1;
                for (n = 0; n < e.length; n++) o.push(a.data.data[n]);
                i.setData({
                    gobottom: !0
                }), i.setData({
                    zixunList: o
                }), wx.hideLoading();
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {
                a += 1, i.setData({
                    loding: !0
                });
            }
        });
    }
});