function e(e) {
    return (e = e.toString())[1] ? e : "0" + e;
}

module.exports = {
    formatTime: function(t, u) {
        var n = [ "YY", "Y", "M", "D", "h", "m", "s" ], r = [], s = new Date(1e3 * t), o = s.getFullYear().toString().substr(2, 4);
        for (var h in r.push(o), r.push(s.getFullYear()), r.push(e(s.getMonth() + 1)), r.push(e(s.getDate())), 
        r.push(e(s.getHours())), r.push(e(s.getMinutes())), r.push(e(s.getSeconds())), r) u = u.replace(n[h], r[h]);
        return u;
    },
    phone: function() {
        wx.makePhoneCall({
            phoneNumber: "4000052125"
        });
    }
};