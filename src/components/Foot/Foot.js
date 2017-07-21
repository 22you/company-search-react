import React from 'react'

class Foot extends React.Component {
    render() {
        return (
            <div style={footStyle}>
                <span className="foot-span">
                    &copy; 新智资讯 2014-2015
                    <a href="mailto:contact@beyondlink.net" rel="noopener noreferrer">联系我们</a>
                    |
                    <a href="http://www.miibeian.gov.cn/" target="_blank" rel="noopener noreferrer">京ICP备11010360号-3</a>
                </span>
            </div>
        )
    }
}

const footStyle = {
    paddingTop: 10,
    width: 350,
    height: 35,
    textAlign: 'center',
    margin: '0 auto'
};

export default Foot;