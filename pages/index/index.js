getApp(), require("../../utils/util.js");

Page({
    data: {},
    onLoad: function() {
        wx.showShareMenu({
            withShareTicket: !0
        }), this.getZhinan(), this.getRules();
    },
    onShareAppMessage: function(t) {
        return {
            title: "路灯在职研究生招生信息网"
        };
    },
    getZhinan: function(t) {
        var e = this;
        wx.request({
            url: getApp().globalData.https + "ZhuantiApi",
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(t) {
                e.setData({
                    zhiNan: t.data.data
                });
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {}
        });
    },
    getRules: function(t) {
        var e = this;
        wx.request({
            url: getApp().globalData.https + "JzSx/lx/1",
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(t) {
                e.setData({
                    jzList: t.data.data.jz_list
                });
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {}
        });
    }
});