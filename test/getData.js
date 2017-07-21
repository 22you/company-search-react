const reqFast = require('req-fast');
const cheerio = require('cheerio');

const req = (url, callback) => { 
    reqFast(url, function (err, res) { 
        if (err) {
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
    }
};

module.exports = (mod, url, callback) => {
    obj[mod](url, callback)
}