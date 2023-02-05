import "./App.css"
import imgs from "./imgs.json"
import Header from "./Header.jsx"
import Card from "./Card.jsx"
import Footer from "./Footer"
import { Row } from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <Header />
      <Row
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          flexWrap: "wrap",
        }}
      >
        {imgs.map((obj, k) => (
          <Card
            key={k}
            url={obj.url + "?w=200"}
            title={obj.title}
            description={obj.description}
          />
        ))}
      </Row>
      <Footer />
    </div>
  )
}

export default App
