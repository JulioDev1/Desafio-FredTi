import RegisterWorker from "pages/Register/RegisterWorkers";

const sideBar = [
    {
        path: 'comunicacao',
        children: [
            {
                path: 'mural',
                element: <RegisterWorker />,
            },
            {
                path: 'contatos',
                element: <RegisterWorker />,
            }
        ]
    },
    {
        path: 'seguranca',
        children: [
            {
                path: 'cftv',
                element: <RegisterWorker />,
            },
            {
                path: 'portaria',
                element: <RegisterWorker />,
            }
        ]
    },
    {
        path: 'agendamentos',
        children: [
            {
                path: 'salas',
                element: <RegisterWorker />,
            },
            {
                path: 'veiculos',
                element: <RegisterWorker />,
            }
        ]
    },
    {
        path: 'documentos',
        children: [
            {
                path: 'politicas-rh',
                element: <RegisterWorker />,
            }
        ]
    },
    {
        path: 'processos',
        children: [
            {
                path: 'its',
                element: <RegisterWorker />,
            },
            {
                path: 'workflow',
                element: <RegisterWorker />,
            }
        ]
    },
    {
        path: 'dashboards',
        children: [
            {
                path: 'kpis-vendas',
                element: <RegisterWorker />,
            },
            {
                path: 'produtividade',
                element: <RegisterWorker />,
            }
        ]
    },
    {
        path: 'acessos',
        children: [
            {
                path: 'erp',
                element: <RegisterWorker />,
            },
            {
                path: 'crm',
                element: <RegisterWorker />,
            }
        ]
    },
    
];
export {sideBar}