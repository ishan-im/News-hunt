import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {

        let {title,description,imageUrl,newsUrl,author,date,source,category} = this.props;

        let badgeColor = ''

        if(category === 'business'){
            badgeColor='bg-primary'
        }
       else if(category === 'entertainment'){
            badgeColor='bg-secondary'
        }
        else if(category === 'health'){
            badgeColor='bg-warning text-dark'
        }
         else if(category ==='science'){
            badgeColor='bg-info text-dark'
        }
        else if(category ==='sports'){
            badgeColor='bg-success'
        }
        else if(category ==='technology'){
            badgeColor='bg-danger'
        }else{
            badgeColor = 'bg-primary'
        }

        return (

          
            <div className="my-3">
                <div className="card" >
                <span className={`position-absolute top-0  translate-middle badge rounded-pill  ${badgeColor}`} style={{left:'90%', zIndex:'1'}}>
                                {source}
                            </span>
                    <img src={imageUrl} className="card-img-top" alt="News_Image" />
                    <div className="card-body">
                        <h5 className="card-title">{title}
                           
                        </h5>

                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author? 'Unknown':author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary btn-sm">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
