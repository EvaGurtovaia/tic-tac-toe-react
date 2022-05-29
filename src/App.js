import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useState } from "react";
import Icon from "./components/icon";

const itemsArray = new Array(9).fill("empty");

const App = () => {
    const [isCrossed, setIsCrossed] = useState(false);
    const [winMessage, setWinMessage] = useState("");

    const reloadGame = () => {
        setIsCrossed(false);
        setWinMessage("");
        itemsArray.fill("empty", 0, 9);
    };

    const checkisWinner = () => {
        if (
            itemsArray[0] === itemsArray[1] &&
            itemsArray[0] === itemsArray[2] &&
            itemsArray[0] !== "empty"
        ) {
            setWinMessage(`${itemsArray[0]} wins!`);
        } else if (
            itemsArray[3] !== "empty" &&
            itemsArray[3] === itemsArray[4] &&
            itemsArray[4] === itemsArray[5]
        ) {
            setWinMessage(`${itemsArray[3]} won`);
        } else if (
            itemsArray[6] !== "empty" &&
            itemsArray[6] === itemsArray[7] &&
            itemsArray[7] === itemsArray[8]
        ) {
            setWinMessage(`${itemsArray[6]} won`);
        } else if (
            itemsArray[0] !== "empty" &&
            itemsArray[0] === itemsArray[3] &&
            itemsArray[3] === itemsArray[6]
        ) {
            setWinMessage(`${itemsArray[0]} won`);
        } else if (
            itemsArray[1] !== "empty" &&
            itemsArray[1] === itemsArray[4] &&
            itemsArray[4] === itemsArray[7]
        ) {
            setWinMessage(`${itemsArray[1]} won`);
        } else if (
            itemsArray[2] !== "empty" &&
            itemsArray[2] === itemsArray[5] &&
            itemsArray[5] === itemsArray[8]
        ) {
            setWinMessage(`${itemsArray[2]} won`);
        } else if (
            itemsArray[0] !== "empty" &&
            itemsArray[0] === itemsArray[4] &&
            itemsArray[4] === itemsArray[8]
        ) {
            setWinMessage(`${itemsArray[0]} won`);
        } else if (
            itemsArray[2] !== "empty" &&
            itemsArray[2] === itemsArray[4] &&
            itemsArray[4] === itemsArray[6]
        ) {
            setWinMessage(`${itemsArray[2]} won`);
        }
    };

    const changeItem = (itemNumber) => {
        if (winMessage) {
            return toast(winMessage, { type: "success" });
        }
        if (itemsArray[itemNumber] === "empty") {
            itemsArray[itemNumber] = isCrossed ? "cross" : "circle";
            setIsCrossed(!isCrossed);
        } else {
            return toast("Already filled", { type: "error" });
        }
        checkisWinner();
    };

    return (
        <Container className="p-5">
            <ToastContainer position="bottom-center" />
            <Row>
                <Col md={6} className="offset-md-3">
                    {winMessage ? (
                        <div className="mb-2 mt-2">
                            <h1 className="text-success text-uppercase text-center">
                                {winMessage}
                            </h1>
                            <Button color="success" block onClick={reloadGame}>
                                Reload the game
                            </Button>
                        </div>
                    ) : (
                        <h1 className="text-center text-warning">
                            {isCrossed ? "Cross" : "Circle"} turns
                        </h1>
                    )}
                    <div className="grid">
                        {itemsArray.map((item, index) => (
                            <Card
                                color="warning"
                                onClick={() => changeItem(index)}
                                key={index}
                            >
                                <CardBody className="box">
                                    <Icon name={item} />
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default App;
