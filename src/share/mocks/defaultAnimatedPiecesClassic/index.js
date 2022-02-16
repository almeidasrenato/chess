import animatedPieceLight from '../../../assets/pieces/assetsAnimatedClassicPieces/assetsAnimatedPiecesLight'

const defaultAnimatedPiecesClassic = (props) => [
  {
    id: 2,
    typePiece: 'queen',
    pieceColor: 'light',
    pos: 'c4l1',
    firstMove: true,
    qtdMoves: 0,
    activeAnimation: 'a1',
    src: animatedPieceLight('queen'),
  },
]

export default defaultAnimatedPiecesClassic
