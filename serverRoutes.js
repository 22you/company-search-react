const fs = require('fs')
const path = require('path');

const readData = (mod, option = {}) => {
    const dataJsonFile = path.join(__dirname, './src/libs/data.json')
    return new Promise(function(res, rej) {
        fs.readFile(dataJsonFile, 'utf-8', function(err, data) {
            if (err) {
                return rej(err)
            }
            res(JSON.parse(data)[mod] || [])
        })
    })
}

module.exports = function (app) {
    app.get('/:mod', function (req, res) { 
        const { mod } = req.params;
        readData(mod)
        .then(data => res.json({data}))
        .catch(err => res.json({
            err: err.toString()
        }))
    })
}