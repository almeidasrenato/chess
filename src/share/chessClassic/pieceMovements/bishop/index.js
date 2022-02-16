const movementsBishop = (pieces, piece, piecePosC, piecePosL, verifySquare) => {
  const returnBishopVerifySquare = (verifyPos) => {
    let squareMoveStatus = verifySquare(pieces, verifyPos, piece.pieceColor)

    return { status: squareMoveStatus, pos: verifyPos }
  }

  let diagonalUpRight = []
  let diagonalUpLeft = []
  let diagonalDownRight = []
  let diagonalDownLeft = []

  let bishopMove = []

  for (
    let i = 1;
    parseInt(piecePosC) + i <= 8 && parseInt(piecePosL) + i <= 8;
    i++
  ) {
    let verifySquare = returnBishopVerifySquare(
      'c' + (parseInt(piecePosC) + i) + 'l' + (parseInt(piecePosL) + i)
    )

    if (verifySquare.status !== 'invalid position') {
      if (verifySquare.status === 'ally piece') {
        diagonalUpRight.push(verifySquare.pos)
        break
      }

      diagonalUpRight.push(verifySquare.pos)
      bishopMove.push(verifySquare.pos)
      if (verifySquare.status === 'enemy piece') break
    } else break
  }

  for (
    let i = 1;
    parseInt(piecePosC) - i >= 1 && parseInt(piecePosL) + i <= 8;
    i++
  ) {
    let verifySquare = returnBishopVerifySquare(
      'c' + (parseInt(piecePosC) - i) + 'l' + (parseInt(piecePosL) + i)
    )

    if (verifySquare.status !== 'invalid position') {
      if (verifySquare.status === 'ally piece') {
        diagonalUpLeft.push(verifySquare.pos)
        break
      }

      diagonalUpLeft.push(verifySquare.pos)
      bishopMove.push(verifySquare.pos)
      if (verifySquare.status === 'enemy piece') break
    } else break
  }

  for (
    let i = 1;
    parseInt(piecePosC) - i >= 1 && parseInt(piecePosL) - i >= 1;
    i++
  ) {
    let verifySquare = returnBishopVerifySquare(
      'c' + (parseInt(piecePosC) - i) + 'l' + (parseInt(piecePosL) - i)
    )

    if (verifySquare.status !== 'invalid position') {
      if (verifySquare.status === 'ally piece') {
        diagonalDownRight.push(verifySquare.pos)
        break
      }
      diagonalDownRight.push(verifySquare.pos)
      bishopMove.push(verifySquare.pos)
      if (verifySquare.status === 'enemy piece') break
    } else break
  }

  for (
    let i = 1;
    parseInt(piecePosC) + i <= 8 && parseInt(piecePosL) - i >= 1;
    i++
  ) {
    let verifySquare = returnBishopVerifySquare(
      'c' + (parseInt(piecePosC) + i) + 'l' + (parseInt(piecePosL) - i)
    )

    if (verifySquare.status !== 'invalid position') {
      if (verifySquare.status === 'ally piece') {
        diagonalDownLeft.push(verifySquare.pos)
        break
      }
      diagonalDownLeft.push(verifySquare.pos)
      bishopMove.push(verifySquare.pos)
      if (verifySquare.status === 'enemy piece') break
    } else break
  }

  return {
    pieceId: piece.id,
    piecePos: piece.pos,
    pieceMoves: bishopMove,
    pieceColor: piece.pieceColor,
    pieceType: piece.typePiece,
    pieceFirstMove: piece.firstMove,
    allPiecePosAttack: [
      ...diagonalUpRight,
      ...diagonalUpLeft,
      ...diagonalDownRight,
      ...diagonalDownLeft,
    ],
    piecePosAttack: {
      diagonalUpRight: diagonalUpRight,
      diagonalUpLeft: diagonalUpLeft,
      diagonalDownRight: diagonalDownRight,
      diagonalDownLeft: diagonalDownLeft,
    },
  }
}

export { movementsBishop }
