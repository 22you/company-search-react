var getData = require('./getData')

const arr = [{
    mod: 'investment',
    url: 'https://www.tianyancha.com/pagination/invest.xhtml?ps=20&pn=1&id=22822'
}, {
    mod: 'changeinfo',
    url: 'https://www.tianyancha.com/pagination/changeinfo.xhtml?ps=5&pn=1&id=22822'
}, {
    mod: 'companyteammember',
    url: 'https://www.tianyancha.com/pagination/teamMember.xhtml?ps=5&pn=2&name=%E5%8C%97%E4%BA%AC%E7%99%BE%E5%BA%A6%E7%BD%91%E8%AE%AF%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&_=1501225449469'
}]

function test(mod) {
    const target = arr.filter(a => a.mod === mod)[0]
    if (!target) {
        return console.log('未配置该测试模块===>', mod)
    }
    getData(mod, `${target.url}&_=${Date.now()}`, function(err, data) {
        if (err) {
            return console.log(err)
        }
        console.log(data)
    })
}


test('companyteammember')

