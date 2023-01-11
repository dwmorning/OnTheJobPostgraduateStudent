getApp();

var t = require("../../utils/util.js"), i = 2;

Page({
    data: {
        titList: [ {
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
        }, {
            id: 51,
            title: "成绩"
        }, {
            id: 62,
            title: "复试"
        }, {
            id: 49,
            title: "面试"
        }, {
            id: 64,
            title: "调剂"
        } ],
        catid: 5,
        gobottom: !0,
        loding: !0
    },
    onLoad: function() {
        wx.showShareMenu({
            withShareTicket: !0
        }), this.getArticle();
    },
    onShareAppMessage: function(t) {
        return {
            title: "在职研究生资讯信息_路灯在职研究生"
        };
    },
    getArticle: function(i) {
        var a = this, e = a.data.catid;
        wx.request({
            url: getApp().globalData.https + "ArticleList/catid/" + e,
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(i) {
                for (var e = i.data.data, o = 0; o < e.length; o++) {
                    var n = e[o].inputtime;
                    e[o].inputtime = t.formatTime(n, "Y-M-D");
                }
                a.setData({
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
        var a = t.currentTarget.dataset.id;
        this.setData({
            catid: a
        }), wx.showToast({
            title: "加载中",
            icon: "loading",
            duration: 500
        }), this.getArticle(), wx.pageScrollTo({
            scrollTop: 0,
            duration: 300
        }), i = 2;
    },
    onReachBottom: function() {
        var a = this, e = a.data.catid;
        a.setData({
            loding: !1,
            gobottom: !0
        }), wx.request({
            url: getApp().globalData.https + "ArticleList/page/" + i + "/catid/" + e,
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(i) {
                for (var e = i.data.data, o = a.data.zixunList, n = 0; n < e.length; n++) {
                    var l = e[n].inputtime;
                    e[n].inputtime = t.formatTime(l, "Y-M-D");
                }
                if ("" == e) return wx.hideLoading(), a.setData({
                    gobottom: !1
                }), !1;
                for (n = 0; n < e.length; n++) o.push(i.data.data[n]);
                a.setData({
                    gobottom: !0
                }), a.setData({
                    zixunList: o
                }), wx.hideLoading();
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {
                i += 1, a.setData({
                    loding: !0
                });
            }
        });
    }
});