import { movementsPawnLight } from './pawn'

const verifySquare = (pieces, pos, playerTypePiece) => {
  if (!pieces) return 'no pieces'

  let findPiece = pieces.find((piece) => piece.pos === pos)

  if (!findPiece) return 'no piece'

  if (findPiece && findPiece.playerTypePiece !== playerTypePiece)
    return 'enemy piece'

  if (findPiece && findPiece.playerTypePiece === playerTypePiece)
    return 'ally piece'
}

const pieceMovements = (pieces) => {
  let returnPieceMovements = pieces.map((piece) => {
    let piecePosC = piece.pos[1]
    let piecePosL = piece.pos[3]

    if (piece.typePiece === 'pawnLight') {
      return movementsPawnLight(
        pieces,
        piece,
        piecePosC,
        piecePosL,
        verifySquare
      )
    }

    return {}
  })

  return returnPieceMovements
}

export default pieceMovements
