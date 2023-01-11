getApp();

var a = 2;

require("../../utils/util.js");

Page({
    data: {
        tabTxt: [ "学校", "专业", "地点", "筛选", "" ],
        tab: [ !0, !0, !0, !0, !0 ],
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
        major_id: 0,
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
    onLoad: function(t) {
        var e = this;
        wx.showShareMenu({
            withShareTicket: !0
        }), e.setData({
            typeid: t.typeid,
            schoolid: t.schoolid,
            school_id: t.schoolid,
            majorid: t.majorid,
            major_id: t.majorid
        }), e.getRules(), wx.getSystemInfo({
            success: function(a) {
                e.setData({
                    scrollH: a.windowHeight - 46
                });
            }
        }), a = 2;
    },
    onShareAppMessage: function(a) {
        return {
            title: "在职研究生招生简章_路灯在职研究生"
        };
    },
    jumpToSch: function(a) {
        var t = a.currentTarget.dataset.malt;
        this.setData({
            schView: t
        });
    },
    jumpToMaj: function(a) {
        var t = a.currentTarget.dataset.malt;
        this.setData({
            majView: t
        });
    },
    getRules: function(a) {
        var t = this;
        wx.request({
            url: getApp().globalData.https + "LxJzSx/lx/" + t.data.typeid + "/xx/" + t.data.schoolid + "/zy/" + t.data.majorid,
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(a) {
                console.log(a.data.data), wx.showToast({
                    title: "加载中",
                    icon: "loading",
                    duration: 500
                }), t.setData({
                    schoolList: a.data.data.xx_pinyin_arr,
                    majorList: a.data.data.zy_pinyin_arr,
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
        var t = [ !0, !0, !0, !0, !0 ], e = a.currentTarget.dataset.index;
        t[e] = !this.data.tab[e], this.setData({
            tab: t
        });
    },
    filter: function(t) {
        a = 2;
        var e = this, r = t.currentTarget.dataset.id, d = t.currentTarget.dataset.txt, i = this.data.tabTxt, s = t.currentTarget.dataset.schoolid, o = t.currentTarget.dataset.majorid, n = t.currentTarget.dataset.areaid, c = t.currentTarget.dataset.areazid, l = t.currentTarget.dataset.feeid, u = t.currentTarget.dataset.banid, _ = t.currentTarget.dataset.sortid;
        switch (t.currentTarget.dataset.index) {
          case "0":
            i[0] = d, e.setData({
                tab: [ !0, !0, !0, !0, !0 ],
                tabTxt: i,
                school_id: r,
                schoolid: r,
                school_txt: d
            });
            break;

          case "1":
            i[1] = d, e.setData({
                tab: [ !0, !0, !0, !0, !0 ],
                tabTxt: i,
                major_id: r,
                majorid: r,
                major_txt: d
            });
            break;

          case "2":
            "allArea" == t.currentTarget.dataset.area ? (wx.request({
                url: getApp().globalData.https + "LxJzSx/lx/" + e.data.typeid + "/xx/" + s + "/zy/" + o + "/dd/" + n + "/cs/" + c + "/xf/" + l + "/fs/" + u + "/px/" + _,
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
            }), i[2] = d, e.setData({
                tabTxt: i,
                ztxt: d,
                allArea: !0,
                area_id: r
            })) : "allAreaz" == t.currentTarget.dataset.area ? (i[2] = d, e.setData({
                tab: [ !0, !0, !0, !0, !0 ],
                tabTxt: i,
                areaz_id: r
            })) : (i[2] = "地点", e.setData({
                tab: [ !0, !0, !0, !0, !0 ],
                tabTxt: i,
                areaz_id: r,
                area_id: r,
                area_txt: d,
                allArea: !1
            }));
            break;

          case "3":
            "filterFs" == t.currentTarget.dataset.filter ? e.setData({
                tab: [ !0, !0, !0, !1, !0 ],
                ban_id: r,
                ban_txt: d
            }) : "filterXf" == t.currentTarget.dataset.filter && e.setData({
                tab: [ !0, !0, !0, !1, !0 ],
                fee_id: r,
                fee_txt: d
            });
            break;

          case "4":
            e.setData({
                tab: [ !0, !0, !0, !0, !0 ],
                sort_id: r
            });
        }
        wx.request({
            url: getApp().globalData.https + "LxJzSx/lx/" + e.data.typeid + "/xx/" + s + "/zy/" + o + "/dd/" + n + "/cs/" + c + "/xf/" + l + "/fs/" + u + "/px/" + _,
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(a) {
                0 == a.data.data.jz_list.length ? e.setData({
                    schoolList: a.data.data.xx_pinyin_arr,
                    majorList: a.data.data.zy_pinyin_arr,
                    areaList: a.data.data.dd_arr,
                    feeList: a.data.data.xf_arr,
                    banList: a.data.data.fs_arr,
                    jzList: a.data.data.jz_list,
                    nocont: !1,
                    gobottom: !0
                }) : e.setData({
                    schoolList: a.data.data.xx_pinyin_arr,
                    majorList: a.data.data.zy_pinyin_arr,
                    areaList: a.data.data.dd_arr,
                    feeList: a.data.data.xf_arr,
                    banList: a.data.data.fs_arr,
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
    resetFilter: function(a) {
        var t = this;
        t.setData({
            ban_id: 0,
            fee_id: 0
        });
        var e = a.currentTarget.dataset.schoolid, r = a.currentTarget.dataset.majorid, d = a.currentTarget.dataset.areaid, i = a.currentTarget.dataset.areazid, s = a.currentTarget.dataset.feeid, o = a.currentTarget.dataset.banid, n = a.currentTarget.dataset.sortid;
        wx.request({
            url: getApp().globalData.https + "LxJzSx/lx/" + t.data.typeid + "/xx/" + e + "/zy/" + r + "/dd/" + d + "/cs/" + i + "/xf/" + s + "/fs/" + o + "/px/" + n,
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(a) {
                0 == a.data.data.jz_list.length ? t.setData({
                    schoolList: a.data.data.xx_pinyin_arr,
                    majorList: a.data.data.zy_pinyin_arr,
                    areaList: a.data.data.dd_arr,
                    feeList: a.data.data.xf_arr,
                    banList: a.data.data.fs_arr,
                    jzList: a.data.data.jz_list,
                    nocont: !1,
                    gobottom: !0
                }) : t.setData({
                    schoolList: a.data.data.xx_pinyin_arr,
                    majorList: a.data.data.zy_pinyin_arr,
                    areaList: a.data.data.dd_arr,
                    feeList: a.data.data.xf_arr,
                    banList: a.data.data.fs_arr,
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
    hideFilter: function() {
        this.setData({
            tab: [ !0, !0, !0, !0, !0 ]
        });
    },
    preventTouchMove: function() {},
    onReachBottom: function() {
        var t = this, e = t.data.schoolid, r = t.data.majorid, d = t.data.area_id, i = t.data.areaz_id, s = t.data.fee_id, o = t.data.ban_id, n = t.data.sort_id;
        t.setData({
            loding: !1,
            gobottom: !0
        }), wx.request({
            url: getApp().globalData.https + "LxJzSx/page/" + a + "/lx/" + t.data.typeid + "/xx/" + e + "/zy/" + r + "/dd/" + d + "/cs/" + i + "/xf/" + s + "/fs/" + o + "/px/" + n,
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