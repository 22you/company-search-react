var getData = require('./getData')

const arr = [{
    mod: 'investment',
    url: 'https://www.tianyancha.com/pagination/invest.xhtml?ps=20&pn=1&id=22822'
}, {
    mod: 'changeinfo',
    url: 'https://www.tianyancha.com/pagination/changeinfo.xhtml?ps=5&pn=1&id=22822'
}]

function test(mod) {
    const target = arr.filter(a => a.mod === mod)[0]
    if (!target) {
        return console.log('未配置该测试模块===>', mod)
    }
    getData(mod, `${target.url}&_=${Date.now()}`, function (err, data) {
        if (err) {
            return console.log(err)
        }
        console.log(data)
    })
}


test('changeinfo')

