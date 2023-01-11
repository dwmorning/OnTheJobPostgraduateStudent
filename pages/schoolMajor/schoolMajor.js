getApp();

var t = 2;

require("../../utils/util.js");

Page({
    data: {
        tabTxt: [ "方式", "地点" ],
        tab: [ !0, !0 ],
        typeid: "",
        majorid: "",
        wayList: [ {
            id: 0,
            title: "学校地区"
        } ],
        areaList: [],
        way_id: 0,
        area_id: 0,
        scrollH: "",
        gobottom: !0,
        loding: !0,
        nocont: !0
    },
    onLoad: function(a) {
        var e = this;
        wx.showShareMenu({
            withShareTicket: !0
        }), e.setData({
            typeid: a.typeid,
            majorid: a.majorid,
            lxid: a.lxid
        }), e.getSchool(), wx.getSystemInfo({
            success: function(t) {
                e.setData({
                    scrollH: t.windowHeight - 46
                });
            }
        }), t = 2;
    },
    onShareAppMessage: function(t) {
        return {
            title: "专业学位硕士招生学校_非全日制_路灯在职研究生"
        };
    },
    getSchool: function(t) {
        var a = this, e = a.data.typeid, o = a.data.majorid;
        wx.request({
            url: getApp().globalData.https + "ZyXuexiao/type/" + e + "/name/" + o,
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(t) {
                console.log(t.data.data), wx.showToast({
                    title: "加载中",
                    icon: "loading",
                    duration: 500
                }), a.setData({
                    areaList: t.data.data.xx_dd_arr,
                    schoolList: t.data.data.xx_list
                });
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {}
        });
    },
    filterTab: function(t) {
        var a = [ !0, !0 ], e = t.currentTarget.dataset.index;
        a[e] = !this.data.tab[e], this.setData({
            tab: a
        });
    },
    filter: function(a) {
        var e = this, o = a.currentTarget.dataset.id, i = a.currentTarget.dataset.txt, d = this.data.tabTxt, s = a.currentTarget.dataset.wayid, n = a.currentTarget.dataset.areaid;
        switch (a.currentTarget.dataset.index) {
          case "0":
            d[0] = i, d[1] = "地点", e.setData({
                tab: [ !0, !0 ],
                tabTxt: d,
                way_id: o,
                way_txt: i,
                area_id: 0
            });
            break;

          case "1":
            d[1] = i, e.setData({
                tab: [ !0, !0 ],
                tabTxt: d,
                area_id: o,
                area_txt: i
            });
        }
        wx.request({
            url: getApp().globalData.https + "ZyXuexiao/lx/" + e.data.typeid + "/fs/" + s + "/dd/" + n + "/name/" + e.data.majorid,
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(a) {
                t = 2, null == a.data.data.xx_dd_arr ? e.setData({
                    tabTxt: [ d[0], "地点" ],
                    areaList: [],
                    areaid: 0,
                    schoolList: a.data.data.xx_list
                }) : e.setData({
                    tabTxt: [ d[0], d[1] ],
                    areaList: a.data.data.xx_dd_arr,
                    schoolList: a.data.data.xx_list,
                    nocont: !0,
                    gobottom: !1
                });
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {}
        });
    },
    preventTouchMove: function() {},
    onReachBottom: function() {
        var a = this, e = a.data.area_id, o = a.data.way_id;
        a.setData({
            loding: !1,
            gobottom: !0
        }), wx.request({
            url: getApp().globalData.https + "ZyXuexiao/page/" + t + "/lx/" + a.data.typeid + "/dd/" + e + "/fs/" + o + "/name/" + a.data.majorid,
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                var e = t.data.data.xx_list, o = a.data.schoolList;
                if ("" == e) return wx.hideLoading(), a.setData({
                    gobottom: !1
                }), !1;
                for (var i = 0; i < e.length; i++) o.push(t.data.data.xx_list[i]);
                a.setData({
                    gobottom: !0
                }), a.setData({
                    schoolList: o
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