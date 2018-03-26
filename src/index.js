import Simplex from 'perlin-simplex'

import { renderBoard, splitCoord, boardCoordinates, boardSize } from './board'

import './board.scss'


const createInitialState = (max = 1) => {
  const s = new Simplex()
  return boardCoordinates.reduce((acc, coord) => {
    const [x, y] = splitCoord(coord)
    acc[coord] = ((s.noise(x / 25, y / 25) + 1) / 2) * max
    return acc
  }, {})
}

const boardState = {
  moisture: createInitialState(255),
  altitude: createInitialState(255),
  temperature: createInitialState(255),

}

const updateBoard = () => {
  tile_moisture = boardState.moisture[coord]
}


renderBoard(boardState, boardSize)
