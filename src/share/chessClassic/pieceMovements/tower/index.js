const movementsTower = (pieces, piece, piecePosC, piecePosL, verifySquare) => {
  const returnTowerVerifySquare = (verifyPos) => {
    let squareMoveStatus = verifySquare(pieces, verifyPos, piece.pieceColor)

    return { status: squareMoveStatus, pos: verifyPos }
  }

  let up = []
  let down = []
  let left = []
  let right = []

  let towerMove = []

  for (let i = 1; parseInt(piecePosC) + i <= 8; i++) {
    let verifySquare = returnTowerVerifySquare(
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
    let verifySquare = returnTowerVerifySquare(
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
    let verifySquare = returnTowerVerifySquare(
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
    let verifySquare = returnTowerVerifySquare(
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

  towerMove.push(...up, ...down, ...left, ...right)

  return {
    pieceId: piece.id,
    piecePos: piece.pos,
    pieceMoves: towerMove,
    pieceColor: piece.pieceColor,
    pieceType: piece.typePiece,
    allPiecePosAttack: [...up, ...down, ...left, ...right],
    piecePosAttack: {
      up: up,
      down: down,
      left: left,
      right: right,
    },
  }
}

export { movementsTower }
