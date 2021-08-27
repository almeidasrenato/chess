import { movementsPawnLight, movementsPawnDark } from './pawn'
import { movementsHorse } from './horse'
import { movementsTower } from './tower'
import { movementsBishop } from './bishop'
import { movementsQueen } from './queen'
import { movementsKing } from './king'

const verifySquare = (pieces, pos, pieceColor) => {
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

  console.log(findPiece)

  if (
    findPiece &&
    findPiece.pieceColor !== pieceColor &&
    findPiece.typePiece !== 'king'
  )
    return 'enemy piece'

  if (findPiece && findPiece.pieceColor === pieceColor) return 'ally piece'
}

const returnAttackPosPiece = (pieceMovements, turn) => {
  let enemy = pieceMovements.filter((item) => item.pieceColor !== turn)

  let allEnemyAttackPos = enemy.map((item) => item.allPiecePosAttack)

  allEnemyAttackPos = allEnemyAttackPos.reduce(
    (list, sub) => list.concat(sub),
    []
  )

  let enemyAttack = enemy.filter((item) => item.allPiecePosAttack.length > 0)

  return { enemyAttack: enemyAttack, allEnemyAttackPos: allEnemyAttackPos }
}

const ReturnRemoveMovementsKing = (
  returnPieceMovements,
  AttackPosPiece,
  turn
) => {
  console.log('returnPieceMovements', returnPieceMovements)
  console.log('AttackPosPiece', AttackPosPiece)

  let newReturnPieceMovements = returnPieceMovements.map((item) => {
    //Remove movements king ally
    if (item.pieceType === 'king' && item.pieceColor === turn) {
      let newMoveKing = item.pieceMoves.filter(
        (item) =>
          item !==
          AttackPosPiece.allEnemyAttackPos.find((item2) => item2 === item)
      )

      item.pieceMoves = newMoveKing

      return { ...item }
    }

    return { ...item }
  })

  return newReturnPieceMovements
}

const pieceMovements = (pieces, turn) => {
  let returnPieceMovements = pieces.map((piece) => {
    let piecePosC = piece.pos[1]
    let piecePosL = piece.pos[3]

    if (piece.typePiece === 'pawn' && piece.pieceColor === 'light') {
      return movementsPawnLight(
        pieces,
        piece,
        piecePosC,
        piecePosL,
        verifySquare
      )
    }

    if (piece.typePiece === 'pawn' && piece.pieceColor === 'dark') {
      return movementsPawnDark(
        pieces,
        piece,
        piecePosC,
        piecePosL,
        verifySquare
      )
    }

    if (piece.typePiece === 'horse') {
      return movementsHorse(pieces, piece, piecePosC, piecePosL, verifySquare)
    }

    if (piece.typePiece === 'tower') {
      return movementsTower(pieces, piece, piecePosC, piecePosL, verifySquare)
    }

    if (piece.typePiece === 'bishop') {
      return movementsBishop(pieces, piece, piecePosC, piecePosL, verifySquare)
    }

    if (piece.typePiece === 'queen') {
      return movementsQueen(pieces, piece, piecePosC, piecePosL, verifySquare)
    }

    if (piece.typePiece === 'king') {
      return movementsKing(pieces, piece, piecePosC, piecePosL, verifySquare)
    }

    return {
      pieceId: piece.id,
      piecePos: piece.pos,
      pieceMoves: [],
      piecePosAttack: {},
    }
  })

  let AttackPiece = returnAttackPosPiece(returnPieceMovements, turn)
  returnPieceMovements = ReturnRemoveMovementsKing(
    returnPieceMovements,
    AttackPiece,
    turn
  )

  return returnPieceMovements
}

export default pieceMovements
