import type { AppProps } from 'next/app'
import { CssBaseline,ThemeProvider } from '@mui/material'

import { UIProvider } from '@/context/UI'
import { EntriesProvider } from '@/context/entries'
import { DarkTheme } from '@/themes'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UIProvider>
          <ThemeProvider theme={DarkTheme}>
            <CssBaseline/>
            <Component {...pageProps} />
          </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
  )
}
