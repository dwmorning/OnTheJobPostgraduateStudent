Page({
    data: {
        userData: {
            nickname: "",
            tel: ""
        }
    },
    onLoad: function() {
        var t = this, a = wx.getStorageSync("session_id"), e = wx.getStorageSync("id");
        wx.request({
            url: getApp().globalData.https + "myInfo",
            data: {
                id: e
            },
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                Cookie: "PHPSESSID=" + a + "; path=/"
            },
            method: "POST",
            success: function(a) {
                200 == a.data.status ? t.setData({
                    userData: a.data.data
                }) : t.setData({
                    userData: []
                });
            }
        });
    },
    loginOut: function() {
        wx.setStorageSync("quit", "true"), getApp().globalData.hasLogin = !1, wx.switchTab({
            url: "../../user/user"
        });
    }
});