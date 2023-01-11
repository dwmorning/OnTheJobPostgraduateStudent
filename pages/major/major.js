getApp(), require("../../utils/util.js");

Page({
    data: {
        typeid: "",
        majorList: [],
        hotList: [ {
            id: "mba",
            name: "MBA"
        }, {
            id: "emba",
            name: "EMBA"
        }, {
            id: "mpacc",
            name: "MPAcc"
        }, {
            id: "mem",
            name: "MEM"
        }, {
            id: "mpa",
            name: "MPA"
        }, {
            id: "mf",
            name: "MF"
        } ],
        zyss: !1,
        scrollH: ""
    },
    onLoad: function(t) {
        var e = this;
        wx.getSystemInfo({
            success: function(t) {
                e.setData({
                    winHeight: t.windowHeight
                });
            }
        }), wx.showShareMenu({
            withShareTicket: !0
        }), 2 == t.typeid ? e.setData({
            typeid: 2,
            zyss: !0,
            scrollH: e.data.winHeight - 136 - 55
        }) : e.setData({
            typeid: t.typeid,
            scrollH: e.data.winHeight - 55
        }), e.getMajor();
    },
    onShareAppMessage: function(t) {
        return {
            title: "在职研究生招生专业_路灯在职研究生"
        };
    },
    jumpTo: function(t) {
        var e = t.currentTarget.dataset.malt;
        this.setData({
            toView: e
        });
    },
    getMajor: function(t) {
        var e = this;
        wx.request({
            url: getApp().globalData.https + "zhuanye/lx/" + e.data.typeid,
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(t) {
                wx.showToast({
                    title: "加载中",
                    icon: "loading",
                    duration: 500
                }), e.setData({
                    majorList: t.data.data
                });
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {}
        });
    },
    preventTouchMove: function() {}
});