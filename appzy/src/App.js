import { useState } from 'react'
import { useEffect } from 'react'

import './App.css'

function App() {
  const url = 'https://breakingbadapi.com/api/characters'
  const [product, setProduct] = useState([])

  const apiGet = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setProduct(json)
      })
  }

  useEffect(() => {
    apiGet()
  }, [])

  return (
    <div className="App-header">
      <div className="App-name">
        <header>The Breaking Bad</header>
      </div>
      <div className="main-container">
        <div className='frame'>
          <ul>
            {product.map((product) => (
              <>
                <p key={product.id} className="img">
                  {product.img}
                </p>
                <p className="name">{product.name}</p>
                <p className="nickname">{product.nickname}</p>
                <p className="portrayed">Portrayed {product.portrayed}</p>
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
