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
  if (piece.firstMove === true) {
    for (let i = 1; i <= 2; i++) {
      if (parseInt(piecePosL) + i > 8) break

      let verifyPos = 'c' + piecePosC + 'l' + (parseInt(piecePosL) + i)
      let squareMoveStatus = verifySquare(
        pieces,
        verifyPos,
        piece.playerTypePiece
      )

      if (squareMoveStatus !== 'no piece') break

      if (squareMoveStatus === 'no piece') {
        pawnMove.push(verifyPos)
      }
    }
  } else {
    if (parseInt(piecePosL) + 1 <= 8) {
      let verifyPos = 'c' + piecePosC + 'l' + (parseInt(piecePosL) + 1)
      let squareMoveStatus = verifySquare(
        pieces,
        verifyPos,
        piece.playerTypePiece
      )

      if (squareMoveStatus === 'no piece') {
        pawnMove.push(verifyPos)
      }
    }
  }
  // end

  //attack pawnMove
  if (parseInt(piecePosC) - 1 >= 1 && parseInt(piecePosL) + 1 <= 8) {
    let verifyPos =
      'c' + (parseInt(piecePosC) - 1) + 'l' + (parseInt(piecePosL) + 1)
    let squareAttackUpLeftStatus = verifySquare(
      pieces,
      verifyPos,
      piece.playerTypePiece
    )

    if (squareAttackUpLeftStatus === 'enemy piece') {
      pawnAttackDiagonalUpLeft = { diagonalUpLeft: [verifyPos] }
      pawnMove.push(verifyPos)
    }
  }

  if (parseInt(piecePosC) + 1 <= 8 && parseInt(piecePosL) + 1 <= 8) {
    let verifyPos =
      'c' + (parseInt(piecePosC) + 1) + 'l' + (parseInt(piecePosL) + 1)
    let squareAttackUpRightStatus = verifySquare(
      pieces,
      verifyPos,
      piece.playerTypePiece
    )

    if (squareAttackUpRightStatus === 'enemy piece') {
      pawnAttackDiagonalUpRight = { diagonalUpRight: [verifyPos] }
      pawnMove.push(verifyPos)
    }
  }
  //end

  return {
    pieceId: piece.id,
    piecePos: piece.pos,
    pieceMoves: pawnMove,
    piecePosAttack: {
      ...pawnAttackDiagonalUpLeft,
      ...pawnAttackDiagonalUpRight,
    },
  }
}

export { movementsPawnLight }
