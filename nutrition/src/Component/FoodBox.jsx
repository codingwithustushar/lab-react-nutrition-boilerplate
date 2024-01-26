import React from 'react'

export default class FoodBox extends React.Component {
    constructor(){
        super()
        this.state={
            count:0,
            countcal:0,
        }
    }
  render() {
    let {count,countcal} = this.state
    let handelchange =(e)=>{
        this.setState({count:e.target.value})
    }
    let addCal =()=>{
        let cale = count*(this.props.cal)
        this.setState({countcal:cale})
    }
    let resetbtn=()=>{
        this.setState({count:0})
        this.setState({countcal:0})
    }
    return (
      <><div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={this.props.img} width='150px' />
          </figure> 
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{this.props.name}</strong> <br />
              <small>{this.props.cal} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" onChange={handelchange} placeholder='Enter Quantity' defaultValue={0} />
            </div>
            <div className="control">
              <button className="button is-info" onClick={addCal}>
                +
              </button>
            </div>
          </div>
        </div>
      </article>
      <div>
        <p>{count} {this.props.name} = {countcal} calories</p>
      </div>
        <button onClick={resetbtn}> Reset</button>
    </div></>
    )
  }
}