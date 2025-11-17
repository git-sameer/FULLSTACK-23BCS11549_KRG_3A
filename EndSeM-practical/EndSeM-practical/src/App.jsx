import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Smallapp';
function App() {
  const [count, setCount] = useState(0)
  const username="Arpit";
  return (
    <>
      <div>
        <h1>END TERM FINAL ASSESMENT</h1>
      </div>
      <div>
        <Header username={username} />  {/* prop drilling: App -> Header -> Icon -> UserProfile */}
          <main>
            <p>Small App.</p>
          </main>
      </div>
      <h1>Counter App</h1>
      <h2>Count is {count}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increase count 
        </button>
        <br></br>
        <br /><br /><br />
        <button onClick={() => setCount((count) => count - 1)}>
          Decrease count 
        </button>
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App




// When to use this vs Context:

// Use prop drilling for small trees or a few props — it’s simple and explicit.
// Use Context when many components need the same data or the tree is deep (to avoid repetitive forwarding).
// Extra note about your App: useState is used for the counter in App; that state is local to App and updated via setCount on button clicks — independent of the prop-drilling username.

// This is the complete flow and rationale: explicit, predictable prop passing without using Context.