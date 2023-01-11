var t = require("../../utils/util.js"), a = require("../../wxParse/wxParse.js");

Page({
    data: {
        typeid: 1,
        typetxt: "同等学力",
        sexid: "1",
        typeList: [ {
            id: 1,
            name: "同等学力"
        }, {
            id: 2,
            name: "非全日制"
        }, {
            id: 3,
            name: "国际硕士"
        }, {
            id: 4,
            name: "中外合办"
        }, {
            id: 5,
            name: "在职博士"
        }, {
            id: 6,
            name: "国际博士"
        }, {
            id: 7,
            name: "高级研修"
        }, {
            id: 8,
            name: "高端培训"
        } ],
        xueliList: [],
        timeList: [],
        region: [],
        birthday: "",
        timetxt: "",
        xuelitxt: "",
        agreeS: !1,
        agreeChk: "true",
        dhlx: "首页",
        selectList: [],
        multiArray: [],
        value: [ 0, 0, 0 ],
        text: "",
        id: "",
        county: "",
        province: "",
        city: ""
    },
    onLoad: function(t) {
        var a = this;
        wx.request({
            url: getApp().globalData.https + "getArea",
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                var e = t.data.data;
                console.log(e), a.setData({
                    selectList: e,
                    multiArray: [ a.toArr(e), a.toArr(e[0].children), a.toArr(e[0].children[0].children) ]
                });
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {}
        }), 1 == t.typeid ? a.setData({
            typetxt: "同等学力"
        }) : 2 == t.typeid ? a.setData({
            typetxt: "非全日制"
        }) : 3 == t.typeid ? a.setData({
            typetxt: "国际硕士"
        }) : 4 == t.typeid ? a.setData({
            typetxt: "中外合办"
        }) : 5 == t.typeid ? a.setData({
            typetxt: "在职博士"
        }) : 6 == t.typeid ? a.setData({
            typetxt: "国际博士"
        }) : 7 == t.typeid ? a.setData({
            typetxt: "高级研修"
        }) : 8 == t.typeid && a.setData({
            typetxt: "高端培训"
        }), a.setData({
            title: t.title,
            typeid: t.typeid,
            school: t.school
        }), "" != a.data.school && a.setData({
            dhlx: "学校-" + a.data.school
        }), a.xueliList(), a.year(), a.agree(), wx.showShareMenu({
            withShareTicket: !0
        });
    },
    onShareAppMessage: function(t) {
        return {
            title: "在职研究生在线报名_路灯在职研究生"
        };
    },
    picker: function(t) {
        var a = t.detail.value;
        if (this.data.selectList.length > 0) {
            var e = this.data.selectList[a[0]], i = this.data.selectList[a[0]].children[a[1]], s = this.data.selectList[a[0]].children[a[1]].children[a[2]];
            this.setData({
                text: e.name + "/" + i.name + "/" + s.name,
                province: e.id,
                city: i.id,
                county: s.id
            }), 2 != e.id && 3 != e.id && 4 != e.id && 5 != e.id || this.setData({
                city: s.id,
                county: ""
            });
        }
    },
    toArr: function(t) {
        var a = [];
        for (var e in t) a.push(t[e].name);
        return a;
    },
    columnPicker: function(t) {
        var a = t.detail.column, e = t.detail.value;
        0 === a ? this.setData({
            multiArray: [ this.data.multiArray[0], this.toArr(this.data.selectList[e].children), this.toArr(this.data.selectList[e].children[0].children) ],
            value: [ e, 0, 0 ]
        }) : 1 === a && this.setData({
            multiArray: [ this.data.multiArray[0], this.data.multiArray[1], this.toArr(this.data.selectList[this.data.value[0]].children[e].children) ],
            value: [ this.data.value[0], e, 0 ]
        });
    },
    birthdayChange: function(t) {
        this.setData({
            birthday: t.detail.value,
            rqStatus: !1
        });
    },
    choseXl: function() {
        this.setData({
            xueli: !0,
            bg: !0
        });
    },
    xueli: function(t) {
        var a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.txt;
        this.setData({
            xueliid: a,
            xuelitxt: e,
            xueli: !1,
            bg: !1,
            xlStatus: !1
        });
    },
    year: function(t) {
        var a = [], e = new Date().getFullYear();
        for (t = e - 25; t < e + 3; t++) a.unshift(t + "年");
        this.setData({
            timeList: a
        });
    },
    xueliList: function() {
        var t = this;
        wx.request({
            url: getApp().globalData.https + "xueli",
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                t.setData({
                    xueliList: a.data.data
                });
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {}
        });
    },
    agree: function() {
        var t = this;
        wx.request({
            url: getApp().globalData.https + "block/id/390",
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            success: function(e) {
                a.wxParse("agree", "html", e.data.data.data, t, 10);
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {}
        });
    },
    typeChose: function(t) {
        var a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.txt;
        this.setData({
            typeid: a,
            typetxt: e
        });
    },
    sexChose: function(t) {
        var a = t.currentTarget.dataset.sex;
        this.setData({
            sexid: a
        });
    },
    hidepop: function() {
        this.setData({
            xueli: !1,
            time: !1,
            bg: !1,
            agreeS: !1
        });
    },
    choseSj: function() {
        this.setData({
            time: !0,
            bg: !0
        });
    },
    time: function(t) {
        var a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.txt;
        this.setData({
            timeid: a,
            timetxt: e,
            time: !1,
            bg: !1,
            byStatus: !1
        });
    },
    bindRegionChange: function(t) {
        this.setData({
            region: t.detail.value,
            csStatus: !1
        });
    },
    showAgree: function() {
        this.setData({
            agreeS: !0,
            bg: !0
        });
    },
    hideAgree: function() {
        this.setData({
            agreeS: !1,
            bg: !1
        });
    },
    chk: function(t) {
        "" == t.detail.value ? this.setData({
            agreeChk: "false"
        }) : this.setData({
            agreeChk: "true"
        });
    },
    formSubmit: function(t) {
        console.log(this.data.dhlx);
        var a = wx.getStorageSync("session_id");
        return "" == t.detail.value.xx ? (this.setData({
            xxTips: "不能为空",
            xxStatus: !0
        }), !1) : t.detail.value.xx.length > 40 ? (this.setData({
            xxTips: "输入格式错误",
            xxStatus: !0
        }), !1) : "" == t.detail.value.zy ? (this.setData({
            zyTips: "不能为空",
            zyStatus: !0
        }), !1) : t.detail.value.zy.length < 2 ? (this.setData({
            zyTips: "输入格式错误",
            zyStatus: !0
        }), !1) : "" == t.detail.value.xm ? (this.setData({
            xmTips: "不能为空",
            xmStatus: !0
        }), !1) : t.detail.value.xm.length > 10 || t.detail.value.xm.length < 2 ? (this.setData({
            xmTips: "输入格式错误",
            xmStatus: !0
        }), !1) : "" == t.detail.value.rq ? (this.setData({
            rqTips: "不能为空",
            rqStatus: !0
        }), !1) : "" == t.detail.value.dh ? (this.setData({
            dhTips: "不能为空",
            dhStatus: !0
        }), !1) : /^1[34578]\d{9}$/.test(t.detail.value.dh) ? "" == t.detail.value.yx ? (this.setData({
            yxTips: "不能为空",
            yxStatus: !0
        }), !1) : t.detail.value.yx.match(/^[A-Za-z0-9._%-]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,4}$/) ? "" == t.detail.value.xl ? (this.setData({
            xlTips: "不能为空",
            xlStatus: !0
        }), !1) : "" == t.detail.value.by ? (this.setData({
            byTips: "不能为空",
            byStatus: !0
        }), !1) : "" == t.detail.value.cs ? (this.setData({
            csTips: "不能为空",
            csStatus: !0
        }), !1) : "false" == this.data.agreeChk ? (wx.showToast({
            title: "请勾选个人信息保护申明,请先同意授权",
            icon: "none",
            duration: 1e3
        }), !1) : void wx.request({
            url: getApp().globalData.https + "Apply",
            data: {
                xuexiao: t.detail.value.xx,
                zhuanye: t.detail.value.zy,
                xingming: t.detail.value.xm,
                xingbie: this.data.sexid,
                shengri: new Date(t.detail.value.rq).getTime() / 1e3,
                dianhua: t.detail.value.dh,
                youxiang: t.detail.value.yx,
                xueli: this.data.xueliid,
                biye: t.detail.value.by,
                chengshi: t.detail.value.cs,
                beizhu: t.detail.value.bz,
                lx: this.data.typetxt,
                laiyuanmc: getApp().globalData.laiyuanmc,
                dhlx: this.data.dhlx,
                ly: 279,
                province: this.data.province,
                city: this.data.city,
                county: this.data.county
            },
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                Cookie: "PHPSESSID=" + a + "; path=/"
            },
            method: "POST",
            success: function(t) {
                200 == t.data.status && wx.navigateTo({
                    url: "../baoming/success/index"
                });
            },
            fail: function() {},
            complete: function() {}
        }) : (this.setData({
            yxTips: "输入格式错误",
            yxStatus: !0
        }), !1) : (this.setData({
            dhTips: "输入格式错误",
            dhStatus: !0
        }), !1);
    },
    xxInt: function(t) {
        "" !== t.detail.value && this.setData({
            xxStatus: !1
        });
    },
    zyInt: function(t) {
        "" !== t.detail.value && this.setData({
            zyStatus: !1
        });
    },
    xmInt: function(t) {
        "" !== t.detail.value && this.setData({
            xmStatus: !1
        });
    },
    rqInt: function(t) {
        "" !== t.detail.value && this.setData({
            rqStatus: !1
        });
    },
    dhInt: function(t) {
        "" !== t.detail.value && this.setData({
            dhStatus: !1
        });
    },
    yxInt: function(t) {
        "" !== t.detail.value && this.setData({
            yxStatus: !1
        });
    },
    xlInt: function(t) {
        "" !== t.detail.value && this.setData({
            xlStatus: !1
        });
    },
    byInt: function(t) {
        "" !== t.detail.value && this.setData({
            byStatus: !1
        });
    },
    csInt: function(t) {
        "" !== t.detail.value && this.setData({
            csStatus: !1
        });
    },
    phone: t.phone,
    preventTouchMove: function() {}
});