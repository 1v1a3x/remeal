import { h, render } from 'preact'
import { Header } from './components/header'
import { Blocks } from './components/Blocks'
import { ThemeProvider } from './components/ThemeProvider'

import './index.css'

render(
  <ThemeProvider>
    <Header />
    <Blocks />
  </ThemeProvider>,
  document.getElementById('app')
)
