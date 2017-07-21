import React from 'react'
import Mytable from '../libs/component/MyTable'

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

export function creatComponent(mod, columns) {
    class Children extends React.Component {
        constructor(props) {
            super(props)
        }
        render() {
            return <Mytable mod={mod} columns={[]}/>
        }
    }
    return Children
}