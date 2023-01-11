getApp();

var t = 2;

require("../../utils/util.js");

Page({
    data: {
        gobottom: !0,
        loding: !0,
        sum: 0,
        wdList: [],
        wdPlace: "",
        typeid: 0,
        schoolid: 0,
        majorid: 0
    },
    onLoad: function(t) {
        wx.showShareMenu({
            withShareTicket: !0
        }), this.setData({
            typeid: t.typeid,
            majorid: t.majorid
        }), this.getWenda();
    },
    onShareAppMessage: function(t) {
        return {
            title: "在职研究生在线问答_路灯在职研究生"
        };
    },
    getWenda: function(t) {
        var a = this;
        wx.request({
            url: getApp().globalData.https + "WendaList/lx/" + a.data.typeid + "/name/" + a.data.majorid,
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(t) {
                for (var e = t.data.data, o = 0; o < e.length; o++) e[0].state = 1, e[o].state = 0;
                a.setData({
                    wdList: e
                });
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {}
        });
    },
    sumInput: function(t) {
        this.setData({
            sum: t.detail.cursor
        });
    },
    showCont: function(t) {
        var a = t.currentTarget.dataset.index;
        1 == this.data.wdList[a].state ? this.data.wdList[a].state = 0 : 0 == this.data.wdList[a].state && (this.data.wdList[a].state = 1), 
        this.setData({
            wdList: this.data.wdList
        });
    },
    bindFormSubmit: function(t) {
        if ("" == t.detail.value.textarea) return wx.showToast({
            title: "请输入您的问题",
            icon: "loading",
            duration: 1e3
        }), !1;
        var a = this;
        wx.request({
            url: getApp().globalData.https + "Wenda",
            data: {
                title: t.detail.value.textarea,
                major0: a.data.typeid,
                school_id: a.data.schoolid,
                major3: a.data.majorid
            },
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function(t) {
                200 == t.data.status && (wx.showToast({
                    title: "提交成功",
                    icon: "sucess",
                    duration: 1e3
                }), a.setData({
                    wdPlace: "",
                    sum: 0
                }), wx.request({
                    url: getApp().globalData.https + "WendaList/lx/" + a.data.typeid + "/name/" + a.data.majorid,
                    header: {
                        "Content-Type": "application/json"
                    },
                    method: "GET",
                    success: function(t) {
                        for (var e = t.data.data, o = 0; o < e.length; o++) e[0].state = 1, e[o].state = 0;
                        a.setData({
                            wdList: e
                        });
                    },
                    fail: function(t) {
                        console.log(t);
                    },
                    complete: function() {}
                }));
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    onReachBottom: function() {
        var a = this;
        a.setData({
            loding: !1,
            gobottom: !0
        }), wx.request({
            url: getApp().globalData.https + "WendaList/page/" + t + "/lx/" + a.data.typeid + "/name/" + a.data.majorid,
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                var e = t.data.data, o = a.data.wdList;
                if ("" == e) return wx.hideLoading(), a.setData({
                    gobottom: !1
                }), !1;
                for (var i = 0; i < e.length; i++) o.push(t.data.data[i]), e[i].state = 0;
                a.setData({
                    gobottom: !0
                }), a.setData({
                    wdList: o
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