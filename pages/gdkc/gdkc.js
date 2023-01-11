getApp(), require("../../utils/util.js");

Page({
    data: {
        scrollLeft: 0,
        schList0: [ {
            name: "中国社会科学院研究生院",
            id: 419
        }, {
            name: "北京大学",
            id: 1
        }, {
            name: "北京师范大学",
            id: 7
        } ],
        schList1: [ {
            name: "北京大学",
            id: 1
        }, {
            name: "北京大学",
            id: 2
        }, {
            name: "北京大学",
            id: 3
        } ],
        majList0: [ {
            name: "哲学",
            id: 883
        }, {
            name: "房地产经济与管理",
            id: 910
        }, {
            name: "心理学",
            id: 890
        } ],
        majList1: [ {
            name: "国学易经",
            id: 948
        }, {
            name: "互联网",
            id: 952
        }, {
            name: "心理学",
            id: 954
        } ]
    },
    onLoad: function() {
        wx.showShareMenu({
            withShareTicket: !0
        }), this.getDjl();
    },
    onShareAppMessage: function(t) {
        return {
            title: "高端课程报名途径对比_路灯在职研究生"
        };
    },
    scrollLeft: function() {
        this.data.scrollLeft < 260 ? this.setData({
            scrollLeft: this.data.scrollLeft + 130
        }) : (this.data.scrollLeft = 260) && this.setData({
            scrollLeft: 0
        });
    },
    bm0: function(t) {
        var a = t.currentTarget.dataset.id;
        this.setData({
            bmid0: a
        });
    },
    bm1: function(t) {
        var a = t.currentTarget.dataset.id;
        this.setData({
            bmid1: a
        });
    },
    getDjl: function(t) {
        var a = this;
        wx.request({
            url: getApp().globalData.https + "djl",
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(t) {
                a.setData({
                    zzbs: t.data.data.xh_cache[5],
                    gjbs: t.data.data.xh_cache[6],
                    gjyx: t.data.data.xh_cache[7],
                    gdpx: t.data.data.xh_cache[8]
                });
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {}
        });
    }
});