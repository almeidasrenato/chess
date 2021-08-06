import Chessboard from './components/ChessBoard'
import defaultTheme from './assets/themes/chessBoardThemes'

const App = () => {
  return (
    <div className='App'>
      <Chessboard theme={defaultTheme} size={600} />
    </div>
  )
}

export default App
