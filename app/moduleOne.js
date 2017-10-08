import React, {Component} from 'react'
import config from './config'

import baseStyle from './main.css'

class Hello extends Component{
    render(){
        return <div className={baseStyle.hello}>
            {config.hello}
        </div>
    }
}

export default Hello