import React from 'react';

class NoData extends React.Component { 
    render() {
        return <div style={style}>
            <h1>暂无数据</h1>
        </div>
    }
}

const style = {
    margin: '0 auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 200,
    height: 200,
};

export default NoData