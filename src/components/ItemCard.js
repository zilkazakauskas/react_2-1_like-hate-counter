import React, { Component } from 'react'

export default class Card extends Component {

    constructor(props) {
        super(props)

        this.state = {
            likeCount: 0,
            hateCount: 0
        }
    }


    skaiciuokLaikus = () => {
        return this.setState({
            likeCount: this.state.likeCount + 1
        });
    }

    skaiciuokHeitus = () => {
        return this.setState({
            hateCount: this.state.hateCount + 1
        });
    }

    resetinkSkaiciavima = () => {
        return this.setState({
            likeCount: 0,
            hateCount: 0
        });
    }




    render() {
        return (
            <div className="col-4 mt-2">
                <div className="card mb-4 box-shadow">
                    <div className="card-body">
                        <h2>Post</h2>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur enim reprehenderit sit ab aperiam doloribus, est nostrum sunt incidunt suscipit, saepe provident ratione debitis, animi accusantium eligendi tempora inventore similique.</p>
                        <div className="align-items-center">
                            <button type="button" className="btn btn-sm btn-success" onClick={this.skaiciuokLaikus} >Like {this.state.likeCount}</button>
                            <button type="button" className="btn btn-sm btn-danger mx-3" onClick={this.skaiciuokHeitus} >Hate {this.state.hateCount}</button>
                            <button type="button" className="btn btn-sm btn-secondary" onClick={this.resetinkSkaiciavima} >Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
