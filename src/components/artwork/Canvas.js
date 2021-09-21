import { React, Component } from 'react'
import { Image } from 'react-konva'
import './../../index.scss'

class Artwork extends Component {
    state = {
      isDrawing: false,
      mode: 'brush'
    }

    componentDidMount () {
      const canvas = document.createElement('canvas')
      canvas.width = 300
      canvas.height = 300
      const context = canvas.getContext('2d')

      this.setState({ canvas, context })
    }

    handleMouseDown = () => {
      this.setState({ isDrawing: true })
      const stage = this.image.parent.parent
      this.lastPointerPosition = stage.getPointerPosition()
    }

    handleMouseUp = () => {
      this.setState({ isDrawing: false })
    }

    handleMouseMove = () => {
      const { context, isDrawing, mode } = this.state

      if (isDrawing) {
        context.strokeStyle = 'rgb(45,41,34)'
        context.lineJoin = 'round'
        context.lineWidth = 5

        if (mode === 'brush') {
          context.globalCompositeOperation = 'source-over'
        } else if (mode === 'eraser') {
          context.globalCompositeOperation = 'destination-out'
        }
        context.beginPath()

        let localPos = {
          x: this.lastPointerPosition.x - this.image.x(),
          y: this.lastPointerPosition.y - this.image.y()
        }

        context.moveTo(localPos.x, localPos.y)

        const stage = this.image.parent.parent

        const pos = stage.getPointerPosition()
        localPos = {
          x: pos.x - this.image.x(),
          y: pos.y - this.image.y()
        }

        context.lineTo(localPos.x, localPos.y)
        context.closePath()
        context.stroke()
        this.lastPointerPosition = pos
        this.image.getLayer().draw()
      }
    }

    render () {
      const { canvas } = this.state

      return (
        <Image
          image={canvas}
          ref={(node) => (this.image = node)}
          width={300}
          height={300}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onMouseMove={this.handleMouseMove}
        />
      )
    }
}

export default Artwork
