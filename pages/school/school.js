getApp();

var t = 2;

require("../../utils/util.js");

Page({
    data: {
        tabTxt: [ "方式", "地点" ],
        tab: [ !0, !0 ],
        typeid: "",
        wayList: [],
        areaList: [],
        way_id: 0,
        area_id: 0,
        scrollH: "",
        gobottom: !0,
        loding: !0,
        nocont: !0
    },
    onLoad: function(t) {
        var a = this;
        wx.showShareMenu({
            withShareTicket: !0
        }), a.setData({
            majortxt: t.majortxt
        }), 1 == t.typeid ? a.setData({
            typeid: 1,
            wayList: [ {
                id: 0,
                title: "学校地区"
            }, {
                id: 1,
                title: "上课地区"
            }, {
                id: 3,
                title: "网络授课"
            } ]
        }) : 2 == t.typeid ? a.setData({
            typeid: 2,
            wayList: [ {
                id: 0,
                title: "学校地区"
            } ]
        }) : 3 == t.typeid ? a.setData({
            typeid: 3,
            wayList: [ {
                id: 0,
                title: "学校地区"
            }, {
                id: 1,
                title: "上课地区"
            }, {
                id: 3,
                title: "网络授课"
            } ]
        }) : 4 == t.typeid ? a.setData({
            typeid: 4,
            wayList: [ {
                id: 0,
                title: "学校地区"
            }, {
                id: 1,
                title: "上课地区"
            } ]
        }) : 5 == t.typeid ? a.setData({
            typeid: 5,
            wayList: [ {
                id: 0,
                title: "学校地区"
            } ]
        }) : 6 == t.typeid ? a.setData({
            typeid: 6,
            wayList: [ {
                id: 0,
                title: "学校地区"
            }, {
                id: 1,
                title: "上课地区"
            } ]
        }) : 7 == t.typeid && a.setData({
            typeid: 7,
            wayList: [ {
                id: 0,
                title: "学校地区"
            }, {
                id: 1,
                title: "上课地区"
            } ]
        }), a.getSchool(), wx.getSystemInfo({
            success: function(t) {
                a.setData({
                    scrollH: t.windowHeight - 46
                });
            }
        });
    },
    onShareAppMessage: function(t) {
        return {
            title: "在职研究生招生学校_路灯在职研究生"
        };
    },
    getSchool: function(t) {
        var a = this, e = a.data.typeid;
        wx.request({
            url: getApp().globalData.https + "LxXuexiao/lx/" + e,
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(t) {
                wx.showToast({
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
        var e = this, i = a.currentTarget.dataset.id, o = a.currentTarget.dataset.txt, d = this.data.tabTxt, s = a.currentTarget.dataset.wayid, n = a.currentTarget.dataset.areaid;
        switch (a.currentTarget.dataset.index) {
          case "0":
            d[0] = o, d[1] = "地点", e.setData({
                tab: [ !0, !0 ],
                tabTxt: d,
                way_id: i,
                way_txt: o,
                area_id: 0
            });
            break;

          case "1":
            d[1] = o, e.setData({
                tab: [ !0, !0 ],
                tabTxt: d,
                area_id: i,
                area_txt: o
            });
        }
        wx.request({
            url: getApp().globalData.https + "LxXuexiao/lx/" + e.data.typeid + "/fs/" + s + "/dd/" + n,
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(a) {
                t = 2, null == a.data.data.xx_dd_arr ? e.setData({
                    tabTxt: [ d[0] ]
                }) : (null == d[1] && (d[1] = "地点"), e.setData({
                    tabTxt: [ d[0], d[1] ],
                    areaList: a.data.data.xx_dd_arr,
                    schoolList: a.data.data.xx_list,
                    nocont: !0,
                    gobottom: !1
                }));
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {}
        });
    },
    preventTouchMove: function() {},
    onReachBottom: function() {
        var a = this, e = a.data.area_id, i = a.data.way_id;
        a.setData({
            loding: !1,
            gobottom: !0
        }), wx.request({
            url: getApp().globalData.https + "LxXuexiao/page/" + t + "/lx/" + a.data.typeid + "/dd/" + e + "/fs/" + i,
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                var e = t.data.data.xx_list, i = a.data.schoolList;
                if ("" == e) return wx.hideLoading(), a.setData({
                    gobottom: !1
                }), !1;
                for (var o = 0; o < e.length; o++) i.push(t.data.data.xx_list[o]);
                a.setData({
                    gobottom: !0
                }), a.setData({
                    schoolList: i
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