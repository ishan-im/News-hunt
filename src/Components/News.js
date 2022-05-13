    import React, { Component } from 'react'

    import NewsItem from './NewsItem'

    import Spinner from './Spinner';

    import PropTypes from 'prop-types'

    // https://youtu.be/8ldFM-s54rM 

    export default class News extends Component {
     
        static defaultProps = {
            country:'in',
            pageSize: 8
          }
          
          static propTypes= {

            country:PropTypes.string,
            pageSize:PropTypes.number,
            category:PropTypes.string
          }
          
         articles = [];

      constructor(props) {
        super(props);

        this.state = {
          articles: this.articles,
          loading: false,
          page: 1,
        };
      }


      async updateNews(){

        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&page=${this.state.page}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
       
        let data = await fetch(url);
        let parsedData = await data.json();
        
        this.setState({
          articles: parsedData.articles,
          totalResults: parsedData.totalResults,
          loading: false,
        });

      }

      async componentDidMount() {

        this.updateNews();
     
      }

      handleNext = async () => {
       
        

        this.setState({
          page: this.state.page  + 1
        })

        this.updateNews()


      };

      handlePrev = async () => {
       
        

        this.setState({
          page: this.state.page  - 1
        })

        this.updateNews();

      };

      render() {
        return (
          <div className="container my-3">
            <h1 className='text-center my-4'>News Hunt Top Headlines</h1>
            {this.state.loading &&<Spinner />}
            <div className="row">

              {!this.state.loading && this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 col-sm-6" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://images.news18.com/ibnlive/uploads/2021/09/coronal-mass-ejection-163228273216x9.png"
                      }
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                      category={this.props.category}
                    />
                  </div>
                );
              })}
            </div>

            <div className="container d-flex justify-content-between">
              <button
                className="btn-primary btn "
                disabled={this.state.page <= 1}
                onClick={this.handlePrev}
              >
                &laquo; Previous
              </button>
              <button
                className="btn-primary btn "
                disabled={
                  this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)
                }
                onClick={this.handleNext}
              >
                Next &raquo;
              </button>
            </div>
          </div>
        );
      }
    }
