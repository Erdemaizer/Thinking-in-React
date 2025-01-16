import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FilterableProductTable />
  </StrictMode>,
)
