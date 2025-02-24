import { StatisticsWidget } from "components"
import { Col, Row } from "react-bootstrap"

const Statistics = () => {
    return (
        <>
            <Row>
                <Col sm={6}>
                <StatisticsWidget
                        icon="mdi mdi-account-multiple"
                        description="Aderencia ao App"
                        title="Usuários"
                        stats="40,400"
                        trend={{
                            textClass: 'text-success',
                            icon: 'mdi mdi-arrow-up-bold',
                            value: '5.27%',
                            time: 'Since last month',
                        }}
                    ></StatisticsWidget>
                </Col>

                <Col sm={6}>

                <StatisticsWidget
                        icon="mdi mdi-account-multiple"
                        description="Aderencia ao App"
                        title="Usuários"
                        stats="40,400"
                        trend={{
                            textClass: 'text-success',
                            icon: 'mdi mdi-arrow-up-bold',
                            value: '5.27%',
                            time: 'Since last month',
                        }}
                    ></StatisticsWidget>
                </Col>
                <Col sm={6}>
                    <StatisticsWidget
                        icon="mdi mdi-account-multiple"
                        description="Aderencia ao App"
                        title="Usuários"
                        stats="40,400"
                        trend={{
                            textClass: 'text-success',
                            icon: 'mdi mdi-arrow-up-bold',
                            value: '5.27%',
                            time: 'Since last month',
                        }}
                    ></StatisticsWidget>
                </Col>

                <Col sm={6}>
                <StatisticsWidget
                        icon="mdi mdi-account-multiple"
                        description="Aderencia ao App"
                        title="Usuários"
                        stats="40,400"
                        trend={{
                            textClass: 'text-success',
                            icon: 'mdi mdi-arrow-up-bold',
                            value: '5.27%',
                            time: 'Since last month',
                        }}
                    ></StatisticsWidget>
                </Col>
            </Row>
        </>
    )
}
export{Statistics}