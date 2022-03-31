import ClassicChessBoardComponent from './components/ClassicChessBoardComponent'
import ClassicAnimatedChessBoardComponent from './components/ClassicAnimatedChessBoardComponent'
import defaultTheme from './assets/themes/chessBoardThemes'

const App = () => {
  return (
    <div className='App'>
      <div style={{ display: 'flex' }}>
        <div style={{ margin: '8px' }}>
          <p>ClassicChessBoard</p>
          <ClassicChessBoardComponent theme={defaultTheme} size={500} />
        </div>

        <div style={{ margin: '8px' }}>
          <p>ClassicAnimatedChessBoardComponent</p>
          <p style={{ margin: '8px' }}>
            {' '}
            Aqui já estava começando a esquematizar e testar a lógica de
            animação das peças (Dá para ver o numero da animação no canto
            direito do quadrado onde a peça se encontra)
          </p>
          <ClassicAnimatedChessBoardComponent theme={defaultTheme} size={500} />
        </div>
      </div>
    </div>
  )
}

export default App
