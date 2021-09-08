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

    if (verifySquare.status !== 'invalid position') {
      if (verifySquare.status === 'ally piece') {
        right.push(verifySquare.pos)
        break
      }
      right.push(verifySquare.pos)
      queenMove.push(verifySquare.pos)
      if (verifySquare.status === 'enemy piece') break
    } else break
  }

  for (let i = 1; parseInt(piecePosC) - i >= 1; i++) {
    let verifySquare = returnQueenVerifySquare(
      'c' + (parseInt(piecePosC) - i) + 'l' + parseInt(piecePosL)
    )

    if (verifySquare.status !== 'invalid position') {
      if (verifySquare.status === 'ally piece') {
        left.push(verifySquare.pos)
        break
      }
      left.push(verifySquare.pos)
      queenMove.push(verifySquare.pos)
      if (verifySquare.status === 'enemy piece') break
    } else break
  }

  for (let i = 1; parseInt(piecePosL) + i <= 8; i++) {
    let verifySquare = returnQueenVerifySquare(
      'c' + parseInt(piecePosC) + 'l' + (parseInt(piecePosL) + i)
    )

    if (verifySquare.status !== 'invalid position') {
      if (verifySquare.status === 'ally piece') {
        up.push(verifySquare.pos)
        break
      }
      up.push(verifySquare.pos)
      queenMove.push(verifySquare.pos)
      if (verifySquare.status === 'enemy piece') break
    } else break
  }

  for (let i = 1; parseInt(piecePosL) - i >= 1; i++) {
    let verifySquare = returnQueenVerifySquare(
      'c' + parseInt(piecePosC) + 'l' + (parseInt(piecePosL) - i)
    )

    if (verifySquare.status !== 'invalid position') {
      if (verifySquare.status === 'ally piece') {
        down.push(verifySquare.pos)
        break
      }
      down.push(verifySquare.pos)
      queenMove.push(verifySquare.pos)
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

    if (verifySquare.status !== 'invalid position') {
      if (verifySquare.status === 'ally piece') {
        diagonalUpRight.push(verifySquare.pos)
        break
      }
      diagonalUpRight.push(verifySquare.pos)
      queenMove.push(verifySquare.pos)
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

    if (verifySquare.status !== 'invalid position') {
      if (verifySquare.status === 'ally piece') {
        diagonalUpLeft.push(verifySquare.pos)
        break
      }
      diagonalUpLeft.push(verifySquare.pos)
      queenMove.push(verifySquare.pos)
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

    if (verifySquare.status !== 'invalid position') {
      if (verifySquare.status === 'ally piece') {
        diagonalDownRight.push(verifySquare.pos)
        break
      }
      diagonalDownRight.push(verifySquare.pos)
      queenMove.push(verifySquare.pos)
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

    if (verifySquare.status !== 'invalid position') {
      if (verifySquare.status === 'ally piece') {
        diagonalDownLeft.push(verifySquare.pos)
        break
      }
      diagonalDownLeft.push(verifySquare.pos)
      queenMove.push(verifySquare.pos)
      if (verifySquare.status === 'enemy piece') break
    } else break
  }

  //========================

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
