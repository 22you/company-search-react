const reqFast = require('req-fast');
const cheerio = require('cheerio');

const req = (url, callback) => { 
    reqFast({
        url,
        headers: {
            Cookie: 'ssuid=9500568642; aliyungf_tc=AQAAAE+n3HrelwMA/oMsccKj0egkgb+F; csrfToken=Agl_bhS7MuJeiwQGFP0ekWMs; jsid=SEM-BAIDU-PP-SY-000214; Qs_lvt_117460=1499918787%2C1500013532; _pk_ref.6835.e431=%5B%22%22%2C%22%22%2C1500015579%2C%22https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DyywesewoeeTolOFZ3mdGC9WaKILtQ20LtcA8amyDvKLW6Ln4oK2E9yTLNIgETjNW%26wd%3D%26eqid%3Db1ea8b1900017c1300000003596863ab%22%5D; mediav=%7B%22eid%22%3A%22398779%22%2C%22ep%22%3A%22%22%2C%22vid%22%3A%22R9r%5DJpO2af%3A6yw90/7Om%22%2C%22ctn%22%3A%22%22%7D; _pk_id.6835.e431=22a3cacf69e5411c.1499918787.4.1500017561.1500015579.; Qs_pv_117460=1989582337679502000%2C4054920564768509400%2C503925282789614900%2C990554216890216600%2C3427687303544099300; bannerFlag=true; _csrf=oEHgEJH0avymb+3R3v38MA==; OA=A73fiouxHnY7Tk4pG+EJBqE3hEboUg5bwC4fXAPxJvYmtm5i6N59B8AJrPwAoXXI; _csrf_bk=5b753ac51daf8a16306fd0823c4a9e58; Hm_lvt_e92c8d65d92d534b0fc290df538b4758=1499918788,1500013533,1501225437; Hm_lpvt_e92c8d65d92d534b0fc290df538b4758=1501225449; RTYCID=e4a7379347a44cf7a0154dcb289d38f9; token=874145ae53454b7e99a9cf1ed72ae035; _utm=6dba39c830cc493195ebd54a860768b9; TYCID=533307892b0b40729a602dc709b740a4; tnet=113.44.131.254'
        }
    }, function (err, res) { 
        if (err) {
            console.log(err)
            return callback(err)
        }
        const $ = cheerio.load(res.body);
        callback(null, $('table.table.companyInfo-table tr'), $, res.body)
    })
}

const getText = (tds, index, selector = 'span') => tds.eq(index).find(selector).text().replace(/[\n\s]/g, '') || '-'

const obj = {
    investment(url, callback) {
        req(url, function (err, trs, $) { 
            if (err) {
                return callback(err)
            };
            var data = trs.map(function (i, tr) { 
                const tds = $('td', tr)
                return {
                    companyName: getText(tds, 0, 'a'),
                    person: getText(tds, 1, 'a.point.new-c4'),
                    regMoney: getText(tds, 2),
                    moeny: getText(tds, 3),
                    percent: getText(tds, 4),
                    regTime: getText(tds, 5),
                    state: getText(tds, 6),
                }
            }).get().filter(d => !!d.companyName && d.companyName !== '-')
            callback(null, JSON.stringify(data))
        })
    },
    changeinfo(url, callback) {
        req(url, function (err, trs, $) { 
            if (err) {
                return callback(err)
            };
            var data = trs.map(function (i, tr) { 
                const tds = $('td', tr)
                return {
                    time: getText(tds, 0, 'div'),
                    name: getText(tds, 1, 'div'),
                    befor: getText(tds, 2, 'div.textJustFy.changeHoverText'),
                    after: getText(tds, 3, 'div.textJustFy.changeHoverText')
                }
            }).get()
            callback(null, JSON.stringify(data))
        })
    },
    companyteammember(url, callback) {
        req(url, function (err, trs, $, body) {
            console.log(body)
        })
    }
};

module.exports = (mod, url, callback) => {
    obj[mod](url, callback)
}