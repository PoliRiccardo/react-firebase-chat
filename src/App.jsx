import Chat from "./components/chat/chat"
import Detail from "./components/detail/detail"
import List from "./components/list/list"

const App = () => {
  return (
    <div className='container'>
      <List></List>
      <Chat></Chat>
      <Detail></Detail>
    </div>
    
  )
}

export default App