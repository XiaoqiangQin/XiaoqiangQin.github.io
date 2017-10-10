import React, {Component} from 'react'
import config from '../config'

import baseStyle from '../main.css'


class ArticleHead extends Component{
    render(){
        return <div>
            作者: { config.hello }
        </div>
    }
}

class ArticleMenu extends Component{
    render(){
        return <div className={ baseStyle.articleMenu }>
            <ul>
                <li>菜单1</li>
                <li>菜单2</li>
                <li>菜单3</li>
            </ul>
        </div>
    }
}

class Article extends Component{
    render(){
        return <div>
            <ArticleHead/>
            <div>
                实施垃圾分类数据分类数据分类数据老司机流水流水了实际付款时代峻峰老司机法律是否流水jlsbwg
                实施垃圾分类数据分类数据分类数据老司机流水流水了实际付款时代峻峰老司机法律是否流水jlsbwg
                实施垃圾分类数据分类数据分类数据老司机流水流水了实际付款时代峻峰老司机法律是否流水jlsbwg
                实施垃圾分类数据分类数据分类数据老司机流水流水了实际付款时代峻峰老司机法律是否流水jlsbwg
                实施垃圾分类数据分类数据分类数据老司机流水流水了实际付款时代峻峰老司机法律是否流水jlsbwg
                实施垃圾分类数据分类数据分类数据老司机流水流水了实际付款时代峻峰老司机法律是否流水jlsbwg
                实施垃圾分类数据分类数据分类数据老司机流水流水了实际付款时代峻峰老司机法律是否流水jlsbwg
                实施垃圾分类数据分类数据分类数据老司机流水流水了实际付款时代峻峰老司机法律是否流水jlsbwg
            </div>
            <ArticleMenu/>
        </div>
    }
}

export default Article