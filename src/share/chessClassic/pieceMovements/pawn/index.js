const movementsPawnLight = (
  pieces,
  piece,
  piecePosC,
  piecePosL,
  verifySquare
) => {
  let pawnMove = []
  let pawnAttackDiagonalUpLeft = undefined
  let pawnAttackDiagonalUpRight = undefined

  //Move pawn

  let verifyPos = 'c' + piecePosC + 'l' + (parseInt(piecePosL) + 1)
  let squareMoveStatus = verifySquare(pieces, verifyPos, piece.pieceColor)
  if (squareMoveStatus === 'no piece') pawnMove.push(verifyPos)

  if (piece.firstMove === true && squareMoveStatus === 'no piece') {
    let verifyPos2 = 'c' + piecePosC + 'l' + (parseInt(piecePosL) + 2)
    squareMoveStatus = verifySquare(pieces, verifyPos2, piece.pieceColor)
    if (squareMoveStatus === 'no piece') pawnMove.push(verifyPos2)
  }

  //attack pawn

  verifyPos = 'c' + (parseInt(piecePosC) - 1) + 'l' + (parseInt(piecePosL) + 1)
  let squareAttackUpLeftStatus = verifySquare(
    pieces,
    verifyPos,
    piece.pieceColor
  )

  if (squareAttackUpLeftStatus !== 'invalid position') {
    pawnAttackDiagonalUpLeft = { diagonalUpLeft: [verifyPos] }
    if (squareAttackUpLeftStatus === 'enemy piece') pawnMove.push(verifyPos)
  }

  verifyPos = 'c' + (parseInt(piecePosC) + 1) + 'l' + (parseInt(piecePosL) + 1)
  let squareAttackUpRightStatus = verifySquare(
    pieces,
    verifyPos,
    piece.pieceColor
  )

  if (squareAttackUpRightStatus !== 'invalid position') {
    pawnAttackDiagonalUpRight = { diagonalUpRight: [verifyPos] }
    if (squareAttackUpRightStatus === 'enemy piece') pawnMove.push(verifyPos)
  }

  return {
    pieceId: piece.id,
    piecePos: piece.pos,
    pieceMoves: pawnMove,
    pieceColor: piece.pieceColor,
    pieceType: piece.typePiece,
    pieceFirstMove: piece.firstMove,
    allPiecePosAttack: [
      ...(pawnAttackDiagonalUpLeft
        ? pawnAttackDiagonalUpLeft.diagonalUpLeft
        : ''),
      ...(pawnAttackDiagonalUpRight
        ? pawnAttackDiagonalUpRight.diagonalUpRight
        : ''),
    ],
    piecePosAttack: {
      ...pawnAttackDiagonalUpLeft,
      ...pawnAttackDiagonalUpRight,
    },
  }
}

const movementsPawnDark = (
  pieces,
  piece,
  piecePosC,
  piecePosL,
  verifySquare
) => {
  let pawnMove = []
  let pawnAttackDiagonalDownLeft = undefined
  let pawnAttackDiagonalDownRight = undefined

  //Move pawn

  let verifyPos = 'c' + piecePosC + 'l' + (parseInt(piecePosL) - 1)
  let squareMoveStatus = verifySquare(pieces, verifyPos, piece.pieceColor)
  if (squareMoveStatus === 'no piece') pawnMove.push(verifyPos)

  if (piece.firstMove === true && squareMoveStatus === 'no piece') {
    let verifyPos2 = 'c' + piecePosC + 'l' + (parseInt(piecePosL) - 2)
    squareMoveStatus = verifySquare(pieces, verifyPos2, piece.pieceColor)
    if (squareMoveStatus === 'no piece') pawnMove.push(verifyPos2)
  }

  //attack pawn
  verifyPos = 'c' + (parseInt(piecePosC) - 1) + 'l' + (parseInt(piecePosL) - 1)
  let squareAttackUpLeftStatus = verifySquare(
    pieces,
    verifyPos,
    piece.pieceColor
  )

  if (squareAttackUpLeftStatus !== 'invalid position') {
    pawnAttackDiagonalDownLeft = { diagonalDownLeft: [verifyPos] }
    if (squareAttackUpLeftStatus === 'enemy piece') pawnMove.push(verifyPos)
  }

  verifyPos = 'c' + (parseInt(piecePosC) + 1) + 'l' + (parseInt(piecePosL) - 1)
  let squareAttackUpRightStatus = verifySquare(
    pieces,
    verifyPos,
    piece.pieceColor
  )

  if (squareAttackUpRightStatus !== 'invalid position') {
    pawnAttackDiagonalDownRight = { diagonalDownRight: [verifyPos] }
    if (squareAttackUpRightStatus === 'enemy piece') pawnMove.push(verifyPos)
  }

  return {
    pieceId: piece.id,
    piecePos: piece.pos,
    pieceMoves: pawnMove,
    pieceColor: piece.pieceColor,
    pieceType: piece.typePiece,
    pieceFirstMove: piece.firstMove,
    allPiecePosAttack: [
      ...(pawnAttackDiagonalDownLeft
        ? pawnAttackDiagonalDownLeft.diagonalDownLeft
        : ''),
      ...(pawnAttackDiagonalDownRight
        ? pawnAttackDiagonalDownRight.diagonalDownRight
        : ''),
    ],
    piecePosAttack: {
      ...pawnAttackDiagonalDownLeft,
      ...pawnAttackDiagonalDownRight,
    },
  }
}

export { movementsPawnLight, movementsPawnDark }
