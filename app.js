App({
    onLaunch: function() {
        wx.setStorageSync("quit", "false"), wx.login({
            success: function(a) {
                a.code ? wx.request({
                    url: getApp().globalData.https + "userLogin/code/" + a.code,
                    data: {},
                    header: {
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    success: function(a) {
                        console.log(a.data.data), wx.setStorage({
                            key: "session_id",
                            data: a.data.data.session_ids
                        }), wx.setStorage({
                            key: "id",
                            data: a.data.data.session_id
                        }), wx.setStorage({
                            key: "userkey",
                            data: a.data.data.userkey
                        });
                    }
                }) : console.log("登录失败！" + a.errMsg);
            }
        });
    },
    globalData: {
        userInfo: null,
        https: "https://www.125yan.com/index.php?s=/Home/Xcx/",
        laiyuanmc: "路灯在职研究生"
    }
});