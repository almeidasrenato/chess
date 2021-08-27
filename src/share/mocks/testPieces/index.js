import {
  queenLightImg,
  kingLightImg,
  bishopLightImg,
  horseLightImg,
  towerLightImg,
  pawnLightImg,
} from '../../../assets/assetsPiecesLight'

import {
  queenDarkImg,
  kingDarkImg,
  bishopDarkImg,
  horseDarkImg,
  towerDarkImg,
  pawnDarkImg,
} from '../../../assets/assetsPiecesDark'

const testPieces = (props) => [
  {
    id: 1,
    typePiece: 'king',
    pieceColor: 'light',
    pos: 'c5l1',
    firstMove: true,
    src: kingLightImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorLight,
      props.pieceBorderColorLight,
      props.pieceBorderSize
    ),
  },
  {
    id: 2,
    typePiece: 'queen',
    pieceColor: 'light',
    pos: 'c4l1',
    firstMove: true,
    src: queenLightImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorLight,
      props.pieceBorderColorLight,
      props.pieceBorderSize
    ),
  },
  {
    id: 3,
    typePiece: 'bishop',
    pieceColor: 'light',
    pos: 'c3l1',
    firstMove: true,
    src: bishopLightImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorLight,
      props.pieceBorderColorLight,
      props.pieceBorderSize
    ),
  },
  {
    id: 4,
    typePiece: 'horse',
    pieceColor: 'light',
    pos: 'c2l1',
    firstMove: true,
    src: horseLightImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorLight,
      props.pieceBorderColorLight,
      props.pieceBorderSize
    ),
  },
  {
    id: 5,
    typePiece: 'tower',
    pieceColor: 'light',
    pos: 'c1l1',
    firstMove: true,
    src: towerLightImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorLight,
      props.pieceBorderColorLight,
      props.pieceBorderSize
    ),
  },
  {
    id: 6,
    typePiece: 'bishop',
    pieceColor: 'light',
    pos: 'c6l1',
    firstMove: true,
    src: bishopLightImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorLight,
      props.pieceBorderColorLight,
      props.pieceBorderSize
    ),
  },
  {
    id: 7,
    typePiece: 'horse',
    pieceColor: 'light',
    pos: 'c7l1',
    firstMove: true,
    src: horseLightImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorLight,
      props.pieceBorderColorLight,
      props.pieceBorderSize
    ),
  },
  {
    id: 8,
    typePiece: 'tower',
    pieceColor: 'light',
    pos: 'c8l1',
    firstMove: true,
    src: towerLightImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorLight,
      props.pieceBorderColorLight,
      props.pieceBorderSize
    ),
  },
  {
    id: 9,
    typePiece: 'pawn',
    pieceColor: 'light',
    pos: 'c1l2',
    firstMove: true,
    src: pawnLightImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorLight,
      props.pieceBorderColorLight,
      props.pieceBorderSize
    ),
  },
  {
    id: 10,
    typePiece: 'pawn',
    pieceColor: 'light',
    pos: 'c2l2',
    firstMove: true,
    src: pawnLightImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorLight,
      props.pieceBorderColorLight,
      props.pieceBorderSize
    ),
  },
  {
    id: 11,
    typePiece: 'pawn',
    pieceColor: 'light',
    pos: 'c3l2',
    firstMove: true,
    src: pawnLightImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorLight,
      props.pieceBorderColorLight,
      props.pieceBorderSize
    ),
  },
  {
    id: 12,
    typePiece: 'pawn',
    pieceColor: 'light',
    pos: 'c4l2',
    firstMove: true,
    src: pawnLightImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorLight,
      props.pieceBorderColorLight,
      props.pieceBorderSize
    ),
  },
  {
    id: 13,
    typePiece: 'pawn',
    pieceColor: 'light',
    pos: 'c5l2',
    firstMove: true,
    src: pawnLightImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorLight,
      props.pieceBorderColorLight,
      props.pieceBorderSize
    ),
  },
  {
    id: 14,
    typePiece: 'pawn',
    pieceColor: 'light',
    pos: 'c6l2',
    firstMove: true,
    src: pawnLightImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorLight,
      props.pieceBorderColorLight,
      props.pieceBorderSize
    ),
  },
  {
    id: 15,
    typePiece: 'pawn',
    pieceColor: 'light',
    pos: 'c7l2',
    firstMove: true,
    src: pawnLightImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorLight,
      props.pieceBorderColorLight,
      props.pieceBorderSize
    ),
  },
  {
    id: 16,
    typePiece: 'pawn',
    pieceColor: 'light',
    pos: 'c8l2',
    firstMove: true,
    src: pawnLightImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorLight,
      props.pieceBorderColorLight,
      props.pieceBorderSize
    ),
  },
  {
    id: 17,
    typePiece: 'king',
    pieceColor: 'dark',
    pos: 'c5l8',
    firstMove: true,
    src: kingDarkImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorDark,
      props.pieceBorderColorDark,
      props.pieceBorderSize
    ),
  },
  {
    id: 18,
    typePiece: 'queen',
    pieceColor: 'dark',
    pos: 'c4l8',
    firstMove: true,
    src: queenDarkImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorDark,
      props.pieceBorderColorDark,
      props.pieceBorderSize
    ),
  },
  {
    id: 19,
    typePiece: 'bishop',
    pieceColor: 'dark',
    pos: 'c3l8',
    firstMove: true,
    src: bishopDarkImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorDark,
      props.pieceBorderColorDark,
      props.pieceBorderSize
    ),
  },
  {
    id: 20,
    typePiece: 'bishop',
    pieceColor: 'dark',
    pos: 'c6l8',
    firstMove: true,
    src: bishopDarkImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorDark,
      props.pieceBorderColorDark,
      props.pieceBorderSize
    ),
  },
  {
    id: 21,
    typePiece: 'horse',
    pieceColor: 'dark',
    pos: 'c2l8',
    firstMove: true,
    src: horseDarkImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorDark,
      props.pieceBorderColorDark,
      props.pieceBorderSize
    ),
  },
  {
    id: 22,
    typePiece: 'horse',
    pieceColor: 'dark',
    pos: 'c7l8',
    firstMove: true,
    src: horseDarkImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorDark,
      props.pieceBorderColorDark,
      props.pieceBorderSize
    ),
  },
  {
    id: 23,
    typePiece: 'tower',
    pieceColor: 'dark',
    pos: 'c1l8',
    firstMove: true,
    src: towerDarkImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorDark,
      props.pieceBorderColorDark,
      props.pieceBorderSize
    ),
  },
  {
    id: 24,
    typePiece: 'tower',
    pieceColor: 'dark',
    pos: 'c8l8',
    firstMove: true,
    src: towerDarkImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorDark,
      props.pieceBorderColorDark,
      props.pieceBorderSize
    ),
  },
  {
    id: 25,
    typePiece: 'pawn',
    pieceColor: 'dark',
    pos: 'c1l3',
    firstMove: true,
    src: pawnDarkImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorDark,
      props.pieceBorderColorDark,
      props.pieceBorderSize
    ),
  },
  {
    id: 26,
    typePiece: 'pawn',
    pieceColor: 'dark',
    pos: 'c2l7',
    firstMove: true,
    src: pawnDarkImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorDark,
      props.pieceBorderColorDark,
      props.pieceBorderSize
    ),
  },
  {
    id: 27,
    typePiece: 'pawn',
    pieceColor: 'dark',
    pos: 'c3l3',
    firstMove: true,
    src: pawnDarkImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorDark,
      props.pieceBorderColorDark,
      props.pieceBorderSize
    ),
  },
  {
    id: 28,
    typePiece: 'pawn',
    pieceColor: 'dark',
    pos: 'c4l7',
    firstMove: true,
    src: pawnDarkImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorDark,
      props.pieceBorderColorDark,
      props.pieceBorderSize
    ),
  },
  {
    id: 29,
    typePiece: 'pawn',
    pieceColor: 'dark',
    pos: 'c5l7',
    firstMove: true,
    src: pawnDarkImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorDark,
      props.pieceBorderColorDark,
      props.pieceBorderSize
    ),
  },
  {
    id: 30,
    typePiece: 'pawn',
    pieceColor: 'dark',
    pos: 'c6l7',
    firstMove: true,
    src: pawnDarkImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorDark,
      props.pieceBorderColorDark,
      props.pieceBorderSize
    ),
  },
  {
    id: 31,
    typePiece: 'pawn',
    pieceColor: 'dark',
    pos: 'c7l7',
    firstMove: true,
    src: pawnDarkImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorDark,
      props.pieceBorderColorDark,
      props.pieceBorderSize
    ),
  },
  {
    id: 32,
    typePiece: 'pawn',
    pieceColor: 'dark',
    pos: 'c8l7',
    firstMove: true,
    src: pawnDarkImg(
      props.sizeSquarePiece,
      props.rotate,
      props.pieceColorDark,
      props.pieceBorderColorDark,
      props.pieceBorderSize
    ),
  },
]

export default testPieces
