import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class news extends Component {

    constructor(){
        super();
        this.state = {
            "article" : [],
        }
    }

    async componentDidMount(){
        // let apikey = "cf345bf6bc834448a1ab0ed174c329c9";
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=cf345bf6bc834448a1ab0ed174c329c9"
        let data  = await fetch(url);
        let newsD = await data.json();
        this.setState({
            "article" : newsD.articles,
        });
        
    }

    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center">NewsHub - Top Headlines</h1>
                <div className="row">
                    {this.state.article.map((ele) => {

                        return <div className="col-md-4 mt-3" key={ele.url}>
                            <NewsItems title={ele.title? ele.title.slice(0,45) : ''} desc={ele.description? ele.description.slice(0,90) : ""} img={ele.urlToImage? ele.urlToImage : "https://news.cgtn.com/news/2022-07-23/Live-How-are-digital-solutions-transforming-industries-and-our-lives--1bUaKAtEp4k/img/b4f950ff2fe5481a82a2223906b8b755/b4f950ff2fe5481a82a2223906b8b755-1920.png"} url={ele.url} author={ele.author} />
                        </div>
                    })}
                   
                </div>
            </div>
        )
    }
}

export default news
