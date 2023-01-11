getApp(), require("../../utils/util.js");

Page({
    data: {
        scrollLeft: 0,
        schList0: [ {
            name: "中国社会科学院研究生院",
            id: 419
        }, {
            name: "中国科学院心理研究所",
            id: 878
        }, {
            name: "上海交通大学",
            id: 17
        } ],
        schList1: [ {
            name: "菲律宾国父大学",
            id: 911
        }, {
            name: "法国尼斯大学",
            id: 884
        }, {
            name: "荷兰商学院",
            id: 881
        } ],
        majList0: [ {
            name: "经济法学",
            id: 863
        }, {
            name: "心理学",
            id: 866
        } ],
        majList1: [ {
            name: "哲学（PHD）",
            id: 815
        }, {
            name: "工商管理（DBA）",
            id: 823
        }, {
            name: "公共管理（DPA）",
            id: 826
        } ]
    },
    onLoad: function() {
        wx.showShareMenu({
            withShareTicket: !0
        }), this.getDjl();
    },
    onShareAppMessage: function(t) {
        return {
            title: "在职博士报名途径对比_路灯在职研究生"
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