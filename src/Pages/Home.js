import React, { Component } from "react";
import client from "./Client";
import "./main.css";

class Home extends Component {
	constructor(){
		super()
		this.state = {
			homebanner : [],
			homeFeatures : []
		}
	}
	componentDidMount(){
		client.getEntries({
            'content_type' : 'homeBanner'
          }).then( (entries) => {
            this.setState({homebanner: entries.items}) 
          })
		  client.getEntries({
            'content_type' : 'homeFeatures'
          }).then( (entries) => {
            this.setState({homeFeatures: entries.items}) 
          })
	}
	setClass = (index) =>{
		if(index===0){
		return 	"carousel-item active"
		}
		else return "carousel-item"
	}
	render() {
		return (
			<div>
				<div
					id="carouselExampleControls"
					className="carousel slide"
					data-bs-ride="carousel"
				>
				
					<div className="carousel-inner">
					{this.state.homebanner.map((item,index)=>{
                     return(	
					 <div key={index} className={this.setClass(index)}>

					 <img
						 src={item.fields.homeBannerImage.fields.file.url}
						 height="500px"
						 className="d-block w-100"
						 alt="..."
					 />
				    </div>)


					} )}
					
						
					</div>
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#carouselExampleControls"
						data-bs-slide="prev"
					>
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#carouselExampleControls"
						data-bs-slide="next"
					>
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>





				<section id="feature">
					<div className="container  text-center">
						<h2 style={{color:"#a4b3b6",textDecorationLine:'underline',textDecorationColor:"#8a6c99",textDecorationStyle:"wavy"}}>Features</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
							dolores, quaerat maxime fuga, optio obcaecati, iusto saepe placeat
							suscipit consectetur dolorem eos quia itaque maiores ex tenetur
							porro! Provident, corrupti. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Molestias praesentium non eos hic nostrum
							aspernatur repudiandae ullam maxime totam dicta qui ducimus
							consequuntur quas, saepe reiciendis assumenda ratione labore sunt?
							. Lorem
						</p>
					</div>
				
					<div className="container">
						<div className="row">
							{this.state.homeFeatures.map((item,index)=> {
								return(
							<div key={index} className="col-md-4">
								<div className="feature-wrap">
									<i className={item.fields.featureIcon}></i>
									<h2>{item.fields.featureTitle}</h2>
									<h3>{item.fields.featureDescription}</h3>
								</div>
							</div>
								)
							})}
						
                        </div>
					</div>
				</section>
				<section id="portfolio">
					<div className="container  text-center pt-4">
						<h2 style={{color:"#a4b3b6",textDecorationLine:'underline',textDecorationColor:"#8a6c99",textDecorationStyle:"wavy"}}>Portfolio</h2>
						<p className="lead">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
							sequi ullam aspernatur provident consequuntur ea, soluta
							exercitationem praesentium deleniti quae voluptatem consectetur
							commodi iste culpa, rerum et cupiditate maxime dignissimos?
						</p>
					</div>
					<div className="container">
						<input type="checkbox" id="pic-1" />
						<label for="pic-1" className="lightbox">
							<img src="http://unsplash.it/800/600?image=1" />
						</label>
						<input type="checkbox" id="pic-2" />
						<label for="pic-2" className="lightbox">
							<img src="http://unsplash.it/800/600?image=20" />
						</label>
						<input type="checkbox" id="pic-3" />
						<label for="pic-3" className="lightbox">
							<img src="http://unsplash.it/800/600?image=21" />
						</label>
						<input type="checkbox" id="pic-4" />
						<label for="pic-4" className="lightbox">
							<img src="http://unsplash.it/800/600?image=42" />
						</label>
						<input type="checkbox" id="pic-5" />
						<label for="pic-5" className="lightbox">
							<img src="http://unsplash.it/800/600?image=48" />
						</label>
						<input type="checkbox" id="pic-6" />
						<label for="pic-6" className="lightbox">
							<img src="http://unsplash.it/800/600?image=60" />
						</label>
						<input type="checkbox" id="pic-7" />
						<label for="pic-7" className="lightbox">
							<img src="http://unsplash.it/800/600?image=201" />
						</label>
						<input type="checkbox" id="pic-8" />
						<label for="pic-8" className="lightbox">
							<img src="http://unsplash.it/800/600?image=7" />
						</label>
						<input type="checkbox" id="pic-9" />
						<label for="pic-9" className="lightbox">
							<img src="http://unsplash.it/800/600?image=119" />
						</label>
						<input type="checkbox" id="pic-10" />
						<label for="pic-10" className="lightbox">
							<img src="http://unsplash.it/800/600?image=180" />
						</label>
						<input type="checkbox" id="pic-11" />
						<label for="pic-11" className="lightbox">
							<img src="http://unsplash.it/800/600?image=96" />
						</label>
						<input type="checkbox" id="pic-12" />
						<label for="pic-12" className="lightbox">
							<img src="http://unsplash.it/800/600?image=24" />
						</label>
						<div className="grid">
							<label for="pic-1" className="grid-item">
								<img src="http://unsplash.it/400/300?image=1" />
							</label>
							<label for="pic-2" className="grid-item">
								<img src="http://unsplash.it/400/300?image=20" />
							</label>
							<label for="pic-3" className="grid-item">
								<img src="http://unsplash.it/400/300?image=21" />
							</label>
							<label for="pic-4" className="grid-item">
								<img src="http://unsplash.it/400/300?image=42" />
							</label>
							<label for="pic-5" className="grid-item">
								<img src="http://unsplash.it/400/300?image=48" />
							</label>
							<label for="pic-6" className="grid-item">
								<img src="http://unsplash.it/400/300?image=60" />
							</label>
							<label for="pic-7" className="grid-item">
								<img src="http://unsplash.it/400/300?image=201" />
							</label>
							<label for="pic-8" className="grid-item">
								<img src="http://unsplash.it/400/300?image=7" />
							</label>
							<label for="pic-9" className="grid-item">
								<img src="http://unsplash.it/400/300?image=119" />
							</label>
							<label for="pic-10" className="grid-item">
								<img src="http://unsplash.it/400/300?image=180" />
							</label>
							<label for="pic-11" className="grid-item">
								<img src="http://unsplash.it/400/300?image=96" />
							</label>
							<label for="pic-12" className="grid-item">
								<img src="http://unsplash.it/400/300?image=24" />
							</label>
						</div>
					</div>
				</section>
				<section className="faqs">
				<div className="container  text-center">
						<h2 style={{color:"#a4b3b6",textDecorationLine:'underline',textDecorationColor:"#8a6c99",textDecorationStyle:"wavy"}}>FAQ's</h2>
						<p style={{fontWeight: "900"}}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
							dolores, quaerat maxime fuga, optio obcaecati, iusto saepe placeat
							suscipit consectetur dolorem eos quia itaque maiores ex tenetur
							porro! Provident, corrupti. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Molestias praesentium non eos hic nostrum
							aspernatur repudiandae ullam maxime totam dicta qui ducimus
							consequuntur quas, saepe reiciendis assumenda ratione labore sunt?
							. Lorem
						</p>
					</div>


				<div className="container">
            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                        <h4 className="panel-title">
                            <a className="first" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Heading-one
                                <span> </span>
                            </a>
                        </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                        <div className="panel-body">
                            <p>Lorem , iaculis ex. Nulla vitae ipsum diam. Pellentesque vitae metus vitae massa egestas posuere. Mauris ultricies vehicula tempor. Pellentesque justo turpis, blandit nec ex eu, tempus placerat diam. Morbi a felis commodo eros consectetur rhoncus sed eget lectus. Praesent non erat vehic</p>
                        </div>
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                        <h4 className="panel-title">
                            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Heading-Two
                                <span> </span>
                            </a>
                        </h4>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                        <div className="panel-body">
                            <p>Pellentesque justo turpis, blandit nec ex eu, tempus placerat diam. Morbi a felis commodo eros consectetur rhoncus sed eget lectus, posuere massa id, ultricies est. Pellentesque sit amet venenatis est, quis posuere ipsum.</p>
                        </div>
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingThree">
                        <h4 className="panel-title">
                            <a className="collapsed last" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Heading-Three
                                <span> </span>
                            </a>
                        </h4>
                    </div>
                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                        <div className="panel-body">
                            <p>Nulla vitae ipsum diam. Pellentesque vitae metus vitae massa egestas posuere justo turpis, blandit nec ex eu, tempus placerat diam. Morbi a felis commodo eros consectetur rhoncus sed eget lectus. Praesent non erat vehicula, posuere massa id, ultricies est. Pellentesque sit amet venenatis est, quis posuere ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>
   
</div>
				</section>
				<div className="spacer">

				</div>
			</div>
		);
	}
}

export default Home;
