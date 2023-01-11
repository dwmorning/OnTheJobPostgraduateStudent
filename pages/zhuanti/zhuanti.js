getApp();

var t = 2;

require("../../utils/util.js");

Page({
    data: {
        gobottom: !0,
        loding: !0
    },
    onLoad: function() {
        wx.showShareMenu({
            withShareTicket: !0
        }), this.getZhuanti();
    },
    onShareAppMessage: function(t) {
        return {
            title: "在职研究生招生专题_路灯在职研究生"
        };
    },
    getZhuanti: function(t) {
        var a = this;
        wx.request({
            url: getApp().globalData.https + "ZhuanTiList",
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(t) {
                a.setData({
                    ztList: t.data.data
                });
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {}
        });
    },
    onReachBottom: function() {
        var a = this;
        a.setData({
            loding: !1,
            gobottom: !0
        }), wx.request({
            url: getApp().globalData.https + "ZhuanTiList/page/" + t,
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                var o = t.data.data, e = a.data.ztList;
                if ("" == o) return wx.hideLoading(), a.setData({
                    gobottom: !1
                }), !1;
                for (var n = 0; n < o.length; n++) e.push(t.data.data[n]);
                a.setData({
                    gobottom: !0
                }), a.setData({
                    ztList: e
                }), wx.hideLoading();
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {
                t += 1, a.setData({
                    loding: !0
                });
            }
        });
    }
});