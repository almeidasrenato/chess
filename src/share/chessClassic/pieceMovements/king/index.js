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

  if (
    verifySquarePos.status !== 'ally piece' &&
    verifySquarePos.status !== 'invalid position'
  )
    right.push(verifySquarePos.pos)

  verifySquarePos = undefined

  verifySquarePos = returnKingVerifySquare(
    'c' + (parseInt(piecePosC) - 1) + 'l' + parseInt(piecePosL)
  )

  if (
    verifySquarePos.status !== 'ally piece' &&
    verifySquarePos.status !== 'invalid position'
  )
    left.push(verifySquarePos.pos)

  verifySquarePos = undefined

  verifySquarePos = returnKingVerifySquare(
    'c' + parseInt(piecePosC) + 'l' + (parseInt(piecePosL) + 1)
  )

  if (
    verifySquarePos.status !== 'ally piece' &&
    verifySquarePos.status !== 'invalid position'
  )
    up.push(verifySquarePos.pos)

  verifySquarePos = undefined

  verifySquarePos = returnKingVerifySquare(
    'c' + parseInt(piecePosC) + 'l' + (parseInt(piecePosL) - 1)
  )

  if (
    verifySquarePos.status !== 'ally piece' &&
    verifySquarePos.status !== 'invalid position'
  )
    down.push(verifySquarePos.pos)

  verifySquarePos = undefined

  //=======================
  verifySquarePos = returnKingVerifySquare(
    'c' + (parseInt(piecePosC) + 1) + 'l' + (parseInt(piecePosL) + 1)
  )
  if (
    verifySquarePos.status !== 'ally piece' &&
    verifySquarePos.status !== 'invalid position'
  )
    diagonalUpRight.push(verifySquarePos.pos)
  verifySquarePos = undefined

  verifySquarePos = returnKingVerifySquare(
    'c' + (parseInt(piecePosC) - 1) + 'l' + (parseInt(piecePosL) + 1)
  )
  if (
    verifySquarePos.status !== 'ally piece' &&
    verifySquarePos.status !== 'invalid position'
  )
    diagonalUpLeft.push(verifySquarePos.pos)
  verifySquarePos = undefined

  verifySquarePos = returnKingVerifySquare(
    'c' + (parseInt(piecePosC) - 1) + 'l' + (parseInt(piecePosL) - 1)
  )
  if (
    verifySquarePos.status !== 'ally piece' &&
    verifySquarePos.status !== 'invalid position'
  )
    diagonalDownRight.push(verifySquarePos.pos)
  verifySquarePos = undefined

  verifySquarePos = returnKingVerifySquare(
    'c' + (parseInt(piecePosC) + 1) + 'l' + (parseInt(piecePosL) - 1)
  )
  if (
    verifySquarePos.status !== 'ally piece' &&
    verifySquarePos.status !== 'invalid position'
  )
    diagonalDownLeft.push(verifySquarePos.pos)

  //========================

  kingMove.push(
    ...up,
    ...down,
    ...left,
    ...right,
    ...diagonalUpRight,
    ...diagonalUpLeft,
    ...diagonalDownRight,
    ...diagonalDownLeft
  )

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
