Page({
    data: {
        list: []
    },
    onLoad: function() {
        this.getdata();
    },
    getdata: function(t) {
        var a = this, e = wx.getStorageSync("session_id");
        wx.request({
            url: getApp().globalData.https + "sclist",
            data: {
                num: 100
            },
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                Cookie: "PHPSESSID=" + e + "; path=/"
            },
            method: "GET",
            success: function(t) {
                a.setData({
                    list: t.data.data.data
                });
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {}
        });
    },
    onShow: function() {
        this.getdata();
    }
});