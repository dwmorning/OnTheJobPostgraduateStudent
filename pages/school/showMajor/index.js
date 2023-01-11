getApp();

var t = require("../../../utils/util.js"), a = 2, e = "";

Page({
    data: {
        tabTxtt: [ {
            catid: 0,
            name: "简章"
        }, {
            catid: 5,
            name: "报考"
        }, {
            catid: 7,
            name: "招生"
        }, {
            catid: 8,
            name: "资讯"
        }, {
            catid: 6,
            name: "公告"
        }, {
            catid: 999,
            name: "问答"
        } ],
        tabb: [ !1, !0, !0, !0, !0, !0 ],
        tabTxt: [ "方式", "学院", "专业", "地点" ],
        tab: [ !0, !0, !0, !0 ],
        schoolData: [],
        jzList: [],
        typeid: 1,
        schoolid: 0,
        way_id: 2,
        school_id: 0,
        major_id: 0,
        area_id: 0,
        areaz_id: 0,
        majortxt: "tdxl",
        schoollid: 2,
        scrollH: "",
        allArea: !1,
        gobottom: !0,
        loding: !0,
        nocont: !0,
        catid: 5,
        jzShow: !1,
        bmShow: !1,
        lxmajorid: 0,
        name: 0,
        ifWarn: !1,
        ifWarns: !1
    },
    onLoad: function(t) {
        var a = this;
        wx.showShareMenu({
            withShareTicket: !0
        }), a.setData({
            schoollid: t.schoollid,
            majortxt: t.majortxt,
            typeid: t.typeid,
            name: t.name,
            lxmajorid: t.lxid
        }), a.getSchool(), a.getInfo(), wx.getSystemInfo({
            success: function(t) {
                a.setData({
                    scrollH: t.windowHeight - 34
                });
            }
        });
    },
    onShareAppMessage: function(t) {
        return {
            title: e.title + "_路灯在职研究生"
        };
    },
    hideWarn: function() {
        this.setData({
            ifWarn: !1
        });
    },
    getInfo: function() {
        wx.getStorageSync("session_id");
        var t = wx.getStorageSync("id"), a = this;
        "true" == wx.getStorageSync("quit") ? a.setData({
            hasLogin: !1
        }) : wx.request({
            url: getApp().globalData.https + "myInfo",
            data: {
                id: t
            },
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function(t) {
                200 == t.data.status ? a.setData({
                    hasLogin: !0
                }) : a.setData({
                    hasLogin: !1
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    onShow: function() {
        this.getInfo();
    },
    getPhoneNumber: function(t) {
        var a = this;
        wx.checkSession({
            success: function() {
                var e = wx.getStorageSync("session_id"), o = wx.getStorageSync("openid"), i = wx.getStorageSync("userkey");
                null == t.detail.iv ? wx.showToast({
                    title: "为了您更好的体验,请先同意授权",
                    icon: "none",
                    duration: 2e3
                }) : wx.request({
                    url: getApp().globalData.https + "LoginInfo",
                    data: {
                        iv: t.detail.iv,
                        encryptedData: t.detail.encryptedData,
                        userkey: i,
                        openid: o,
                        laiyuanmc: getApp().globalData.laiyuanmc
                    },
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        Cookie: "PHPSESSID=" + e + "; path=/"
                    },
                    method: "GET",
                    success: function(t) {
                        200 == t.data.status ? (wx.setStorageSync("quit", "false"), wx.navigateTo({
                            url: "../../baoming/baoming?title=&typeid=" + a.data.typeid + "&school=" + a.data.schoolData.xuexiao_data.xxtitle
                        })) : 101 == t.data.status && console.log(t);
                    },
                    fail: function(t) {
                        console.log(1111);
                    }
                });
            },
            fail: function() {
                console.log("session_key 已经失效，需要重新执行登录流程"), a.wxlogin();
            }
        });
    },
    getSchool: function(t) {
        var a = this;
        wx.request({
            url: getApp().globalData.https + "SchoolData/id/" + a.data.schoollid + "/lx/" + a.data.typeid + "/urlname/" + a.data.majortxt + "/name/" + a.data.name,
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(t) {
                var o = t.data.data.list.length;
                1 != o && 2 != o && 4 != o && 5 != o && 7 != o && 8 != o || a.setData({
                    bmShow: !0
                }), 1 != o && 4 != o && 7 != o || a.setData({
                    jzShow: !0
                }), wx.showToast({
                    title: "加载中",
                    icon: "loading",
                    duration: 500
                }), a.setData({
                    schoolData: t.data.data,
                    jzList: t.data.data.jz_yrm_list,
                    areaList: t.data.data.dd_arr,
                    areaListz: t.data.data.cs_arr
                }), e = t.data.data.xuexiao_data;
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {}
        });
    },
    getArticle: function(a) {
        var e = this;
        e.data.catid;
        wx.request({
            url: getApp().globalData.https + "ArticleList/catid/" + e.data.catid + "/school_id/" + e.data.schoollid + "/lx/" + e.data.typeid + "/name/" + e.data.name,
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(a) {
                wx.showToast({
                    title: "加载中",
                    icon: "loading",
                    duration: 500
                }), "" == a.data.data ? e.setData({
                    gobottom: !0,
                    nocont: !1
                }) : e.setData({
                    nocont: !0,
                    gobottom: !1
                });
                for (var o = a.data.data, i = 0; i < o.length; i++) {
                    var n = o[i].inputtime;
                    o[i].inputtime = t.formatTime(n, "Y-M-D");
                }
                e.setData({
                    zixunList: o
                });
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {}
        });
    },
    getWenda: function(t) {
        var a = this;
        wx.request({
            url: getApp().globalData.https + "WendaList/lx/" + a.data.typeid + "/school_id/" + a.data.schoollid + "/name/" + a.data.name,
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(t) {
                wx.showToast({
                    title: "加载中",
                    icon: "loading",
                    duration: 500
                });
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
    majTap: function(t) {
        var a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.name;
        this.setData({
            lxmajorid: a,
            name: e
        }), this.getSchool(), this.getArticle(), this.getWenda();
    },
    goSchool: function() {
        wx.navigateTo({
            url: "../../school/showIndex/index?&schoollid=" + this.data.schoollid
        });
    },
    showCont: function(t) {
        var a = t.currentTarget.dataset.index;
        1 == this.data.wdList[a].state ? this.data.wdList[a].state = 0 : 0 == this.data.wdList[a].state && (this.data.wdList[a].state = 1), 
        this.setData({
            wdList: this.data.wdList
        });
    },
    filterTabb: function(t) {
        var e = [ !0, !0, !0, !0, !0, !0 ], o = t.currentTarget.dataset.index, i = t.currentTarget.dataset.catid;
        if (e[o] = !this.data.tabb[o], this.setData({
            tabb: e
        }), 0 == i) return !1;
        999 == i ? this.getWenda() : (this.setData({
            catid: t.currentTarget.dataset.catid
        }), this.getArticle()), a = 2;
    },
    filterTab: function(t) {
        var a = [ !0, !0, !0, !0 ], e = t.currentTarget.dataset.index;
        a[e] = !this.data.tab[e], this.setData({
            tab: a
        });
        var o = this, i = wx.createSelectorQuery();
        i.select("#lxHeight").boundingClientRect(), i.select("#lxTitHeight").boundingClientRect(), 
        i.exec(function(t) {
            o.setData({
                lxH: t[0].height + t[1].height
            }), wx.pageScrollTo({
                scrollTop: o.data.lxH,
                duration: 0
            });
        });
    },
    filter: function(t) {
        a = 2;
        var e = this, o = t.currentTarget.dataset.id, i = t.currentTarget.dataset.txt, n = this.data.tabTxt, d = t.currentTarget.dataset.wayid, s = t.currentTarget.dataset.schoolid, r = t.currentTarget.dataset.majorid, l = t.currentTarget.dataset.areaid, c = t.currentTarget.dataset.areazid;
        switch (t.currentTarget.dataset.index) {
          case "0":
            n[0] = i, e.setData({
                tab: [ !0, !0, !0, !0 ],
                tabTxt: n,
                way_id: o,
                wayid: o,
                way_txt: i
            });
            break;

          case "1":
            n[1] = i, e.setData({
                tab: [ !0, !0, !0, !0 ],
                tabTxt: n,
                school_id: o,
                schoolid: o,
                school_txt: i
            });
            break;

          case "2":
            n[2] = i, e.setData({
                tab: [ !0, !0, !0, !0 ],
                tabTxt: n,
                major_id: o,
                majorid: o,
                major_txt: i
            });
            break;

          case "3":
            "allArea" == t.currentTarget.dataset.area ? (wx.request({
                url: getApp().globalData.https + "SchoolData/id/" + e.data.schoollid + "/lx/" + e.data.typeid + "/urlname/" + e.data.majortxt + "/fs/" + d + "/xy/" + s + "/zy/" + r + "/dd/" + l + "/cs/" + c + "/name/" + e.data.name,
                data: {},
                header: {
                    "Content-Type": "application/json"
                },
                method: "GET",
                success: function(t) {
                    e.setData({
                        areaListz: t.data.data.cs_arr
                    });
                },
                fail: function(t) {
                    console.log(t);
                },
                complete: function() {}
            }), n[3] = i, e.setData({
                tabTxt: n,
                ztxt: i,
                allArea: !0,
                area_id: o,
                areaid: o
            })) : "allAreaz" == t.currentTarget.dataset.area ? (n[3] = i, e.setData({
                tab: [ !0, !0, !0, !0 ],
                tabTxt: n,
                areaz_id: o,
                areazid: o
            })) : (n[3] = "地点", e.setData({
                tab: [ !0, !0, !0, !0 ],
                tabTxt: n,
                areaz_id: o,
                area_id: o,
                area_txt: i,
                allArea: !1
            }));
        }
        wx.request({
            url: getApp().globalData.https + "SchoolData/id/" + e.data.schoollid + "/lx/" + e.data.typeid + "/urlname/" + e.data.majortxt + "/fs/" + d + "/xy/" + s + "/zy/" + r + "/dd/" + l + "/cs/" + c + "/name/" + e.data.name,
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(t) {
                e.setData({
                    schoolData: t.data.data,
                    jzList: t.data.data.jz_yrm_list,
                    areaList: t.data.data.dd_arr,
                    areaListz: t.data.data.cs_arr
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
        var e = this, o = e.data.catid;
        e.setData({
            loding: !1,
            gobottom: !0
        }), 0 == o ? wx.request({
            url: getApp().globalData.https + "SchoolData/page/" + a + "/id/" + e.data.schoollid + "/lx/" + e.data.typeid + "/urlname/" + e.data.majortxt + "/fs/" + e.data.wayid + "/xy/" + e.data.schoolid + "/zy/" + e.data.majorid + "/dd/" + e.data.areaid + "/cs/" + e.data.areazid + "/name/" + e.data.name,
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(t) {
                var a = t.data.data.jz_yrm_list, o = e.data.jzList;
                if ("" == a) return wx.hideLoading(), e.setData({
                    gobottom: !1
                }), !1;
                for (var i = 0; i < a.length; i++) o.push(t.data.data.jz_yrm_list[i]);
                e.setData({
                    gobottom: !0
                }), e.setData({
                    jzList: o
                }), wx.hideLoading();
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {
                a += 1, e.setData({
                    loding: !0
                });
            }
        }) : 999 == o ? wx.request({
            url: getApp().globalData.https + "WendaList/page/" + a + "/lx/" + e.data.typeid + "/school_id/" + e.data.schoollid + "/name/" + e.data.name,
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                var a = t.data.data, o = e.data.wdList;
                if ("" == a) return wx.hideLoading(), e.setData({
                    gobottom: !1
                }), !1;
                for (var i = 0; i < a.length; i++) o.push(t.data.data[i]), a[i].state = 0;
                e.setData({
                    gobottom: !0
                }), e.setData({
                    wdList: o
                }), wx.hideLoading();
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {
                a += 1, e.setData({
                    loding: !0
                });
            }
        }) : wx.request({
            url: getApp().globalData.https + "ArticleList/page/" + a + "/catid/" + e.data.catid + "/school_id/" + e.data.schoollid + "/lx/" + e.data.typeid + "/name/" + e.data.name,
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(a) {
                for (var o = a.data.data, i = e.data.zixunList, n = 0; n < o.length; n++) {
                    var d = o[n].inputtime;
                    o[n].inputtime = t.formatTime(d, "Y-M-D");
                }
                if ("" == o) return wx.hideLoading(), e.setData({
                    gobottom: !1
                }), !1;
                for (n = 0; n < o.length; n++) i.push(a.data.data[n]);
                e.setData({
                    gobottom: !0
                }), e.setData({
                    zixunList: i
                }), wx.hideLoading();
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {
                a += 1, e.setData({
                    loding: !0
                });
            }
        });
    }
});