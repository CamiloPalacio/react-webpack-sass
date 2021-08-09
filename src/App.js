import "./App.scss"
import Characters from "./components/Characters";
import Header from "./components/Header";
import './components/Header.css'
function App(){
    return(
    <>
        <Header title="Rick and Morty API"/>
        <Characters />
    </>
)
    
}

export default App