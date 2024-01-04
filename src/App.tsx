// turn on `vscode-import-cost` 
// and compare this:
import { kebabCase } from "lodash"
// to this:
import kebabCase_ from "lodash/kebabCase"

// You can confirm these numbers by commenting out 
// each of the <p>...</p> below and then running `npm run build`

function App() {
  return (
    <>
      <p>{kebabCase('#1: Vite + React')}</p>
      <p>{kebabCase_('#2: Vite + React')}</p>
    </>
  )
}

export default App
