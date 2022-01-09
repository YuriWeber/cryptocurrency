import "./style/imports.css"
import api from "./api"


function App() {

  const clicado = async () => {
    try {
      const {data} = await api.get("/")
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <button onClick={clicado}>CLICA</button>
  );
}

export default App;
