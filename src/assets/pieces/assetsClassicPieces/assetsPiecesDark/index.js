import React from 'react'

const kingDarkImg = (
  sizeSquarePiece,
  rotate,
  pieceColor,
  pieceBorderColor,
  borderPieceSize
) => {
  sizeSquarePiece = sizeSquarePiece ? sizeSquarePiece : 60
  pieceColor = pieceColor ? pieceColor : '#000'
  pieceBorderColor = pieceBorderColor ? pieceBorderColor : '#fff'
  borderPieceSize = borderPieceSize ? borderPieceSize : 1

  return (
    <div
      style={
        rotate === 0
          ? { transform: 'rotate(0deg)' }
          : { transform: 'rotate(180deg)' }
      }
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={sizeSquarePiece}
        height={sizeSquarePiece}
        viewBox='3 3 39 39'
        fill={pieceColor}
      >
        <path
          id='path6570'
          d='M22.5,11.63V6'
          fill={pieceColor}
          stroke={pieceColor}
          strokeLinecap='round'
          strokeWidth={borderPieceSize}
          fillRule='evenodd'
        />
        <path
          id='Caminho_51'
          data-name='Caminho 51'
          d='M22.5,25s4.5-7.5,3-10.5c0,0-1-2.5-3-2.5s-3,2.5-3,2.5c-1.5,3,3,10.5,3,10.5'
          stroke={pieceColor}
          strokeWidth={borderPieceSize}
          fillRule='evenodd'
        />
        <path
          id='Caminho_52'
          data-name='Caminho 52'
          d='M11.5,37c5.5,3.5,15.5,3.5,21,0V30s9-4.5,6-10.5c-4-6.5-13.5-3.5-16,4v0C19,16,9.5,13,6.5,19.5c-3,6,5,10,5,10Z'
          stroke={pieceColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={borderPieceSize}
          fillRule='evenodd'
        />
        <path
          id='Caminho_53'
          data-name='Caminho 53'
          d='M20,8h5'
          fill={pieceColor}
          stroke={pieceColor}
          strokeLinecap='round'
          strokeWidth={borderPieceSize}
          fillRule='evenodd'
        />
        <path
          id='Caminho_54'
          data-name='Caminho 54'
          d='M32,29.5s8.5-4,6.03-9.65C34.15,14,25,18,22.5,24.5l.01,2.1-.01-2.1C20,18,9.906,14,7,19.85c-2.5,5.65,4.853,9,4.853,9'
          fill={pieceColor}
          stroke={pieceBorderColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={borderPieceSize}
          fillRule='evenodd'
        />
        <path
          id='Caminho_55'
          data-name='Caminho 55'
          d='M11.5,30c5.5-3,15.5-3,21,0m-21,3.5c5.5-3,15.5-3,21,0M11.5,37c5.5-3,15.5-3,21,0'
          fill={pieceColor}
          stroke={pieceBorderColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={borderPieceSize}
          fillRule='evenodd'
        />
      </svg>
    </div>
  )
}

const queenDarkImg = (
  sizeSquarePiece,
  rotate,
  pieceColor,
  pieceBorderColor,
  borderPieceSize
) => {
  sizeSquarePiece = sizeSquarePiece ? sizeSquarePiece : 60
  pieceColor = pieceColor ? pieceColor : '#000'
  pieceBorderColor = pieceBorderColor ? pieceBorderColor : '#fff'
  borderPieceSize = borderPieceSize ? borderPieceSize : 1
  return (
    <div
      style={
        rotate === 0
          ? { transform: 'rotate(180deg)' }
          : { transform: 'rotate(0deg)' }
      }
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={sizeSquarePiece}
        height={sizeSquarePiece}
        viewBox='3 1 40 40'
        fill={pieceColor}
      >
        <path
          id='path5571'
          d='M9-13a2,2,0,0,0-2-2,2,2,0,0,0-2,2,2,2,0,0,0,2,2A2,2,0,0,0,9-13Z'
          transform='translate(-1 46)'
          stroke={pieceColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={borderPieceSize}
        />
        <path
          id='path5573'
          d='M9-13a2,2,0,0,0-2-2,2,2,0,0,0-2,2,2,2,0,0,0,2,2A2,2,0,0,0,9-13Z'
          transform='translate(15.5 50.5)'
          stroke={pieceColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={borderPieceSize}
        />
        <path
          id='path5575'
          d='M9-13a2,2,0,0,0-2-2,2,2,0,0,0-2,2,2,2,0,0,0,2,2A2,2,0,0,0,9-13Z'
          transform='translate(32 46)'
          stroke={pieceColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={borderPieceSize}
        />
        <path
          id='path5577'
          d='M9-13a2,2,0,0,0-2-2,2,2,0,0,0-2,2,2,2,0,0,0,2,2A2,2,0,0,0,9-13Z'
          transform='translate(7 49.5)'
          stroke={pieceColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={borderPieceSize}
        />
        <path
          id='path5579'
          d='M9-13a2,2,0,0,0-2-2,2,2,0,0,0-2,2,2,2,0,0,0,2,2A2,2,0,0,0,9-13Z'
          transform='translate(24 49)'
          stroke={pieceColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={borderPieceSize}
        />
        <path
          id='path5581'
          d='M9,19c8.5,1.5,21,1.5,27,0l2,12L31,20V34L25.5,20.5l-3,15-3-15L14,34.5V20L7,31Z'
          stroke={pieceColor}
          strokeLinejoin='round'
          strokeWidth={borderPieceSize}
          fillRule='evenodd'
        />
        <path
          id='path5583'
          d='M9,19c0-2,1.5-2,2.5-4,1-1.5,1-1,.5-3.5A3.229,3.229,0,0,1,10.5,9C9,7.5,11,6.5,11,6.5a88.542,88.542,0,0,1,23,0s1.5,1,0,2.5a2.223,2.223,0,0,1-1,2.5c-.5,2.5-.5,2,.5,3.5,1,2,2.5,2,2.5,4A81.563,81.563,0,0,1,9,19Z'
          stroke={pieceColor}
          strokeLinejoin='round'
          strokeWidth={borderPieceSize}
          fillRule='evenodd'
        />
        <path
          id='path5585'
          d='M11.5,15c3.5,1,18.5,1,22,0'
          fill='none'
          stroke={pieceBorderColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={borderPieceSize}
          fillRule='evenodd'
        />
        <path
          id='path5587'
          d='M12,11.5a73.875,73.875,0,0,0,21,0'
          fill='none'
          stroke={pieceBorderColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={borderPieceSize}
          fillRule='evenodd'
        />
        <path
          id='path5589'
          d='M10.5,9c5,1,18.5,1,23.5,0'
          fill='none'
          stroke={pieceBorderColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={borderPieceSize}
          fillRule='evenodd'
        />
      </svg>
    </div>
  )
}

const bishopDarkImg = (
  sizeSquarePiece,
  rotate,
  pieceColor,
  pieceBorderColor,
  borderPieceSize
) => {
  sizeSquarePiece = sizeSquarePiece ? sizeSquarePiece : 60
  pieceColor = pieceColor ? pieceColor : '#000'
  pieceBorderColor = pieceBorderColor ? pieceBorderColor : '#fff'
  borderPieceSize = borderPieceSize ? borderPieceSize : 1

  return (
    <div
      style={
        rotate === 0
          ? { transform: 'rotate(0deg)' }
          : { transform: 'rotate(180deg)' }
      }
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={sizeSquarePiece}
        height={sizeSquarePiece}
        viewBox='2.5 1.5 40 40'
        fill={pieceColor}
      >
        <g id='g3866'>
          <path
            id='path3868'
            d='M9,36c3.39-.97,10.11.43,13.5-2,3.39,2.43,10.11,1.03,13.5,2a7.917,7.917,0,0,1,3,2c-.68.97-1.65.99-3,.5-3.39-.97-10.11.46-13.5-1-3.39,1.46-10.11.03-13.5,1-1.354.49-2.323.47-3-.5A4.21,4.21,0,0,1,9,36Z'
            stroke={pieceColor}
            strokeLinejoin='round'
            strokeWidth={borderPieceSize}
            fillRule='evenodd'
          />
          <path
            id='path3870'
            d='M15,32c2.5,2.5,12.5,2.5,15,0,.5-1.5,0-2,0-2,0-2.5-2.5-4-2.5-4,5.5-1.5,6-11.5-5-15.5-11,4-10.5,14-5,15.5,0,0-2.5,1.5-2.5,4C15,30,14.5,30.5,15,32Z'
            stroke={pieceColor}
            strokeLinejoin='round'
            strokeWidth={borderPieceSize}
            fillRule='evenodd'
          />
          <path
            id='path3872'
            d='M25,8a2.5,2.5,0,1,1-2.5-2.5A2.5,2.5,0,0,1,25,8Z'
            stroke={pieceColor}
            strokeLinejoin='round'
            strokeWidth={borderPieceSize}
            fillRule='evenodd'
          />
        </g>
        <path
          id='path3874'
          d='M17.5,26h10M15,30H30M22.5,15.5v5M20,18h5'
          fill='none'
          stroke={pieceBorderColor}
          strokeLinecap='round'
          strokeWidth={borderPieceSize}
          fillRule='evenodd'
        />
      </svg>
    </div>
  )
}

const horseDarkImg = (
  sizeSquarePiece,
  rotate,
  pieceColor,
  pieceBorderColor,
  borderPieceSize
) => {
  sizeSquarePiece = sizeSquarePiece ? sizeSquarePiece : 60
  pieceColor = pieceColor ? pieceColor : '#000'
  pieceBorderColor = pieceBorderColor ? pieceBorderColor : '#fff'
  borderPieceSize = borderPieceSize ? borderPieceSize : 1

  return (
    <div
      style={
        rotate === 0
          ? { transform: 'rotate(0deg)' }
          : { transform: 'rotate(180deg)' }
      }
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={sizeSquarePiece}
        height={sizeSquarePiece}
        viewBox='3 3 39 39'
        fill={pieceColor}
      >
        <path
          id='Caminho_13'
          data-name='Caminho 13'
          d='M22,10c10.5,1,16.5,8,16,29H15c0-9,10-6.5,8-21'
          stroke={pieceColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={borderPieceSize}
          fillRule='evenodd'
        />
        <path
          id='Caminho_14'
          data-name='Caminho 14'
          d='M24,18c.38,2.91-5.55,7.37-8,9-3,2-2.82,4.34-5,4-1.042-.94,1.41-3.04,0-3-1,0,.19,1.23-1,2-1,0-4,1-4-4,0-2,6-12,6-12s1.89-1.9,2-3.5c-.73-.994-.5-2-.5-3,1-1,3,2.5,3,2.5h2A6.708,6.708,0,0,1,21,7c1,0,1,3,1,3'
          stroke={pieceColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={borderPieceSize}
          fillRule='evenodd'
        />
        <path
          id='Caminho_15'
          data-name='Caminho 15'
          d='M9.5,25.5A.5.5,0,1,1,9,25,.5.5,0,0,1,9.5,25.5Z'
          fill={pieceBorderColor}
          stroke={pieceBorderColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={borderPieceSize}
          fillRule='evenodd'
        />
        <path
          id='Caminho_16'
          data-name='Caminho 16'
          d='M15,15.5c0,.828-.224,1.5-.5,1.5s-.5-.672-.5-1.5.224-1.5.5-1.5.5.672.5,1.5Z'
          transform='matrix(0.866, 0.5, -0.5, 0.866, 9.693, -5.173)'
          fill={pieceBorderColor}
          stroke={pieceBorderColor}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={borderPieceSize}
          fillRule='evenodd'
        />
        <path
          id='Caminho_17'
          data-name='Caminho 17'
          d='M24.55,10.4l-.45,1.45.5.15c3.15,1,5.65,2.49,7.9,6.75S35.75,29.06,35.25,39l-.05.5h2.25l.05-.5c.5-10.06-.88-16.85-3.25-21.34s-5.79-6.64-9.19-7.16Z'
          fill={pieceBorderColor}
          fillRule='evenodd'
        />
      </svg>
    </div>
  )
}

const towerDarkImg = (
  sizeSquarePiece,
  rotate,
  pieceColor,
  pieceBorderColor,
  borderPieceSize
) => {
  sizeSquarePiece = sizeSquarePiece ? sizeSquarePiece : 60
  pieceColor = pieceColor ? pieceColor : '#000'
  pieceBorderColor = pieceBorderColor ? pieceBorderColor : '#fff'
  borderPieceSize = borderPieceSize ? borderPieceSize : 1

  return (
    <div
      style={
        rotate === 0
          ? { transform: 'rotate(180deg)' }
          : { transform: 'rotate(0deg)' }
      }
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={sizeSquarePiece}
        height={sizeSquarePiece}
        viewBox='3 3 39 39'
        fill={pieceColor}
      >
        <path
          id='path3119'
          d='M9,6H36V9H9Z'
          stroke={pieceColor}
          strokeLinejoin='round'
          strokeWidth={borderPieceSize}
          fillRule='evenodd'
        />
        <path
          id='path3123'
          d='M12.5,13,14,15.5H31L32.5,13Z'
          stroke={pieceColor}
          strokeLinejoin='round'
          strokeWidth={borderPieceSize}
          fillRule='evenodd'
        />
        <path
          id='path3121'
          d='M12,9v4H33V9Z'
          stroke={pieceColor}
          strokeLinejoin='round'
          strokeWidth={borderPieceSize}
          fillRule='evenodd'
        />
        <path
          id='path3125'
          d='M14,15.5v13H31v-13Z'
          stroke={pieceColor}
          strokeWidth={borderPieceSize}
          fillRule='evenodd'
        />
        <path
          id='path3127'
          d='M14,28.5,11,31H34l-3-2.5Z'
          stroke={pieceColor}
          strokeLinejoin='round'
          strokeWidth={borderPieceSize}
          fillRule='evenodd'
        />
        <path
          id='path3129'
          d='M11,31v5h4V34h5v2h5V34h5v2h4V31Z'
          stroke={pieceColor}
          strokeLinejoin='round'
          strokeWidth={borderPieceSize}
          fillRule='evenodd'
        />
        <path
          id='path4967'
          d='M12,9.5H33'
          fill='none'
          stroke={pieceBorderColor}
          strokeLinecap='round'
          strokeWidth='1'
          fillRule='evenodd'
        />
        <path
          id='path4969'
          d='M13,13.5H32'
          fill='none'
          stroke={pieceBorderColor}
          strokeLinecap='round'
          strokeWidth='1'
          fillRule='evenodd'
        />
        <path
          id='path4971'
          d='M14,15.5H31'
          fill='none'
          stroke={pieceBorderColor}
          strokeLinecap='round'
          strokeWidth='1'
          fillRule='evenodd'
        />
        <path
          id='path5050'
          d='M14,28.5H31'
          fill='none'
          stroke={pieceBorderColor}
          strokeLinecap='round'
          strokeWidth='1'
          fillRule='evenodd'
        />
        <path
          id='path5052'
          d='M11,31H34'
          fill='none'
          stroke={pieceBorderColor}
          strokeLinecap='round'
          strokeWidth='1'
          fillRule='evenodd'
        />
      </svg>
    </div>
  )
}

const pawnDarkImg = (
  sizeSquarePiece,
  rotate,
  pieceColor,
  pieceBorderColor,
  borderPieceSize
) => {
  sizeSquarePiece = sizeSquarePiece ? sizeSquarePiece : 60
  pieceColor = pieceColor ? pieceColor : '#000'
  pieceBorderColor = pieceBorderColor ? pieceBorderColor : '#fff'
  borderPieceSize = borderPieceSize ? borderPieceSize : 1

  return (
    <div
      style={
        rotate === 0
          ? { transform: 'rotate(180deg)' }
          : { transform: 'rotate(0deg)' }
      }
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={sizeSquarePiece}
        height={sizeSquarePiece}
        viewBox='2.5 5 39 39'
      >
        <path
          id='path3194'
          fill={pieceColor}
          d='M22,39.5a4,4,0,0,0,3.219-6.375,6.463,6.463,0,0,0,.875-10.656C29.093,21.411,33.5,16.922,33.5,9h-23c0,7.922,4.407,12.411,7.406,13.469a6.462,6.462,0,0,0,.875,10.656A4,4,0,0,0,22,39.5Z'
          stroke={pieceBorderColor}
          strokeLinecap='round'
          strokeDashoffset='10'
          strokeWidth={borderPieceSize}
        />
      </svg>
    </div>
  )
}

export {
  kingDarkImg,
  queenDarkImg,
  bishopDarkImg,
  horseDarkImg,
  towerDarkImg,
  pawnDarkImg,
}
