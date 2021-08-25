import { movementsPawnLight, movementsPawnDark } from './pawn'
import { movementsHorse } from './horse'
import { movementsTower } from './tower'
import { movementsBishop } from './bishop'
import { movementsQueen } from './queen'

const verifySquare = (pieces, pos, playerTypePiece) => {
  if (
    parseInt(pos[1]) < 1 ||
    parseInt(pos[1]) > 8 ||
    parseInt(pos[3]) < 1 ||
    parseInt(pos[3]) > 8 ||
    pos[3] === '-' ||
    pos[4] !== undefined
  )
    return 'invalid position'

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

    if (piece.typePiece === 'pawnDark') {
      return movementsPawnDark(
        pieces,
        piece,
        piecePosC,
        piecePosL,
        verifySquare
      )
    }

    if (piece.typePiece === 'horseLight' || piece.typePiece === 'horseDark') {
      return movementsHorse(pieces, piece, piecePosC, piecePosL, verifySquare)
    }

    if (piece.typePiece === 'towerLight' || piece.typePiece === 'towerDark') {
      return movementsTower(pieces, piece, piecePosC, piecePosL, verifySquare)
    }

    if (piece.typePiece === 'bishopLight' || piece.typePiece === 'bishopDark') {
      return movementsBishop(pieces, piece, piecePosC, piecePosL, verifySquare)
    }

    if (piece.typePiece === 'queenLight' || piece.typePiece === 'queenDark') {
      return movementsQueen(pieces, piece, piecePosC, piecePosL, verifySquare)
    }

    return {
      pieceId: piece.id,
      piecePos: piece.pos,
      pieceMoves: [],
      piecePosAttack: {},
    }
  })

  return returnPieceMovements
}

export default pieceMovements
