import './App.css'
import { ThemeProvider } from '@material-ui/styles'

import AlbumLayout from './views/AlbumLayout'
import theme from './utils/material-ui'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AlbumLayout />
    </ThemeProvider>
  )
}

export default App
