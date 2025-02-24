import { Col, Row } from "react-bootstrap";
import { Statistics } from "./Statistics";
import  Activity  from "./Activity";

const HomeDashboard = ()=>{
    return(
        <>
            <Row>
                <div className="page-title-box">
                    <h1 className="page-title">Home Dashboard</h1>
                </div>
            </Row>
            <Row className="d-flex align-items-stretch">
                <Col sm={6} >
                    <Statistics/>
                </Col>
                <Col  sm={6} >
                    <Activity />
                </Col>

            </Row>
        </>
    )

}

export {HomeDashboard};