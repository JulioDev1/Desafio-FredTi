import { Table, Card, Button, Form, InputGroup, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const employees = [
    { id: 1, name: "Carlos Almeida", role: "Desenvolvedor Full Stack", department: "TI", hireDate: "2023-08-15", salary: "R$8.500", status: "Ativo", avatar: "https://i.pravatar.cc/150?img=1" },
    { id: 2, name: "Amanda Costa", role: "UX Designer", department: "Design", hireDate: "2022-05-30", salary: "R$7.200", status: "Ativo", avatar: "https://i.pravatar.cc/150?img=2" },
    { id: 3, name: "Rafael Lima", role: "Gerente de Projetos", department: "PMO", hireDate: "2021-11-10", salary: "R$12.000", status: "Inativo", avatar: "https://i.pravatar.cc/150?img=3" },
];

const RegisterWorkers = () => {
    return (
        <Card className="shadow-sm rounded">
            <Card.Body>
                {/* Cabeçalho */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="mb-0">Cadastrar Funcionário</h4>
                    <div className="d-flex gap-2">
                        {/* Campo de Pesquisa */}
                        <InputGroup className="w-auto">
                            <InputGroup.Text><i className="mdi mdi-magnify"></i></InputGroup.Text>
                            <Form.Control placeholder="Pesquisar..." />
                        </InputGroup>
                        {/* Botão de Adicionar */}
                        <Button variant="success">
                            <i className="mdi mdi-account-plus me-1"></i> Adicionar Funcionário
                        </Button>
                    </div>
                </div>

                {/* Tabela */}
                <Table responsive bordered hover>
                    <thead className="table-light">
                        <tr>
                            <th>Funcionário</th>
                            <th>Cargo</th>
                            <th>Departamento</th>
                            <th>Data de Contratação</th>
                            <th>Salário</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp) => (
                            <tr key={emp.id}>
                                <td className="d-flex align-items-center gap-2">
                                    <img src={emp.avatar} alt={emp.name} className="rounded-circle" width="40" height="40" />
                                    {emp.name}
                                </td>
                                <td>{emp.role}</td>
                                <td>{emp.department}</td>
                                <td>{emp.hireDate}</td>
                                <td>{emp.salary}</td>
                                <td>
                                    <Badge bg={emp.status === "Ativo" ? "success" : "danger"}>
                                        {emp.status}
                                    </Badge>
                                </td>
                                {/* Ícones de ação */}
                                <td className="text-center">
                                    <Link to="#" className="text-primary me-2"><i className="mdi mdi-eye"></i></Link>
                                    <Link to="#" className="text-warning me-2"><i className="mdi mdi-pencil"></i></Link>
                                    <Link to="#" className="text-danger"><i className="mdi mdi-delete"></i></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default RegisterWorkers;

