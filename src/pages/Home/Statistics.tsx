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
                            value: '+5.27%',
                            time: 'Nos Ultimos meses',
                        }}
                    ></StatisticsWidget>
                </Col>

                <Col sm={6}>

                <StatisticsWidget
                        icon="mdi mdi-chart-line-variant"
                        description="Produtividade"
                        title="Produtividade"
                        stats="5,052"
                        trend={{
                            textClass: 'text-success',
                            icon: 'mdi mdi-arrow-up-bold',
                            value: '+3.27%',
                            time: 'Nos Ultimos meses',
                        }}
                    ></StatisticsWidget>
                </Col>
                <Col sm={6}>
                    <StatisticsWidget
                        icon="mdi mdi-briefcase"
                        description="Aderencia ao App"
                        title="Demandas"
                        stats="7,5"
                        trend={{
                            textClass: 'text-danger',
                            icon: 'mdi mdi-arrow-down-bold',
                            value: '-5.27%',
                            time: 'Nos Ultimos meses',
                        }}
                    ></StatisticsWidget>
                </Col>

                <Col sm={6}>
                <StatisticsWidget
                        icon="mdi mdi-check"
                        description="Aderencia ao App"
                        title="FeedBack dos Clientes"
                        stats="9,4"
                        trend={{
                            textClass: 'text-success',
                            icon: 'mdi mdi-star-check',
                            value: '99.4%',
                            time: 'Nos Ultimos anos',
                        }}
                    ></StatisticsWidget>
                </Col>
            </Row>
        </>
    )
}
export{Statistics}