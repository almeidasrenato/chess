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

    if (verifySquare.status !== 'invalid position') {
      if (verifySquare.status === 'ally piece') {
        right.push(verifySquare.pos)
        break
      }
      right.push(verifySquare.pos)
      towerMove.push(verifySquare.pos)
      if (verifySquare.status === 'enemy piece') break
    } else break
  }

  for (let i = 1; parseInt(piecePosC) - i >= 1; i++) {
    let verifySquare = returnTowerVerifySquare(
      'c' + (parseInt(piecePosC) - i) + 'l' + parseInt(piecePosL)
    )

    if (verifySquare.status !== 'invalid position') {
      if (verifySquare.status === 'ally piece') {
        left.push(verifySquare.pos)
        break
      }
      left.push(verifySquare.pos)
      towerMove.push(verifySquare.pos)
      if (verifySquare.status === 'enemy piece') break
    } else break
  }

  for (let i = 1; parseInt(piecePosL) + i <= 8; i++) {
    let verifySquare = returnTowerVerifySquare(
      'c' + parseInt(piecePosC) + 'l' + (parseInt(piecePosL) + i)
    )

    if (verifySquare.status !== 'invalid position') {
      if (verifySquare.status === 'ally piece') {
        up.push(verifySquare.pos)
        break
      }
      up.push(verifySquare.pos)
      towerMove.push(verifySquare.pos)
      if (verifySquare.status === 'enemy piece') break
    } else break
  }

  for (let i = 1; parseInt(piecePosL) - i >= 1; i++) {
    let verifySquare = returnTowerVerifySquare(
      'c' + parseInt(piecePosC) + 'l' + (parseInt(piecePosL) - i)
    )

    if (verifySquare.status !== 'invalid position') {
      if (verifySquare.status === 'ally piece') {
        down.push(verifySquare.pos)
        break
      }
      down.push(verifySquare.pos)
      towerMove.push(verifySquare.pos)
      if (verifySquare.status === 'enemy piece') break
    } else break
  }

  return {
    pieceId: piece.id,
    piecePos: piece.pos,
    pieceMoves: towerMove,
    pieceColor: piece.pieceColor,
    pieceType: piece.typePiece,
    pieceFirstMove: piece.firstMove,
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
