import { React, Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Stage, Layer } from 'react-konva'
// import ArtworkCanvas from './ArtworkCanvas'

class Canvas extends Component {
handleExportClick = () => {
  console.log(
    this.stageRef.getStage().toDataURL({ mimeType: 'image/png', quality: 1 }))
}

render () {
  return (
    <div>
      <Stage
        width={700}
        height={700}
        ref={(node) => {
          this.stageRef = node
        }}
      >
        <Layer>
          {/* <ArtworkCanvas /> */}
        </Layer>
      </Stage>
      <button
        style={{ position: 'absolute', top: '0' }}
        onClick={this.handleExportClick}>
                Export stage
      </button>
    </div>
  )
}
}

export default withRouter(Canvas)
