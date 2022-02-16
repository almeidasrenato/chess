import returnSrcQueen from './queen'

const animatedPieceLight = (piece) => {
  if (piece === 'queen') return returnSrcQueen()

  return {}
}

export default animatedPieceLight
