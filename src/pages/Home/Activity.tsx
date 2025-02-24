import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import { CardTitle, Timeline, TimelineItem } from 'components';

const Activity = () => {
    return (
        <Card className='h-100'>
            <Card.Body className="pb-0">
                <CardTitle
                    containerClass="d-flex align-items-center justify-content-between mb-2"
                    title="Notificações"
                    menuItems={[
                        { label: 'Sales Report' },
                        { label: 'Export Report' },
                        { label: 'Profit' },
                        { label: 'Action' },
                    ]}
                />
            </Card.Body>
            <SimpleBar style={{ maxHeight: '412px', width: '100%' }}>
                <Card.Body className="py-0">
                    <Timeline>
                        <TimelineItem>
                            <i className="mdi mdi-upload bg-info-lighten text-info timeline-icon"></i>
                            <div className="timeline-item-info">
                                <Link to="#" className="text-info fw-bold mb-1 d-block">
                                    Recursos Humanos adicinonou um novo usuário
                                </Link>
                                <small>Novo Funcionario</small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">5 minutos atrás </small>
                                </p>
                            </div>
                        </TimelineItem>

                        <TimelineItem>
                            <i className="mdi mdi-airplane bg-primary-lighten text-primary timeline-icon"></i>
                            <div className="timeline-item-info">
                                <Link to="#" className="text-primary fw-bold mb-1 d-block">

                                </Link>
                                <small>
                                    Dave Gamache added <span className="fw-bold">Admin Dashboard</span>
                                </small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">30 minutes ago</small>
                                </p>
                            </div>
                        </TimelineItem>

                        <TimelineItem>
                            <i className="mdi mdi-microphone bg-info-lighten text-info timeline-icon"></i>
                            <div className="timeline-item-info">
                                <Link to="#" className="text-info fw-bold mb-1 d-block">
                                    Emilia - RH
                                </Link>
                                <small>
                                    mandou um mensagem
                                    <span className="fw-bold">"Você está ai?"</span>
                                </small>
                                <p className="mb-0 pb-2">
                                    <small className="text-muted">2 horas atrás</small>
                                </p>
                            </div>
                        </TimelineItem>
                    </Timeline>
                </Card.Body>
            </SimpleBar>
        </Card>
    );
};

export default Activity;