import { useState } from 'react'
import { Modal } from './UI/Modal/modal'

function App() {
  const [isOpen,setIsOpen] = useState(false)

  return (
    <>
      <button onClick={()=>setIsOpen(true)}>open modal</button>
      <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)}> hello world</Modal>
    </>
  )
}

export default App
