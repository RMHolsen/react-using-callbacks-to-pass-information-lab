import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: '#FFF',
    }
    // remember the selectedColor we're keeping track of is a part of the state. 
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  setSelectedColor = (color) => {
    // remember, arrow function for implicit returns and auto-bind
    this.setState({
      selectedColor: color
      // the selected color, bound in the state, is now whatever color was passed in as an arg.
    })
  }

  render() {
    return (
      // note that the color selector needs to both know the currently selected color and update it
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
      // remember that to pass a function into the child class you need to use this.functionName
      // NOT THIS.STATE.WRONG-NAME
      // oy
    )
  }
}

// render functions creates a div and puts into that div a ColorSelector component (I guess we're calling them components instead of instances now)
// and another div
// inside that other div goes the genMatrix function call
// the genMatrix bone's connected to the genRow bone, the genRow bone's connected to the Cell bone...

Matrix.defaultProps = {
  values: learnSymbol
}