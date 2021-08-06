import React from 'react'

const kingLightImg = (
  sizeSquarePiece,
  rotate,
  pieceColor,
  pieceBorderColor,
  borderPieceSize
) => {
  sizeSquarePiece = sizeSquarePiece ? sizeSquarePiece : 60
  pieceColor = pieceColor ? pieceColor : '#fff'
  pieceBorderColor = pieceBorderColor ? pieceBorderColor : '#000'
  borderPieceSize = borderPieceSize ? borderPieceSize : 1

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizeSquarePiece}
      height={sizeSquarePiece}
      viewBox='3.5 3.5 38 38'
      transform={rotate === 0 ? 'rotate(0)' : 'rotate(180)'}
    >
      <path
        id='Caminho_39'
        data-name='Caminho 39'
        d='M22.5,11.63V6'
        fill='none'
        stroke={pieceBorderColor}
        strokeLinecap='round'
        strokeWidth={borderPieceSize}
        fillRule='evenodd'
      />
      <path
        id='Caminho_40'
        data-name='Caminho 40'
        d='M20,8h5'
        fill='none'
        stroke={pieceBorderColor}
        strokeLinecap='round'
        strokeWidth={borderPieceSize}
        fillRule='evenodd'
      />
      <path
        id='Caminho_41'
        data-name='Caminho 41'
        d='M22.5,25s4.5-7.5,3-10.5c0,0-1-2.5-3-2.5s-3,2.5-3,2.5c-1.5,3,3,10.5,3,10.5'
        fill={pieceColor}
        stroke={pieceBorderColor}
        strokeWidth={borderPieceSize}
        fillRule='evenodd'
      />
      <path
        id='Caminho_42'
        data-name='Caminho 42'
        d='M12.5,37c5.5,3.5,14.5,3.5,20,0V30s9-4.5,6-10.5c-4-6.5-13.5-3.5-16,4v0c-2.5-7.5-12-10.5-16-4-3,6,6,10.5,6,10.5v7'
        fill={pieceColor}
        stroke={pieceBorderColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={borderPieceSize}
        fillRule='evenodd'
      />
      <path
        id='Caminho_43'
        data-name='Caminho 43'
        d='M12.5,30c5.5-3,14.5-3,20,0'
        fill='none'
        stroke={pieceBorderColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={borderPieceSize}
        fillRule='evenodd'
      />
      <path
        id='Caminho_44'
        data-name='Caminho 44'
        d='M12.5,33.5c5.5-3,14.5-3,20,0'
        fill='none'
        stroke={pieceBorderColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={borderPieceSize}
        fillRule='evenodd'
      />
      <path
        id='Caminho_45'
        data-name='Caminho 45'
        d='M12.5,37c5.5-3,14.5-3,20,0'
        fill='none'
        stroke={pieceBorderColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={borderPieceSize}
        fillRule='evenodd'
      />
    </svg>
  )
}

const queenLightImg = (
  sizeSquarePiece,
  rotate,
  pieceColor,
  pieceBorderColor,
  borderPieceSize
) => {
  sizeSquarePiece = sizeSquarePiece ? sizeSquarePiece : 60
  pieceColor = pieceColor ? pieceColor : '#fff'
  pieceBorderColor = pieceBorderColor ? pieceBorderColor : '#000'
  borderPieceSize = borderPieceSize ? borderPieceSize : 1

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizeSquarePiece}
      height={sizeSquarePiece}
      viewBox='3.5 3.5 38 38'
      transform={rotate === 0 ? 'rotate(0)' : 'rotate(180)'}
    >
      <path
        id='Caminho_23'
        data-name='Caminho 23'
        d='M9,13a2,2,0,1,1-2-2A2,2,0,0,1,9,13Z'
        transform='translate(-1 -1)'
        fill={pieceColor}
        stroke={pieceBorderColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={borderPieceSize}
        fillRule='evenodd'
      />
      <path
        id='Caminho_24'
        data-name='Caminho 24'
        d='M9,13a2,2,0,1,1-2-2A2,2,0,0,1,9,13Z'
        transform='translate(15.5 -5.5)'
        fill={pieceColor}
        stroke={pieceBorderColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={borderPieceSize}
        fillRule='evenodd'
      />
      <path
        id='Caminho_25'
        data-name='Caminho 25'
        d='M9,13a2,2,0,1,1-2-2A2,2,0,0,1,9,13Z'
        transform='translate(32 -1)'
        fill={pieceColor}
        stroke={pieceBorderColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={borderPieceSize}
        fillRule='evenodd'
      />
      <path
        id='Caminho_26'
        data-name='Caminho 26'
        d='M9,13a2,2,0,1,1-2-2A2,2,0,0,1,9,13Z'
        transform='translate(7 -4)'
        fill={pieceColor}
        stroke={pieceBorderColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={borderPieceSize}
        fillRule='evenodd'
      />
      <path
        id='Caminho_27'
        data-name='Caminho 27'
        d='M9,13a2,2,0,1,1-2-2A2,2,0,0,1,9,13Z'
        transform='translate(24 -4)'
        fill={pieceColor}
        stroke={pieceBorderColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={borderPieceSize}
        fillRule='evenodd'
      />
      <path
        id='Caminho_28'
        data-name='Caminho 28'
        d='M9,26a81.563,81.563,0,0,1,27,0l2-12L31,25V11L25.5,24.5l-3-15-3,15L14,11V25L7,14Z'
        fill={pieceColor}
        stroke={pieceBorderColor}
        strokeLinejoin='round'
        strokeWidth={borderPieceSize}
        fillRule='evenodd'
      />
      <path
        id='Caminho_29'
        data-name='Caminho 29'
        d='M9,26c0,2,1.5,2,2.5,4,1,1.5,1,1,.5,3.5A2.223,2.223,0,0,0,11,36c-1.5,1.5,0,2.5,0,2.5a88.542,88.542,0,0,0,23,0s1.5-1,0-2.5a2.223,2.223,0,0,0-1-2.5c-.5-2.5-.5-2,.5-3.5,1-2,2.5-2,2.5-4A81.563,81.563,0,0,0,9,26Z'
        fill={pieceColor}
        stroke={pieceBorderColor}
        strokeLinejoin='round'
        strokeWidth={borderPieceSize}
        fillRule='evenodd'
      />
      <path
        id='Caminho_30'
        data-name='Caminho 30'
        d='M11.5,30c3.5-1,18.5-1,22,0'
        fill='none'
        stroke={pieceBorderColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={borderPieceSize}
        fillRule='evenodd'
      />
      <path
        id='Caminho_31'
        data-name='Caminho 31'
        d='M12,33.5a73.875,73.875,0,0,1,21,0'
        fill='none'
        stroke={pieceBorderColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={borderPieceSize}
        fillRule='evenodd'
      />
    </svg>
  )
}

const bishopLightImg = (
  sizeSquarePiece,
  rotate,
  pieceColor,
  pieceBorderColor,
  borderPieceSize
) => {
  sizeSquarePiece = sizeSquarePiece ? sizeSquarePiece : 60
  pieceColor = pieceColor ? pieceColor : '#fff'
  pieceBorderColor = pieceBorderColor ? pieceBorderColor : '#000'
  borderPieceSize = borderPieceSize ? borderPieceSize : 1

  sizeSquarePiece = sizeSquarePiece - sizeSquarePiece / 10

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizeSquarePiece}
      height={sizeSquarePiece}
      viewBox='0 0 34.5 34.798'
      transform={rotate === 0 ? 'rotate(0)' : 'rotate(180)'}
    >
      <g transform='translate(-5.25 -4.75)'>
        <g id='Grupo_1' data-name='Grupo 1'>
          <path
            id='Caminho_1'
            data-name='Caminho 1'
            d='M9,36c3.39-.97,10.11.43,13.5-2,3.39,2.43,10.11,1.03,13.5,2a7.917,7.917,0,0,1,3,2c-.68.97-1.65.99-3,.5-3.39-.97-10.11.46-13.5-1-3.39,1.46-10.11.03-13.5,1-1.35.49-2.32.47-3-.5A7.917,7.917,0,0,1,9,36Z'
            fill={pieceColor}
            stroke={pieceBorderColor}
            strokeLinejoin='round'
            strokeWidth={borderPieceSize}
            fillRule='evenodd'
          />
          <path
            id='Caminho_2'
            data-name='Caminho 2'
            d='M15,32c2.5,2.5,12.5,2.5,15,0,.5-1.5,0-2,0-2,0-2.5-2.5-4-2.5-4,5.5-1.5,6-11.5-5-15.5-11,4-10.5,14-5,15.5,0,0-2.5,1.5-2.5,4C15,30,14.5,30.5,15,32Z'
            fill={pieceColor}
            stroke={pieceBorderColor}
            strokeLinejoin='round'
            strokeWidth={borderPieceSize}
            fillRule='evenodd'
          />
          <path
            id='Caminho_3'
            data-name='Caminho 3'
            d='M25,8a2.5,2.5,0,1,1-2.5-2.5A2.5,2.5,0,0,1,25,8Z'
            fill={pieceColor}
            stroke={pieceBorderColor}
            strokeLinejoin='round'
            strokeWidth={borderPieceSize}
            fillRule='evenodd'
          />
        </g>
        <path
          id='Caminho_4'
          data-name='Caminho 4'
          d='M17.5,26h10M15,30H30M22.5,15.5v5M20,18h5'
          fill='none'
          stroke={pieceBorderColor}
          strokeLinecap='round'
          strokeWidth={borderPieceSize}
          fillRule='evenodd'
        />
      </g>
    </svg>
  )
}

const horseLightImg = (
  sizeSquarePiece,
  rotate,
  pieceColor,
  pieceBorderColor,
  borderPieceSize
) => {
  sizeSquarePiece = sizeSquarePiece ? sizeSquarePiece : 60
  pieceColor = pieceColor ? pieceColor : '#fff'
  pieceBorderColor = pieceBorderColor ? pieceBorderColor : '#000'
  borderPieceSize = borderPieceSize ? borderPieceSize : 1

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizeSquarePiece}
      height={sizeSquarePiece}
      viewBox='3.5 3.5 38 38'
      transform={rotate === 0 ? 'rotate(0)' : 'rotate(180)'}
    >
      <path
        id='Caminho_9'
        data-name='Caminho 9'
        d='M22,10c10.5,1,16.5,8,16,29H15c0-9,10-6.5,8-21'
        fill={pieceColor}
        stroke={pieceBorderColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={borderPieceSize}
        fillRule='evenodd'
      />
      <path
        id='Caminho_10'
        data-name='Caminho 10'
        d='M24,18c.38,2.91-5.55,7.37-8,9-3,2-2.82,4.34-5,4-1.042-.94,1.41-3.04,0-3-1,0,.19,1.23-1,2-1,0-4,1-4-4,0-2,6-12,6-12s1.89-1.9,2-3.5c-.73-.994-.5-2-.5-3,1-1,3,2.5,3,2.5h2A6.708,6.708,0,0,1,21,7c1,0,1,3,1,3'
        fill={pieceColor}
        stroke={pieceBorderColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={borderPieceSize}
        fillRule='evenodd'
      />
      <path
        id='Caminho_11'
        data-name='Caminho 11'
        d='M9.5,25.5A.5.5,0,1,1,9,25,.5.5,0,0,1,9.5,25.5Z'
        stroke={pieceBorderColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={borderPieceSize}
        fillRule='evenodd'
      />
      <path
        id='Caminho_12'
        data-name='Caminho 12'
        d='M15,15.5c0,.828-.224,1.5-.5,1.5s-.5-.672-.5-1.5.224-1.5.5-1.5.5.672.5,1.5Z'
        transform='matrix(0.866, 0.5, -0.5, 0.866, 9.693, -5.173)'
        stroke={pieceBorderColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={borderPieceSize}
        fillRule='evenodd'
      />
    </svg>
  )
}

const towerLightImg = (
  sizeSquarePiece,
  rotate,
  pieceColor,
  pieceBorderColor,
  borderPieceSize
) => {
  sizeSquarePiece = sizeSquarePiece ? sizeSquarePiece : 60
  pieceColor = pieceColor ? pieceColor : '#fff'
  pieceBorderColor = pieceBorderColor ? pieceBorderColor : '#000'
  borderPieceSize = borderPieceSize ? borderPieceSize : 1

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizeSquarePiece}
      height={sizeSquarePiece}
      viewBox='3.5 3.5 38 38'
      transform={rotate === 0 ? 'rotate(0)' : 'rotate(180)'}
    >
      <path
        id='Caminho_56'
        data-name='Caminho 56'
        d='M9,39H36V36H9Z'
        fill={pieceColor}
        stroke={pieceBorderColor}
        strokeLinejoin='round'
        strokeWidth={borderPieceSize}
        fillRule='evenodd'
      />
      <path
        id='Caminho_57'
        data-name='Caminho 57'
        d='M12,36V32H33v4Z'
        fill={pieceColor}
        stroke={pieceBorderColor}
        strokeLinejoin='round'
        strokeWidth={borderPieceSize}
        fillRule='evenodd'
      />
      <path
        id='Caminho_58'
        data-name='Caminho 58'
        d='M11,14V9h4v2h5V9h5v2h5V9h4v5'
        fill={pieceColor}
        stroke={pieceBorderColor}
        strokeLinejoin='round'
        strokeWidth={borderPieceSize}
        fillRule='evenodd'
      />
      <path
        id='Caminho_59'
        data-name='Caminho 59'
        d='M34,14l-3,3H14l-3-3'
        fill={pieceColor}
        stroke={pieceBorderColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={borderPieceSize}
        fillRule='evenodd'
      />
      <path
        id='Caminho_60'
        data-name='Caminho 60'
        d='M31,17V29.5H14V17'
        fill={pieceColor}
        stroke={pieceBorderColor}
        strokeWidth={borderPieceSize}
        fillRule='evenodd'
      />
      <path
        id='Caminho_61'
        data-name='Caminho 61'
        d='M31,29.5,32.5,32h-20L14,29.5'
        fill={pieceColor}
        stroke={pieceBorderColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={borderPieceSize}
        fillRule='evenodd'
      />
      <path
        id='Caminho_62'
        data-name='Caminho 62'
        d='M11,14H34'
        fill='none'
        stroke={pieceBorderColor}
        strokeLinecap='round'
        strokeWidth={borderPieceSize}
        fillRule='evenodd'
      />
    </svg>
  )
}

const pawnLightImg = (
  sizeSquarePiece,
  rotate,
  pieceColor,
  pieceBorderColor,
  borderPieceSize
) => {
  sizeSquarePiece = sizeSquarePiece ? sizeSquarePiece : 60
  pieceColor = pieceColor ? pieceColor : '#fff'
  pieceBorderColor = pieceBorderColor ? pieceBorderColor : '#000'
  borderPieceSize = borderPieceSize ? borderPieceSize : 1

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizeSquarePiece}
      height={sizeSquarePiece}
      viewBox='3.5 3.5 38 38'
      transform={rotate === 0 ? 'rotate(0)' : 'rotate(180)'}
    >
      <path
        id='peao_branco_cima'
        data-name='peao branco cima'
        d='M22.5,9a4.005,4.005,0,0,0-3.22,6.38,6.454,6.454,0,0,0-.87,10.65C15.41,27.09,11,31.58,11,39.5H34c0-7.92-4.41-12.41-7.41-13.47a6.454,6.454,0,0,0-.87-10.65A4.005,4.005,0,0,0,22.5,9Z'
        fill={pieceColor}
        stroke={pieceBorderColor}
        strokeLinecap='round'
        strokeWidth={pieceBorderColor}
      />
    </svg>
  )
}

export {
  kingLightImg,
  queenLightImg,
  bishopLightImg,
  horseLightImg,
  towerLightImg,
  pawnLightImg,
}
