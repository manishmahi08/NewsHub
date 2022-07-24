import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let {title, desc, img, url} = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={img} alt="" />
                    <div className="card-body">
                    <h5 className="card-title">{title.slice(0,40)}</h5>
                    <p className="card-text">{desc}...</p>
                    <a href= {url} target="_blank" rel="noreferrer" className="btn btn-primary">Read more</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItems
