import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import defaultAnimatedPiecesClassic from '../../share/mocks/defaultAnimatedPiecesClassic'
import pieceMovements from '../../share/chessClassic/pieceMovements'

import { Player } from '@lottiefiles/react-lottie-player'

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

const LabelPosSquare = styled.div`
  position: absolute;
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
  background: #bdbdbd;
  border-radius: 50%;
  height: ${(props) => props.height / 5 + 'px'};
  width: ${(props) => props.width / 5 + 'px'};
  z-index: 1;
`

const SquarePreviewMove = styled.div`
  height: ${(props) => props.height + 'px'};
  width: ${(props) => props.width + 'px'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`

const ClassicAnimatedChessBoardComponent = (props) => {
  let size = props.size ? props.size : 800
  let squareSize = size / 8

  const [chessBoardPieces, setChessBoardPieces] = useState([])
  const [allPieceMovements, setAllPieceMovements] = useState([])
  const [posPieceSelected, setPosPieceSelected] = useState(undefined)
  const [turn, setTurn] = useState('light')

  useEffect(() => {
    const loadChessBoard = () => {
      let pieces = defaultAnimatedPiecesClassic()

      setChessBoardPieces(pieces)

      let returnPieceMovements = pieceMovements(pieces, turn)
      setAllPieceMovements(returnPieceMovements)
    }
    loadChessBoard()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const clickPiece = (pos, findPiece) => {
    if (posPieceSelected === pos) {
      chessBoardPieces.map((item) => {
        if (item.id === findPiece.id) item.activeAnimation = 'a1'

        return { ...item }
      })

      return setPosPieceSelected(undefined)
    }

    chessBoardPieces.map((item) => {
      if (item.id === findPiece.id) item.activeAnimation = 'a2'

      return { ...item }
    })

    return setPosPieceSelected(pos)
  }

  const findPiece = (pos, piece) => {
    if (!piece) return null

    let findPiece = piece.find((item) => item.pos === pos)

    if (findPiece) {
      const activeAnimation = findPiece.activeAnimation
      console.log('findPiece', findPiece)
      console.log('chessBoardPieces', chessBoardPieces)

      return (
        <Piece onClick={() => clickPiece(pos, findPiece)}>
          <Player
            autoplay
            loop
            src={findPiece.src[activeAnimation]}
            style={{ height: '100%', width: '100%' }}
          ></Player>
        </Piece>
      )
    }
    return null
  }

  const findPreview = (movedPos) => {
    const movePiece = () => {
      let findPieceMove = chessBoardPieces.find(
        (item) => item.pos === posPieceSelected
      )

      findPieceMove.pos = movedPos

      let newChessBoardPieces = chessBoardPieces

      //roque

      if (
        findPieceMove.typePiece === 'king' &&
        findPieceMove.firstMove === true &&
        (findPieceMove.pos === 'c3l1' ||
        findPieceMove.pos === 'c7l1' ||
        findPieceMove.pos === 'c3l8' ||
        findPieceMove.pos === 'c7l8'
          ? true
          : false) === true
      ) {
        if (findPieceMove.pos === 'c3l1') {
          newChessBoardPieces = newChessBoardPieces.map((item) => {
            if (item.pos === 'c1l1') item.pos = 'c4l1'
            return { ...item }
          })
        }
        if (findPieceMove.pos === 'c7l1') {
          newChessBoardPieces = newChessBoardPieces.map((item) => {
            if (item.pos === 'c8l1') item.pos = 'c6l1'
            return { ...item }
          })
        }
        if (findPieceMove.pos === 'c3l8') {
          newChessBoardPieces = newChessBoardPieces.map((item) => {
            if (item.pos === 'c1l8') item.pos = 'c4l8'
            return { ...item }
          })
        }
        if (findPieceMove.pos === 'c7l8') {
          newChessBoardPieces = newChessBoardPieces.map((item) => {
            if (item.pos === 'c8l8') item.pos = 'c6l8'
            return { ...item }
          })
        }
      } else {
        newChessBoardPieces = newChessBoardPieces.filter(
          (item) => item.pos !== posPieceSelected
        )

        newChessBoardPieces = newChessBoardPieces.filter(
          (item) => item.pos !== movedPos
        )
      }
      // Fim do roque

      findPieceMove.firstMove = false

      newChessBoardPieces.push(findPieceMove)

      setChessBoardPieces(newChessBoardPieces)
      setPosPieceSelected(undefined)

      let newTurn = turn === 'light' ? 'dark' : 'light'

      let returnPieceMovements = pieceMovements(newChessBoardPieces, newTurn)
      setAllPieceMovements(returnPieceMovements)

      setTurn(newTurn)
    }

    if (posPieceSelected) {
      let pieceAllyMoves = allPieceMovements.find(
        (item) => item.piecePos === posPieceSelected && item.pieceColor === turn
      )

      if (pieceAllyMoves) {
        let findPosPreviewReturn = pieceAllyMoves.pieceMoves.find(
          (item) => item === movedPos
        )

        if (findPosPreviewReturn)
          return (
            <SquarePreviewMove
              height={squareSize}
              width={squareSize}
              onClick={() => movePiece()}
            >
              <PreviewMove height={squareSize} width={squareSize} />
            </SquarePreviewMove>
          )
      }
    }

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
              <LabelPosSquare>
                {'c' + (index + 1) + 'l' + (8 - index2)}
              </LabelPosSquare>
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

export default ClassicAnimatedChessBoardComponent
