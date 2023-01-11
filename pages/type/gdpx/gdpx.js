getApp();

var a = 2;

require("../../../utils/util.js");

Page({
    data: {
        tabTxt: [ "专业", "地点", "学费", "" ],
        tab: [ !0, !0, !0, !0 ],
        sortList: [ {
            id: 1,
            name: "价格从高到低"
        }, {
            id: 2,
            name: "价格从低到高"
        } ],
        areaListz: [],
        major_id: 0,
        area_id: 0,
        cs_id: 0,
        fee_id: 0,
        sort_id: 0,
        areaz_id: 0,
        scrollH: "",
        allArea: !1,
        gobottom: !0,
        loding: !0,
        nocont: !0
    },
    onLoad: function(a) {
        wx.showShareMenu({
            withShareTicket: !0
        });
        var t = this;
        t.setData({
            majorid: a.majorid
        }), t.getGdpx(), wx.getSystemInfo({
            success: function(a) {
                t.setData({
                    scrollH: a.windowHeight - 46
                });
            }
        });
    },
    onShareAppMessage: function(a) {
        return {
            title: "高端培训招生信息网_路灯在职研究生"
        };
    },
    filterTab: function(a) {
        var t = [ !0, !0, !0, !0 ], e = a.currentTarget.dataset.index;
        t[e] = !this.data.tab[e], this.setData({
            tab: t
        });
    },
    filter: function(a) {
        var t = this, e = a.currentTarget.dataset.id, r = a.currentTarget.dataset.txt, d = this.data.tabTxt, o = a.currentTarget.dataset.majorid, i = a.currentTarget.dataset.areaid, s = a.currentTarget.dataset.areazid, n = a.currentTarget.dataset.feeid, c = a.currentTarget.dataset.sortid;
        switch (a.currentTarget.dataset.index) {
          case "0":
            d[0] = r, t.setData({
                tab: [ !0, !0, !0, !0 ],
                tabTxt: d,
                major_id: e,
                majorid: e,
                major_txt: r
            });
            break;

          case "1":
            "allArea" == a.currentTarget.dataset.area ? (wx.request({
                url: getApp().globalData.https + "GdpxJz/zy/" + o + "/dd/" + i + "/cs/" + s + "/xf/" + n + "/px/" + c,
                data: {},
                header: {
                    "Content-Type": "application/json"
                },
                method: "GET",
                success: function(a) {
                    t.setData({
                        areaListz: a.data.data.cs_arr
                    });
                },
                fail: function(a) {
                    console.log(a);
                },
                complete: function() {}
            }), d[1] = r, t.setData({
                tabTxt: d,
                ztxt: r,
                allArea: !0,
                area_id: e,
                areaid: e
            })) : "allAreaz" == a.currentTarget.dataset.area ? (d[1] = r, t.setData({
                tab: [ !0, !0, !0, !0 ],
                tabTxt: d,
                areaz_id: e
            })) : (d[1] = "地点", t.setData({
                tab: [ !0, !0, !0, !0 ],
                tabTxt: d,
                areaz_id: e,
                area_id: e,
                area_txt: r,
                allArea: !1
            }));
            break;

          case "2":
            d[2] = r, t.setData({
                tab: [ !0, !0, !0, !0 ],
                tabTxt: d,
                fee_id: e,
                fee_txt: r
            });
            break;

          case "3":
            t.setData({
                tab: [ !0, !0, !0, !0 ],
                sort_id: e
            });
        }
        wx.request({
            url: getApp().globalData.https + "GdpxJz/zy/" + o + "/dd/" + i + "/cs/" + s + "/xf/" + n + "/px/" + c,
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(a) {
                0 == a.data.data.jz_list.length ? t.setData({
                    majorList: a.data.data.zy_arr,
                    areaList: a.data.data.dd_arr,
                    feeList: a.data.data.xf_arr,
                    jzList: a.data.data.jz_list,
                    nocont: !1,
                    gobottom: !0
                }) : t.setData({
                    majorList: a.data.data.zy_arr,
                    areaList: a.data.data.dd_arr,
                    feeList: a.data.data.xf_arr,
                    jzList: a.data.data.jz_list,
                    nocont: !0,
                    gobottom: !1
                });
            },
            fail: function(a) {
                console.log(a);
            },
            complete: function() {}
        });
    },
    getGdpx: function(a) {
        var t = this;
        wx.request({
            url: getApp().globalData.https + "GdpxJz/zy/" + t.data.majorid,
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(a) {
                wx.showToast({
                    title: "加载中",
                    icon: "loading",
                    duration: 500
                }), t.setData({
                    majorList: a.data.data.zy_arr,
                    areaList: a.data.data.dd_arr,
                    feeList: a.data.data.xf_arr,
                    jzList: a.data.data.jz_list
                });
            },
            fail: function(a) {
                console.log(a);
            },
            complete: function() {}
        });
    },
    preventTouchMove: function() {},
    onReachBottom: function() {
        var t = this, e = t.data.majorid, r = t.data.area_id, d = t.data.cs_id, o = t.data.fee_id, i = t.data.sort_id;
        t.setData({
            loding: !1,
            gobottom: !0
        }), wx.request({
            url: getApp().globalData.https + "GdpxJz/page/" + a + "/zy/" + e + "/dd/" + r + "/cs/" + d + "/xf/" + o + "/px/" + i,
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                var e = a.data.data.jz_list, r = t.data.jzList;
                if ("" == e) return wx.hideLoading(), t.setData({
                    gobottom: !1
                }), !1;
                for (var d = 0; d < e.length; d++) r.push(a.data.data.jz_list[d]);
                t.setData({
                    gobottom: !0
                }), t.setData({
                    jzList: r
                }), wx.hideLoading();
            },
            fail: function(a) {
                console.log(a);
            },
            complete: function() {
                a += 1, t.setData({
                    loding: !0
                });
            }
        });
    }
});