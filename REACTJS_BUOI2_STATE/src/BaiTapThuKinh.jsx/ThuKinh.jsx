import React, { Component } from 'react'
import dataGlass from '../dataGlasses.json'

export default class ThuKinh extends Component {

    state = {
        glasses: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    renderGlassList = () => {
        return dataGlass.map((glassItem, index) => {
            return <img onClick={() => {
                this.changeGlasses(glassItem)
            }} style={{ cursor: 'pointer', width: '110px' }} className='ml-2 p-2 border border-width-1' key={index} src={glassItem.url} />

        })
    }

    changeGlasses = (newGlasses) => {
        this.setState({
            glasses: newGlasses
        })
    }

    render() {
        return (
            <div style={{ backgroundImage: 'url(./glassesImage/background1.jpg)', backgroundSize: '2000px', minHeight: '2000px' }}>
                <div style={{ backgroundColor: 'rgba(0,0,0,.8)', minHeight: '2000px' }}>
                    <h3 style={{ backgroundColor: 'rgba(0,0,0,.3)' }} className='text-center text-light p-5'>TRY GLASSES APP ONLINE</h3>
                    <div className='container'>
                        <div className='row mt-5 text-center'>
                            <div className='col-6'>
                                <div className='position-relative'>
                                    <img className='position-absolute' style={{ width: "350px" }} src="./glassesImage/model.jpg" alt="" />
                                </div>

                                <img className='position-absolute' style={{ width: "170px", top: "113px", right: "28px", opacity: ".8" }} src={this.state.glasses.url} alt="" />
                                <div className='position-relative' style={{
                                    width: '350px', left: '270px', top: '275px', backgroundColor: 'rgba(235,127,0,.5)', textAlign: 'left', height: '151px', padding: "10px"
                                }}>
                                    <p style={{ color: 'blue', fontSize: '20px' }} className='font-weight-bold'>{this.state.glasses.name}</p>
                                    <p style={{ fontSize: '15px', fontWeight: '500', color: 'white' }}>{this.state.glasses.desc}</p>
                                </div>

                            </div>
                            <div className='col-6'>
                                <div className='position-relative'>
                                    <img className='' style={{ width: "350px" }} src="./glassesImage/model.jpg" alt="" />
                                </div>
                                <img className='position-absolute' style={{ width: "170px", top: "113px", right: "200px", opacity: ".8" }} src={this.state.glasses.url} alt="" />
                            </div>
                        </div>
                            <div className='bg-light my-5 p-5 text-center d-flex justify-content-center'>
                                {this.renderGlassList()}
                            </div>
                    </div>
                </div>



            </div >
        )
    }
}
