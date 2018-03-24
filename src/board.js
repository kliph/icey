// Renders well between ≈[6, whatever] to ≈[22, whatever]
export const boardSize = [22, 2]

export const splitCoord = (coordString) => coordString.split(',').map(x => parseInt(x, 10))

export const generateBoardCoordinates = () => {
  const result = []
  for (let y = 0; y < boardSize[1]; y++) {
    for (let x = 0; x < boardSize[0]; x++) {
      result.push(x + ',' + y)
    }
  }
  return result
}

const renderHex = (state, coord) => {
  const [x, y] = splitCoord(coord)

  const moisture = state.moisture[coord]
  const altitude = state.altitude[coord]
  const temperature = state.temperature[coord]

  const isGap = x == 0 && y % 2 == 0
  const cls = isGap ? ' hex-gap' : ''

  const color = temperature
  // const bgColor = 'background-color: rgb(' + color + ', ' + color + ', ' + color + ');'
  const bgColor = 'background-color: hsl(' + temperature + ', ' + altitude / 2.55 + '%, ' + moisture / 2.55 + '%);'
  return (
    '<div class="hex' + cls + '" style="' + bgColor + '">' +
      '<div class="inner">' +
        '<div style="color: rgb(0, 0,'+ moisture +')">'+
          moisture +
        '</div>' +
        '<div style="color: rgb(0, '+ altitude +', 0)">'+
          altitude +
        '</div>' +
        '<div style="color: rgb('+ temperature +', 0, 0)">'+
          temperature +
        '</div>' +
      '</div>' +
      '<div class="corner-1"></div>' +
      '<div class="corner-2"></div>' +
    '</div>'
  )
}

export const renderBoard = (state, boardSize) => {
  const boardHtml = boardCoordinates.reduce((acc, coord) => {
    acc += renderHex(state, coord)
    return acc
  }, '')

  const boardElement = document.getElementById('board')
  boardElement.style.setProperty('--col-count', boardSize[0]);
  boardElement.style.setProperty('--row-count', boardSize[1]);
  boardElement.innerHTML = boardHtml
}


export const boardCoordinates = generateBoardCoordinates()
