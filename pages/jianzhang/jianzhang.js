getApp();

Page({
    data: {
        wayList: [ {
            id: 1,
            name: "同等学力",
            img: "tdxl"
        }, {
            id: 2,
            name: "非全日制",
            img: "zyss"
        }, {
            id: 3,
            name: "国际硕士",
            img: "gjss"
        }, {
            id: 4,
            name: "中外合办",
            img: "zwhb"
        }, {
            id: 5,
            name: "在职博士",
            img: "zzbs"
        }, {
            id: 6,
            name: "国际博士",
            img: "gjbs"
        }, {
            id: 7,
            name: "高级研修",
            img: "gjyx"
        } ]
    },
    onLoad: function() {
        wx.showShareMenu({
            withShareTicket: !0
        });
    },
    onShareAppMessage: function(i) {
        return {
            title: "在职研究生招生简章_路灯在职研究生"
        };
    }
});