const movementsKing = (pieces, piece, piecePosC, piecePosL, verifySquare) => {
  const returnKingVerifySquare = (verifyPos) => {
    let squareMoveStatus = verifySquare(pieces, verifyPos, piece.pieceColor)

    return { status: squareMoveStatus, pos: verifyPos }
  }

  let up = []
  let down = []
  let left = []
  let right = []

  let diagonalUpRight = []
  let diagonalUpLeft = []
  let diagonalDownRight = []
  let diagonalDownLeft = []

  let kingMove = []

  //==========================

  let verifySquarePos = returnKingVerifySquare(
    'c' + (parseInt(piecePosC) + 1) + 'l' + parseInt(piecePosL)
  )

  if (verifySquarePos.status !== 'invalid position') {
    if (verifySquarePos.status === 'ally piece') {
      right.push(verifySquarePos.pos)
    } else {
      right.push(verifySquarePos.pos)
      kingMove.push(verifySquarePos.pos)
    }
  }

  verifySquarePos = undefined

  verifySquarePos = returnKingVerifySquare(
    'c' + (parseInt(piecePosC) - 1) + 'l' + parseInt(piecePosL)
  )

  if (verifySquarePos.status !== 'invalid position') {
    if (verifySquarePos.status === 'ally piece') {
      left.push(verifySquarePos.pos)
    } else {
      left.push(verifySquarePos.pos)
      kingMove.push(verifySquarePos.pos)
    }
  }

  verifySquarePos = undefined

  verifySquarePos = returnKingVerifySquare(
    'c' + parseInt(piecePosC) + 'l' + (parseInt(piecePosL) + 1)
  )

  if (verifySquarePos.status !== 'invalid position') {
    if (verifySquarePos.status === 'ally piece') {
      up.push(verifySquarePos.pos)
    } else {
      up.push(verifySquarePos.pos)
      kingMove.push(verifySquarePos.pos)
    }
  }

  verifySquarePos = undefined

  verifySquarePos = returnKingVerifySquare(
    'c' + parseInt(piecePosC) + 'l' + (parseInt(piecePosL) - 1)
  )

  if (verifySquarePos.status !== 'invalid position') {
    if (verifySquarePos.status === 'ally piece') {
      down.push(verifySquarePos.pos)
    } else {
      down.push(verifySquarePos.pos)
      kingMove.push(verifySquarePos.pos)
    }
  }

  verifySquarePos = undefined

  //=======================
  verifySquarePos = returnKingVerifySquare(
    'c' + (parseInt(piecePosC) + 1) + 'l' + (parseInt(piecePosL) + 1)
  )
  if (verifySquarePos.status !== 'invalid position') {
    if (verifySquarePos.status === 'ally piece') {
      diagonalUpRight.push(verifySquarePos.pos)
    } else {
      diagonalUpRight.push(verifySquarePos.pos)
      kingMove.push(verifySquarePos.pos)
    }
  }
  verifySquarePos = undefined

  verifySquarePos = returnKingVerifySquare(
    'c' + (parseInt(piecePosC) - 1) + 'l' + (parseInt(piecePosL) + 1)
  )
  if (verifySquarePos.status !== 'invalid position') {
    if (verifySquarePos.status === 'ally piece') {
      diagonalUpLeft.push(verifySquarePos.pos)
    } else {
      diagonalUpLeft.push(verifySquarePos.pos)
      kingMove.push(verifySquarePos.pos)
    }
  }
  verifySquarePos = undefined

  verifySquarePos = returnKingVerifySquare(
    'c' + (parseInt(piecePosC) - 1) + 'l' + (parseInt(piecePosL) - 1)
  )
  if (verifySquarePos.status !== 'invalid position') {
    if (verifySquarePos.status === 'ally piece') {
      diagonalDownRight.push(verifySquarePos.pos)
    } else {
      diagonalDownRight.push(verifySquarePos.pos)
      kingMove.push(verifySquarePos.pos)
    }
  }
  verifySquarePos = undefined

  verifySquarePos = returnKingVerifySquare(
    'c' + (parseInt(piecePosC) + 1) + 'l' + (parseInt(piecePosL) - 1)
  )
  if (verifySquarePos.status !== 'invalid position') {
    if (verifySquarePos.status === 'ally piece') {
      diagonalDownLeft.push(verifySquarePos.pos)
    } else {
      diagonalDownLeft.push(verifySquarePos.pos)
      kingMove.push(verifySquarePos.pos)
    }
  }

  //========================

  return {
    pieceId: piece.id,
    piecePos: piece.pos,
    pieceMoves: kingMove,
    pieceColor: piece.pieceColor,
    pieceType: piece.typePiece,
    allPiecePosAttack: [
      ...up,
      ...down,
      ...left,
      ...right,
      ...diagonalUpRight,
      ...diagonalUpLeft,
      ...diagonalDownRight,
      ...diagonalDownLeft,
    ],
    piecePosAttack: {
      up: up,
      down: down,
      left: left,
      right: right,
      diagonalUpRight: diagonalUpRight,
      diagonalUpLeft: diagonalUpLeft,
      diagonalDownRight: diagonalDownRight,
      diagonalDownLeft: diagonalDownLeft,
    },
  }
}

export { movementsKing }
