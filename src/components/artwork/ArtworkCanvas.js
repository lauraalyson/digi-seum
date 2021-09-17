import React, { useState, useRef } from 'react'
// import { withRouter } from 'react-router-dom'
import { Stage, Layer, Line, Text } from 'react-konva'

const ArtworkCanvas = (props) => {
  const [tool, setTool] = useState('pen')
  const [lines, setLines] = useState([])
  const isDrawing = useRef(false)

  const handleMouseDown = (e) => {
    isDrawing.current = true
    const pos = e.target.getStage().getPointerPosition()
    setLines([...lines, { tool, points: [pos.x, pos.y] }])
  }

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return
    }
    const stage = e.target.getStage()
    const point = stage.getPointerPosition()
    // eslint-disable-next-line prefer-const
    let lastLine = lines[lines.length - 1]
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y])

    // replace last
    lines.splice(lines.length - 1, 1, lastLine)
    setLines(lines.concat())
  }

  const handleMouseUp = () => {
    isDrawing.current = false
  }

  const saveDataUri = (e) => {
    console.log('This is stage: ', Stage)
    console.log('This is e: ', e)
  }

  return (

    <div>
      <select
        value={tool}
        onChange={(e) => {
          setTool(e.target.value)
        }}>
        <option value='pen'>Pen</option>
        <option value='eraser'>Eraser</option>
      </select>
      <button id='save'>Save as image</button>
      <Stage
        width={500}
        height={500}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}>
        <Layer onClick={saveDataUri}>
          <Text text='Create Artwork' x={5} y={30} />
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke='#df4b26'
              strokeWidth={5}
              tension={0.5}
              lineCap='round'
              globalCompositeOperation={
                line.tool === 'eraser' ? 'destination-out' : 'source-over'
              }
            />
          ))}
        </Layer>
      </Stage>
    </div>
  )
}

export default ArtworkCanvas
