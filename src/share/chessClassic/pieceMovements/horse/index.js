const movementsHorse = (pieces, piece, piecePosC, piecePosL, verifySquare) => {
  let horseMove = []

  const returnHorseVerifySquare = (verifyPos) => {
    let squareMoveStatus = verifySquare(
      pieces,
      verifyPos,
      piece.playerTypePiece
    )

    if (
      squareMoveStatus !== 'ally piece' &&
      squareMoveStatus !== 'invalid position'
    )
      return [verifyPos]

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

  horseMove.push(
    ...diagonalUpLeft,
    ...diagonalUpRight,
    ...diagonalDownLeft,
    ...diagonalDownRight
  )

  return {
    pieceId: piece.id,
    piecePos: piece.pos,
    pieceMoves: horseMove,
    piecePosAttack: {
      diagonalUpLeft: diagonalUpLeft,
      diagonalUpRight: diagonalUpRight,
      diagonalDownLeft: diagonalDownLeft,
      diagonalDownRight: diagonalDownRight,
    },
  }
}

export { movementsHorse }
