const movementsHorse = (pieces, piece, piecePosC, piecePosL, verifySquare) => {
  let horseMove = []

  const returnHorseVerifySquare = (verifyPos) => {
    let squareMoveStatus = verifySquare(pieces, verifyPos, piece.pieceColor)

    if (squareMoveStatus !== 'invalid position') {
      if (squareMoveStatus !== 'ally piece') horseMove.push(verifyPos)
      return [verifyPos]
    }

    return []
  }

  let diagonalUpLeft = [
    ...returnHorseVerifySquare(
      'c' + (parseInt(piecePosC) - 1) + 'l' + (parseInt(piecePosL) + 2)
    ),
    ...returnHorseVerifySquare(
      'c' + (parseInt(piecePosC) - 2) + 'l' + (parseInt(piecePosL) + 1)
    ),
  ]
  let diagonalUpRight = [
    ...returnHorseVerifySquare(
      'c' + (parseInt(piecePosC) + 1) + 'l' + (parseInt(piecePosL) + 2)
    ),
    ...returnHorseVerifySquare(
      'c' + (parseInt(piecePosC) + 2) + 'l' + (parseInt(piecePosL) + 1)
    ),
  ]
  let diagonalDownLeft = [
    ...returnHorseVerifySquare(
      'c' + (parseInt(piecePosC) - 1) + 'l' + (parseInt(piecePosL) - 2)
    ),
    ...returnHorseVerifySquare(
      'c' + (parseInt(piecePosC) - 2) + 'l' + (parseInt(piecePosL) - 1)
    ),
  ]
  let diagonalDownRight = [
    ...returnHorseVerifySquare(
      'c' + (parseInt(piecePosC) + 1) + 'l' + (parseInt(piecePosL) - 2)
    ),
    ...returnHorseVerifySquare(
      'c' + (parseInt(piecePosC) + 2) + 'l' + (parseInt(piecePosL) - 1)
    ),
  ]

  return {
    pieceId: piece.id,
    piecePos: piece.pos,
    pieceMoves: horseMove,
    pieceColor: piece.pieceColor,
    pieceType: piece.typePiece,
    allPiecePosAttack: [
      ...diagonalUpLeft,
      ...diagonalUpRight,
      ...diagonalDownLeft,
      ...diagonalDownRight,
    ],
    piecePosAttack: {
      diagonalUpLeft: diagonalUpLeft,
      diagonalUpRight: diagonalUpRight,
      diagonalDownLeft: diagonalDownLeft,
      diagonalDownRight: diagonalDownRight,
    },
  }
}

export { movementsHorse }
