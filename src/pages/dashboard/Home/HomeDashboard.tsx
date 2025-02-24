import { Col, Row } from "react-bootstrap";
import { Statistics } from "./Statistics";

const HomeDashboard = ()=>{
    return(
        <>
            <Row>
                <div className="page-title-box">
                    <h1 className="page-title">Home Dashboard</h1>
                </div>
            </Row>
            <Row>
            <Col xl={5} lg={6}>
                <Statistics/>
            </Col>
            </Row>
        </>
    )

}

export {HomeDashboard};