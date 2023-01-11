var e = require("../../../utils/util.js");

Page({
    data: {},
    phone: e.phone,
    phonee: function() {
        wx.makePhoneCall({
            phoneNumber: "4000052125"
        });
    },
    onLoad: function() {
        wx.showShareMenu({
            withShareTicket: !0
        });
    },
    onShareAppMessage: function(e) {
        return {
            title: "在职研究生在线报名_路灯在职研究生"
        };
    }
});