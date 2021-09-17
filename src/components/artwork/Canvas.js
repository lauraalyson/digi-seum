import { React, Component } from 'react'
// import { withRouter } from 'react-router-dom'
import { Rect } from 'react-konva'
// import ArtworkCanvas from './ArtworkCanvas'

class Artwork extends Component {
  constructor (...args) {
    super(...args)
    this.state = {
      color: 'green'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({
      color: 'red'
    })
  }

  render () {
    return (
      <Rect
        x={10}
        y={10}
        width={50}
        height={50}
        fill={this.state.color}
        shadowBlur={10}
        onClick={this.handleClick}
      />
    )
  }
}
// class Canvas extends Component {
//   constructor (props) {
//     super(props)

//     this.state = {
//       url: ''
//     }
//   }

//     handleExportClick = (event) => {
//       console.log('this is the event \n', event)
//       // console.log(this.stageRef.getStage().toDataURL({ mimeType: 'image/png' }))
//       const imgUrl = this.stageRef
//         .getStage()
//         .toDataURL({ mimeType: 'image/png' })

//       console.log('this is imgURL \n', imgUrl)
//       this.setState({ url: imgUrl })
//       console.log('this is now the state of the url', this.state.url)
//     }

//     // handleShowImage = (event) => {

//     // }

//     render () {
//       return (
//         <div>
//           <Stage
//             width={700}
//             height={700}
//             ref={(node) => {
//               this.stageRef = node
//             }}>
//             <Layer>
//               <MyRect />
//               {/* <ArtworkCanvas /> */}
//             </Layer>
//           </Stage>
//           <button
//             style={{ position: 'absolute', top: '0' }}
//             onClick={this.handleExportClick}>
//                 Export stage
//           </button>
//           <p><img src={this.state.url}/>{this.state.url}</p>
//         </div>
//       )
//     }
// }

export default Artwork
