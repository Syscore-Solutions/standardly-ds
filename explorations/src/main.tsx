import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'cal-sans'
import '@fontsource/geist-sans/400.css'
import '@fontsource/geist-sans/500.css'
import '@fontsource/geist-sans/600.css'
import '@fontsource/geist-sans/700.css'
import '@fontsource/geist-mono/400.css'
import '@fontsource/geist-mono/500.css'
import './shared/primitives.css'
import './shared/chrome.css'
import { Shell } from './shared/Shell'
import { SprintIndex } from './shared/SprintIndex'
import { DirectionPlaceholder } from './shared/DirectionPlaceholder'
import { O1Demo } from './o1/demo/O1Demo'
import { O1Styleguide } from './o1/styleguide/O1Styleguide'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Shell />}>
          <Route index element={<SprintIndex />} />
          <Route path="/o1" element={<O1Demo />} />
          <Route path="/o1/styleguide" element={<O1Styleguide />} />
          <Route path="/o2" element={<DirectionPlaceholder id="o2" />} />
          <Route path="/o2/styleguide" element={<DirectionPlaceholder id="o2" styleguide />} />
          <Route path="/o3" element={<DirectionPlaceholder id="o3" />} />
          <Route path="/o3/styleguide" element={<DirectionPlaceholder id="o3" styleguide />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
