import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import testPieces from '../../assets/mocks/testPieces'
import pieceMovements from '../../chess/pieceMovements'

const ChessBoardFieldProps = styled.div`
  display: flex;
  background: ${(props) => props.background};
  height: ${(props) => props.height + 'px'};
  width: ${(props) => props.width + 'px'};
`

const Column = styled.div``

const Square = styled.div`
  background: ${(props) => props.background};
  height: ${(props) => props.height + 'px'};
  width: ${(props) => props.width + 'px'};
`

const SquareSelected = styled.div`
  background: ${(props) => props.background};
  height: 100%;
  width: 100%;
`

const PieceField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const Piece = styled.div`
  cursor: pointer;
`

const PreviewMove = styled.div`
  position: absolute;
  background: #bdbdbd;
  border-radius: 50%;
  height: ${(props) => props.height + 'px'};
  width: ${(props) => props.width + 'px'};
  z-index: 1;
`

const ChessBoard = (props) => {
  let size = props.size ? props.size : 800
  let squareSize = size / 8

  const [chessBoardPieces, setChessBoardPieces] = useState([])
  const [allPieceMovements, setAllPieceMovements] = useState([])
  const [posPieceSelected, setPosPieceSelected] = useState(undefined)
  const [posPreview, setPosPreview] = useState([])

  useEffect(() => {
    const loadChessBoard = () => {
      let pieces = testPieces({
        ...props.theme,
        sizeSquarePiece: size / 8 - size / 8 / 5,
      })
      let returnPieceMovements = pieceMovements(pieces)
      setChessBoardPieces(pieces)
      setAllPieceMovements(returnPieceMovements)

      console.log(returnPieceMovements)
    }
    loadChessBoard()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const clickPiece = (pos) => {
    if (posPieceSelected === pos) {
      return setPosPieceSelected(undefined)
    }
    setPosPieceSelected(pos)
  }

  const findPiece = (pos, piece) => {
    if (!piece) return null

    let findPiece = piece.find((item) => item.pos === pos)

    if (findPiece)
      return <Piece onClick={() => clickPiece(pos)}>{findPiece.src}</Piece>

    return null
  }

  const findPreview = (pos) => {
    let returnFindPreview = posPreview.find((item) => item === pos)

    if (returnFindPreview)
      return <PreviewMove height={squareSize / 5} width={squareSize / 5} />
    return null
  }

  return (
    <ChessBoardFieldProps
      background={props.theme.background}
      height={size}
      width={size}
    >
      {Array.from({ length: 8 }).map((item, index) => (
        <Column key={index} className={'c' + (index + 1)}>
          {Array.from({ length: 8 }).map((item, index2) => (
            <Square
              key={index2}
              className={'c' + (index + 1) + 'l' + (8 - index2)}
              background={
                index % 2 === 0
                  ? index2 % 2 === 0
                    ? props.theme.squareLightColor
                    : props.theme.squareDarkColor
                  : index2 % 2 === 0
                  ? props.theme.squareDarkColor
                  : props.theme.squareLightColor
              }
              height={squareSize}
              width={squareSize}
            >
              <SquareSelected
                background={
                  posPieceSelected === 'c' + (index + 1) + 'l' + (8 - index2)
                    ? props.theme.squarePieceSelectedColor
                    : 'transparent'
                }
              >
                <PieceField>
                  {findPiece(
                    'c' + (index + 1) + 'l' + (8 - index2),
                    chessBoardPieces
                  )}
                  {findPreview('c' + (index + 1) + 'l' + (8 - index2))}
                </PieceField>
              </SquareSelected>
            </Square>
          ))}
        </Column>
      ))}
    </ChessBoardFieldProps>
  )
}

export default ChessBoard
