const fs = require('fs');
const path = require('path');

export default function(mod, option = {}) {
    const jsonFile = path.join(__dirname, './data.json');
    return new Promise(function(res, rej) {
        fs.readFile(jsonFile, 'utf-8', function(err, data) {
            if (err) {
                return rej(err)
            }
            try {
                return res(JSON.parse(data)[mod])
            } catch (e) {
                rej(e)
            }
        })
    })
}