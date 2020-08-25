import React, { Component } from 'react'

class Learnstate extends Component {
    constructor() {
        super()
        this.state = {
            initialLike: 0,
            img1Like: 0,
            img2Like: 0,
            img3Like: 0,
            img4Like: 0,
            img5Like: 0,
            img6Like: 0,
        }
        // this.increaseLike = this.increaseNumber.bind(this)
    }

    increaseLike = () => {
        this.setState({
            initialLike: this.state.initialLike + 1,
        })
    }

    increaseLike1 = () => {
        this.setState({
            img1Like: this.state.img1Like + 1
        })
    }

    increaseLike2 = () => {
        this.setState({
            img2Like: this.state.img2Like + 1
        })
    }

    increaseLike3 = () => {
        this.setState({
            img3Like: this.state.img3Like + 1
        })
    }

    increaseLike4 = () => {
        this.setState({
            img4Like: this.state.img4Like + 1
        })
    }

    increaseLike5 = () => {
        this.setState({
            img5Like: this.state.img5Like + 1
        })
    }

    increaseLike6 = () => {
        this.setState({
            img6Like: this.state.img6Like + 1
        })
    }

    render() {
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="card">
                                <img src="https://res.cloudinary.com/aphatheology/image/upload/v1588975437/mark-harpur-K2s_YE031CA-unsplash_if0hkm.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Nature, Flower and River</h5>
                                    <p className="card-text">The Photographer makes a good capture and the final output is really great. The colors are awesome.</p>
                                    <button className="btn btn-primary" onClick={this.increaseLike1}><i class="far fa-thumbs-up fa-2x"></i></button> 
                                    <span>{this.state.img1Like} Likes</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="card">
                                <img src="https://res.cloudinary.com/aphatheology/image/upload/v1588975408/luca-bravo-zAjdgNXsMeg-unsplash_tiupfy.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Nature, Mountain, River and Building</h5>
                                    <p className="card-text">What a nice story captured by the Photographer, this is absolutely great.</p>
                                    <button className="btn btn-primary" onClick={this.increaseLike2}><i class="far fa-thumbs-up fa-2x"></i></button> 
                                    <span>{this.state.img2Like} Likes</span>
                                </div>
                            </div>                            
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="card">
                                <img src="https://res.cloudinary.com/aphatheology/image/upload/v1588975440/pietro-de-grandi-T7K4aEPoGGk-unsplash_dblbgn.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Nature, River, Mountain and Fishermen</h5>
                                    <p className="card-text">A great capture of how the works of the Fishermen looks like.</p>
                                    <button className="btn btn-primary" onClick={this.increaseLike3}><i class="far fa-thumbs-up fa-2x"></i></button> 
                                    <span>{this.state.img3Like} Likes</span>
                                </div>
                            </div>                            
                        </div>    

                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="card">
                                <img src="https://res.cloudinary.com/aphatheology/image/upload/v1591695643/homepage_hero_hmpqiv.png" className="card-img-top" alt="..." style={{width: "100%"}} />
                                <div className="card-body">
                                    <h5 className="card-title">Woman, Home and Bed</h5>
                                    <p className="card-text">A great capture of a Woman having a nice time on her bed.</p>
                                    <button className="btn btn-primary" onClick={this.increaseLike4}><i class="far fa-thumbs-up fa-2x"></i></button> 
                                    <span>{this.state.img4Like} Likes</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="card">
                                <img src="https://res.cloudinary.com/aphatheology/image/upload/v1597913690/cat_w1lmes.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Cat, Table and Flower</h5>
                                    <p className="card-text">Cat are always calm in most Pictures, they exhibit the opposite side of them when the Camera is not on them. A nice table!</p>
                                    <button className="btn btn-primary" onClick={this.increaseLike5}><i class="far fa-thumbs-up fa-2x"></i></button> 
                                    <span>{this.state.img5Like} Likes</span>
                                </div>
                            </div>                            
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="card">
                                <img src="https://res.cloudinary.com/aphatheology/image/upload/v1587212852/IMG_20200418_131052_0_2_hxee9k.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Mustapha Abdulkareem | Aphatheology</h5>
                                    <p className="card-text">The brain behind this amazing work. Thanks for stopping by, have a nice time!</p>
                                    <button className="btn btn-primary" onClick={this.increaseLike6}><i class="far fa-thumbs-up fa-2x"></i></button> 
                                    <span>{this.state.img6Like} Likes</span>
                                </div>
                            </div>                            
                        </div>                          

                    </div>


                </div>
                
                





                
            </div>
        )
    }
}

// 

export default Learnstate;