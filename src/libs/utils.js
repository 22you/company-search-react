export function parseUrl(search) {
    const obj = {};
    search = search.replace('?', '')
    const arr = search.split('&');
    arr.forEach(function(a) {
        const ar = a.split('=');
        obj[ar[0]] = ar[1]   
    });
    return obj;
}