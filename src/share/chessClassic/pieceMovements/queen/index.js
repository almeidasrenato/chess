const movementsQueen = (pieces, piece, piecePosC, piecePosL, verifySquare) => {
  const returnQueenVerifySquare = (verifyPos) => {
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

  let queenMove = []

  //==========================

  for (let i = 1; parseInt(piecePosC) + i <= 8; i++) {
    let verifySquare = returnQueenVerifySquare(
      'c' + (parseInt(piecePosC) + i) + 'l' + parseInt(piecePosL)
    )

    if (
      verifySquare.status !== 'ally piece' &&
      verifySquare.status !== 'invalid position'
    ) {
      right.push(verifySquare.pos)
      if (verifySquare.status === 'enemy piece') break
    } else break
  }

  for (let i = 1; parseInt(piecePosC) - i >= 1; i++) {
    let verifySquare = returnQueenVerifySquare(
      'c' + (parseInt(piecePosC) - i) + 'l' + parseInt(piecePosL)
    )

    if (
      verifySquare.status !== 'ally piece' &&
      verifySquare.status !== 'invalid position'
    ) {
      left.push(verifySquare.pos)
      if (verifySquare.status === 'enemy piece') break
    } else break
  }

  for (let i = 1; parseInt(piecePosL) + i <= 8; i++) {
    let verifySquare = returnQueenVerifySquare(
      'c' + parseInt(piecePosC) + 'l' + (parseInt(piecePosL) + i)
    )

    if (
      verifySquare.status !== 'ally piece' &&
      verifySquare.status !== 'invalid position'
    ) {
      up.push(verifySquare.pos)
      if (verifySquare.status === 'enemy piece') break
    } else break
  }

  for (let i = 1; parseInt(piecePosL) - i >= 1; i++) {
    let verifySquare = returnQueenVerifySquare(
      'c' + parseInt(piecePosC) + 'l' + (parseInt(piecePosL) - i)
    )

    if (
      verifySquare.status !== 'ally piece' &&
      verifySquare.status !== 'invalid position'
    ) {
      down.push(verifySquare.pos)
      if (verifySquare.status === 'enemy piece') break
    } else break
  }

  //=======================

  for (
    let i = 1;
    parseInt(piecePosC) + i <= 8 && parseInt(piecePosL) + i <= 8;
    i++
  ) {
    let verifySquare = returnQueenVerifySquare(
      'c' + (parseInt(piecePosC) + i) + 'l' + (parseInt(piecePosL) + i)
    )

    if (
      verifySquare.status !== 'ally piece' &&
      verifySquare.status !== 'invalid position'
    ) {
      diagonalUpRight.push(verifySquare.pos)
      if (verifySquare.status === 'enemy piece') break
    } else break
  }

  for (
    let i = 1;
    parseInt(piecePosC) - i >= 1 && parseInt(piecePosL) + i <= 8;
    i++
  ) {
    let verifySquare = returnQueenVerifySquare(
      'c' + (parseInt(piecePosC) - i) + 'l' + (parseInt(piecePosL) + i)
    )

    if (
      verifySquare.status !== 'ally piece' &&
      verifySquare.status !== 'invalid position'
    ) {
      diagonalUpLeft.push(verifySquare.pos)
      if (verifySquare.status === 'enemy piece') break
    } else break
  }

  for (
    let i = 1;
    parseInt(piecePosC) - i >= 1 && parseInt(piecePosL) - i >= 1;
    i++
  ) {
    let verifySquare = returnQueenVerifySquare(
      'c' + (parseInt(piecePosC) - i) + 'l' + (parseInt(piecePosL) - i)
    )

    if (
      verifySquare.status !== 'ally piece' &&
      verifySquare.status !== 'invalid position'
    ) {
      diagonalDownRight.push(verifySquare.pos)
      if (verifySquare.status === 'enemy piece') break
    } else break
  }

  for (
    let i = 1;
    parseInt(piecePosC) + i <= 8 && parseInt(piecePosL) - i >= 1;
    i++
  ) {
    let verifySquare = returnQueenVerifySquare(
      'c' + (parseInt(piecePosC) + i) + 'l' + (parseInt(piecePosL) - i)
    )

    if (
      verifySquare.status !== 'ally piece' &&
      verifySquare.status !== 'invalid position'
    ) {
      diagonalDownLeft.push(verifySquare.pos)
      if (verifySquare.status === 'enemy piece') break
    } else break
  }

  //========================

  queenMove.push(...up, ...down, ...left, ...right)
  queenMove.push(
    ...diagonalUpRight,
    ...diagonalUpLeft,
    ...diagonalDownRight,
    ...diagonalDownLeft
  )

  return {
    pieceId: piece.id,
    piecePos: piece.pos,
    pieceMoves: queenMove,
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

export { movementsQueen }
