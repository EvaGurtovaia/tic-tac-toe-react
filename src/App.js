import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import "./App.css";
import Icon from "./components/icon";

const itemsArray = new Array(9).fill("empty");

const App = () => {
    const [isCrossed, setIsCrossed] = useState(false);
    const [winMessage, setWinMessage] = useState("");

    const reloadGame = () => {
        //
    };

    const checkisWinner = () => {
        //
    };

    const changeItem = (itemNumber) => {
        //
    };

    return (
        <div className="App">
            <Icon />
        </div>
    );
};

export default App;
