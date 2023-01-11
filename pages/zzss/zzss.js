getApp(), require("../../utils/util.js");

Page({
    data: {
        scrollLeft: 0,
        schList0: [ {
            name: "中国人民大学",
            id: 2
        }, {
            name: "南开大学",
            id: 9
        }, {
            name: "华东交通大学",
            id: 253
        } ],
        schList1: [ {
            name: "中国人民大学",
            id: 2
        }, {
            name: "北京大学",
            id: 1
        }, {
            name: "华东交通大学",
            id: 253
        } ],
        schList2: [ {
            name: "美国索菲亚大学",
            id: 917
        }, {
            name: "荷兰商学院",
            id: 881
        }, {
            name: "英国华威大学",
            id: 890
        } ],
        schList3: [ {
            name: "加拿大西三一大学",
            id: 918
        }, {
            name: "澳洲阳光海岸大学",
            id: 923
        }, {
            name: "美国密苏里州立大学",
            id: 921
        } ],
        majList0: [ {
            name: "心理学",
            id: 181
        }, {
            name: "金融学",
            id: 135
        }, {
            name: "哲学",
            id: 114
        } ],
        majList1: [ {
            name: "MBA",
            id: "mba"
        }, {
            name: "工程管理专硕(MEM)",
            id: "mem"
        }, {
            name: "金融专硕(MF)",
            id: "mf"
        } ],
        majList2: [ {
            name: "工商管理(MBA)",
            id: 771
        }, {
            name: "企业管理",
            id: 773
        }, {
            name: "高级工商管理(EMBA)",
            id: 772
        } ],
        majList3: [ {
            name: "高级工商管理(EMBA)",
            id: 799
        }, {
            name: "工商管理(MBA)",
            id: 798
        } ]
    },
    onLoad: function() {
        wx.showShareMenu({
            withShareTicket: !0
        }), this.getDjl();
    },
    onShareAppMessage: function(a) {
        return {
            title: "在职硕士报名途径对比_路灯在职研究生"
        };
    },
    scrollLeft: function() {
        this.data.scrollLeft < 260 ? this.setData({
            scrollLeft: this.data.scrollLeft + 130
        }) : (this.data.scrollLeft = 260) && this.setData({
            scrollLeft: 0
        });
    },
    bm0: function(a) {
        var t = a.currentTarget.dataset.id;
        this.setData({
            bmid0: t
        });
    },
    bm1: function(a) {
        var t = a.currentTarget.dataset.id;
        this.setData({
            bmid1: t
        });
    },
    bm2: function(a) {
        var t = a.currentTarget.dataset.id;
        this.setData({
            bmid2: t
        });
    },
    bm3: function(a) {
        var t = a.currentTarget.dataset.id;
        this.setData({
            bmid3: t
        });
    },
    getDjl: function(a) {
        var t = this;
        wx.request({
            url: getApp().globalData.https + "djl",
            header: {
                "Content-Type": "application/json"
            },
            method: "GET",
            success: function(a) {
                t.setData({
                    tdxl: a.data.data.xh_cache[1],
                    zyss: a.data.data.xh_cache[2],
                    gjss: a.data.data.xh_cache[3],
                    zwhb: a.data.data.xh_cache[4],
                    zzbs: a.data.data.xh_cache[5],
                    gjbs: a.data.data.xh_cache[6],
                    gjyx: a.data.data.xh_cache[7],
                    gdpx: a.data.data.xh_cache[8]
                });
            },
            fail: function(a) {
                console.log(a);
            },
            complete: function() {}
        });
    }
});