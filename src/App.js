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
        //
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
                    <div className="grid">
                        {itemsArray.map((item, index) => (
                            <Card>
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
