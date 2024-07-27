import { Card } from "react-bootstrap";
import "./App.css";
import MyButton from "./components/ButtonComponent/ButtonComponent";
import Navbar from "./components/Navbar/Navbar";
import image1 from "./assets/prezident@2x.jpg";

function App() {

  const heroData = [
    {
      id: 1,
      title: "Мирзиёев рассказал, зачем было построено Сардобинское водохранилище",
      date: "05:28 / 16.05.2020",
      image: image1
    },
    {
      id: 1,
      title: "Мирзиёев рассказал, зачем было построено Сардобинское водохранилище",
      date: "05:28 / 16.05.2020",
      image: image1
    }
  ]

  return (
    <div className="container">
      <Navbar />

      <div className="wrapper">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://www.picsum.photos/300/200" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <MyButton>Go somewhere</MyButton>
          </Card.Body>
        </Card>
      </div>

      <img src={image1} alt="" />
    </div>
  );
}

export default App;
