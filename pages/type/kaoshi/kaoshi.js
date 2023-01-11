getApp();

var t = require("../../../utils/util.js"), a = 2;

Page({
    data: {
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
        }), this.getArticle(), a = 2;
    },
    onShareAppMessage: function(t) {
        return {
            title: "成绩查询_路灯在职研究生"
        };
    },
    getArticle: function(a) {
        var i = this, e = i.data.catid, o = i.data.typeid, n = i.data.majorid;
        wx.request({
            url: getApp().globalData.https + "LxKaoshi/lx/" + o + "/catid/" + e + "/name/" + n,
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
        });
    },
    onReachBottom: function() {
        var i = this, e = i.data.catid, o = i.data.typeid, n = i.data.majorid;
        i.setData({
            loding: !1,
            gobottom: !0
        }), wx.request({
            url: getApp().globalData.https + "LxKaoshi/page/" + a + "/lx/" + o + "/catid/" + e + "/name/" + n,
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