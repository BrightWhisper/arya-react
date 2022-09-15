import React from "react"
import "./styles/index.scss"
import Button, { ButtonSize, ButtonType } from "./components/Button/button"

import { useReducer } from "react"

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Button disabled>234243</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          234243
        </Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>百度</Button>
      </header>
    </div>
  )
}

export default App
