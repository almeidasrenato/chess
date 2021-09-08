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

const verifyCheck = (AttackPosPiece, kingAlly) =>
  AttackPosPiece.allEnemyAttackPos.find((item) => item === kingAlly.piecePos)
    ? true
    : false

const returnRemoveMovementsKing = (
  returnPieceMovements,
  AttackPosPiece,
  turn
) => {
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

const returnRemoveMovementsAlly = (
  pieces,
  returnPieceMovements,
  AttackPosPiece,
  turn
) => {
  let allyMovements = returnPieceMovements.filter(
    (item) => item.pieceColor === turn
  )
  let kingAlly = returnPieceMovements.find(
    (item) => item.pieceType === 'king' && item.pieceColor === turn
  )

  let newReturnPieceMovements = returnPieceMovements

  let check = verifyCheck(AttackPosPiece, kingAlly)

  let pieceAttack = undefined

  if (check) {
    //========================================

    let pieceAttack = AttackPosPiece.enemyAttack.find((element) =>
      element.allPiecePosAttack.find(
        (element2) => element2 === kingAlly.piecePos
      )
    )

    let attackDirection = [pieceAttack.piecePosAttack].map((element) => {
      if (element.up) {
        if (element.up.find((item) => item === kingAlly.piecePos))
          return element.up
      }

      if (element.down) {
        if (element.down.find((item) => item === kingAlly.piecePos))
          return element.down
      }

      if (element.left) {
        if (element.left.find((item) => item === kingAlly.piecePos))
          return element.left
      }

      if (element.right) {
        if (element.right.find((item) => item === kingAlly.piecePos))
          return element.right
      }

      if (element.diagonalUpRight) {
        if (element.diagonalUpRight.find((item) => item === kingAlly.piecePos))
          return element.diagonalUpRight
      }

      if (element.diagonalUpLeft) {
        if (element.diagonalUpLeft.find((item) => item === kingAlly.piecePos))
          return element.diagonalUpLeft
      }

      if (element.diagonalDownRight) {
        if (
          element.diagonalDownRight.find((item) => item === kingAlly.piecePos)
        )
          return element.diagonalDownRight
      }

      if (element.diagonalDownLeft) {
        if (element.diagonalDownLeft.find((item) => item === kingAlly.piecePos))
          return element.diagonalDownLeft
      }
      return []
    })[0]

    newReturnPieceMovements = newReturnPieceMovements.map((element2) => {
      if (element2.pieceColor === turn && element2.pieceType !== 'king') {
        let newPieceMoves = element2.pieceMoves.filter(
          (element3) =>
            element3 ===
              attackDirection.find((element4) => element3 === element4) ||
            element3 === pieceAttack.piecePos
        )

        return { ...element2, pieceMoves: newPieceMoves }
      }
      return { ...element2 }
    })

    pieceAttack = undefined

    //========================================
  } else {
    allyMovements.forEach((element) => {
      element.pieceMoves.forEach((element2) => {
        pieces.forEach((element3, index3) => {
          let newPieces = pieces.map((element4, index4) => {
            if (index3 === index4 && element4.id === element.pieceId) {
              pieceAttack = pieces.find((item) => item.pos === element2)
              return { ...element4, pos: element2 }
            }
            return { ...element4 }
          })

          pieceAttack = undefined

          //==============================================================================
          let newPiecesMovements = pieceMovements(newPieces, turn, true)
          let AttackPiece2 = returnAttackPosPiece(newPiecesMovements, turn)
          let check2 = verifyCheck(AttackPiece2, kingAlly)

          pieceAttack = AttackPiece2.enemyAttack.find((element) =>
            element.allPiecePosAttack.find(
              (element2) => element2 === kingAlly.piecePos
            )
          )

          if (check2) {
            newReturnPieceMovements = newReturnPieceMovements.map(
              (element5) => {
                if (element5.pieceId === element3.id) {
                  element5.pieceMoves = element5.pieceMoves.filter((item) => {
                    return item !== element2 || item === pieceAttack.piecePos
                  })
                }
                return { ...element5 }
              }
            )
          }

          pieceAttack = undefined

          //===============================================================================
        })
      })
    })
  }

  return newReturnPieceMovements
}

const pieceMovements = (pieces, turn, checkMove) => {
  // let end, start
  // start = new Date()

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

  if (!checkMove) {
    returnRemoveMovementsKing(returnPieceMovements, AttackPiece, turn)
  }

  if (!checkMove) {
    returnPieceMovements = returnRemoveMovementsAlly(
      pieces,
      returnPieceMovements,
      AttackPiece,
      turn
    )
  }

  //=====================================================
  // end = new Date()

  // console.log('Operation took ' + (end.getTime() - start.getTime()) + ' msec')

  return returnPieceMovements
}

export default pieceMovements
