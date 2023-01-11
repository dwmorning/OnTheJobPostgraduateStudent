getApp();

var a = 2;

require("../../utils/util.js");

Page({
    data: {
        tabTxt: [ "学校", "地点", "筛选", "" ],
        tab: [ !0, !0, !0, !0 ],
        sortList: [ {
            id: 1,
            name: "价格从高到低"
        }, {
            id: 2,
            name: "价格从低到高"
        } ],
        typeid: "",
        areaListz: [],
        school_id: 0,
        area_id: 0,
        areaz_id: 0,
        fee_id: 0,
        ban_id: 0,
        sort_id: 0,
        scrollH: "",
        allArea: !1,
        gobottom: !0,
        loding: !0,
        nocont: !0
    },
    onLoad: function(a) {
        var t = this;
        wx.showShareMenu({
            withShareTicket: !0
        }), t.setData({
            typeid: a.typeid,
            majorid: a.majorid
        }), t.getRules(), wx.getSystemInfo({
            success: function(a) {
                t.setData({
                    scrollH: a.windowHeight - 46
                });
            }
        });
    },
    onShareAppMessage: function(a) {
        return {
            title: "非全日制招生简章_路灯在职研究生"
        };
    },
    jumpToSch: function(a) {
        var t = a.currentTarget.dataset.malt;
        this.setData({
            schView: t
        });
    },
    getRules: function(a) {
        var t = this;
        wx.request({
            url: getApp().globalData.https + "ZyJzSx/lx/" + t.data.typeid + "/name/" + t.data.majorid,
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
                    schoolList: a.data.data.xx_pinyin_arr,
                    areaList: a.data.data.dd_arr,
                    feeList: a.data.data.xf_arr,
                    banList: a.data.data.fs_arr,
                    jzList: a.data.data.jz_list
                });
            },
            fail: function(a) {
                console.log(a);
            },
            complete: function() {}
        });
    },
    filterTab: function(a) {
        var t = [ !0, !0, !0, !0 ], e = a.currentTarget.dataset.index;
        t[e] = !this.data.tab[e], this.setData({
            tab: t
        });
    },
    filter: function(t) {
        var e = this, d = t.currentTarget.dataset.id, r = t.currentTarget.dataset.txt, i = this.data.tabTxt, s = t.currentTarget.dataset.schoolid, o = t.currentTarget.dataset.areaid, n = t.currentTarget.dataset.areazid, c = t.currentTarget.dataset.feeid, l = t.currentTarget.dataset.banid, u = t.currentTarget.dataset.sortid;
        switch (t.currentTarget.dataset.index) {
          case "0":
            i[0] = r, e.setData({
                tab: [ !0, !0, !0, !0 ],
                tabTxt: i,
                school_id: d,
                school_txt: r
            });
            break;

          case "1":
            "allArea" == t.currentTarget.dataset.area ? (wx.request({
                url: getApp().globalData.https + "ZyJzSx/lx/" + e.data.typeid + "/xx/" + s + "/name/" + e.data.majorid + "/dd/" + o + "/cs/" + n + "/xf/" + c + "/fs/" + l + "/px/" + u,
                data: {},
                header: {
                    "Content-Type": "application/json"
                },
                method: "GET",
                success: function(a) {
                    e.setData({
                        areaListz: a.data.data.cs_arr
                    });
                },
                fail: function(a) {
                    console.log(a);
                },
                complete: function() {}
            }), i[1] = r, e.setData({
                tabTxt: i,
                ztxt: r,
                allArea: !0,
                area_id: d
            })) : "allAreaz" == t.currentTarget.dataset.area ? (i[1] = r, e.setData({
                tab: [ !0, !0, !0, !0 ],
                tabTxt: i,
                areaz_id: d
            })) : (i[1] = "地点", e.setData({
                tab: [ !0, !0, !0, !0 ],
                tabTxt: i,
                areaz_id: d,
                area_id: d,
                area_txt: r,
                allArea: !1
            }));
            break;

          case "2":
            "filterFs" == t.currentTarget.dataset.filter ? e.setData({
                tab: [ !0, !0, !1, !0 ],
                ban_id: d,
                ban_txt: r
            }) : "filterXf" == t.currentTarget.dataset.filter && e.setData({
                tab: [ !0, !0, !1, !0 ],
                fee_id: d,
                fee_txt: r
            });
            break;

          case "3":
            e.setData({
                tab: [ !0, !0, !0, !0 ],
                sort_id: d
            });
        }
        wx.request({
            url: getApp().globalData.https + "ZyJzSx/lx/" + e.data.typeid + "/xx/" + s + "/name/" + e.data.majorid + "/dd/" + o + "/cs/" + n + "/xf/" + c + "/fs/" + l + "/px/" + u,
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(t) {
                a = 2, 0 == t.data.data.jz_list.length ? e.setData({
                    schoolList: t.data.data.xx_pinyin_arr,
                    areaList: t.data.data.dd_arr,
                    feeList: t.data.data.xf_arr,
                    banList: t.data.data.fs_arr,
                    jzList: t.data.data.jz_list,
                    nocont: !1,
                    gobottom: !0
                }) : e.setData({
                    schoolList: t.data.data.xx_pinyin_arr,
                    areaList: t.data.data.dd_arr,
                    feeList: t.data.data.xf_arr,
                    banList: t.data.data.fs_arr,
                    jzList: t.data.data.jz_list,
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
    resetFilter: function(t) {
        var e = this;
        e.setData({
            ban_id: 0,
            fee_id: 0
        });
        var d = t.currentTarget.dataset.schoolid, r = t.currentTarget.dataset.areaid, i = t.currentTarget.dataset.areazid, s = t.currentTarget.dataset.feeid, o = t.currentTarget.dataset.banid, n = t.currentTarget.dataset.sortid;
        wx.request({
            url: getApp().globalData.https + "ZyJzSx/lx/" + e.data.typeid + "/xx/" + d + "/name/" + e.data.majorid + "/dd/" + r + "/cs/" + i + "/xf/" + s + "/fs/" + o + "/px/" + n,
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(t) {
                0 == t.data.data.jz_list.length ? (a = 2, e.setData({
                    schoolList: t.data.data.xx_pinyin_arr,
                    areaList: t.data.data.dd_arr,
                    feeList: t.data.data.xf_arr,
                    banList: t.data.data.fs_arr,
                    jzList: t.data.data.jz_list,
                    nocont: !1,
                    gobottom: !0
                })) : e.setData({
                    schoolList: t.data.data.xx_pinyin_arr,
                    areaList: t.data.data.dd_arr,
                    feeList: t.data.data.xf_arr,
                    banList: t.data.data.fs_arr,
                    jzList: t.data.data.jz_list,
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
    hideFilter: function() {
        this.setData({
            tab: [ !0, !0, !0, !0 ]
        });
    },
    preventTouchMove: function() {},
    onReachBottom: function() {
        var t = this, e = t.data.school_id, d = t.data.majorid, r = t.data.area_id, i = t.data.areaz_id, s = t.data.fee_id, o = t.data.ban_id, n = t.data.sort_id;
        t.setData({
            loding: !1,
            gobottom: !0
        }), wx.request({
            url: getApp().globalData.https + "ZyJzSx/page/" + a + "/lx/" + t.data.typeid + "/xx/" + e + "/name/" + d + "/dd/" + r + "/cs/" + i + "/xf/" + s + "/fs/" + o + "/px/" + n,
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                var e = a.data.data.jz_list, d = t.data.jzList;
                if ("" == e) return wx.hideLoading(), t.setData({
                    gobottom: !1
                }), !1;
                for (var r = 0; r < e.length; r++) d.push(a.data.data.jz_list[r]);
                t.setData({
                    gobottom: !0
                }), t.setData({
                    jzList: d
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