export type MenuItemType = {
    key: string;
    label: string;
    isTitle?: boolean;
    icon?: string;
    url?: string;
    badge?: {
        variant: string;
        text: string;
    };
    parentKey?: string;
    target?: string;
    children?: MenuItemType[];
};

const MENU_ITEMS: MenuItemType[] = [
    { key: 'navigation', label: 'Navigation', isTitle: true },
    {
        key: 'home',
        label: 'Home',
        isTitle: false,
        icon: 'uil-home-alt',
        url: "/home"
    },
    { key: 'apps', label: 'Apps', isTitle: true },
    {
        key: 'apps-ecommerce',
        label: 'Ecommerce',
        isTitle: false,
        icon: 'uil-store',
        children: [
            {
                key: 'ecommerce-products',
                label: 'Products',
                url: '/apps/ecommerce/products',
                parentKey: 'apps-ecommerce',
            },
            {
                key: 'ecommerce-details',
                label: 'Products Details',
                url: '/apps/ecommerce/details',
                parentKey: 'apps-ecommerce',
            },
            {
                key: 'ecommerce-orders',
                label: 'Orders',
                url: '/apps/ecommerce/orders',
                parentKey: 'apps-ecommerce',
            },
            {
                key: 'ecommerce-order-details',
                label: 'Order Details',
                url: '/apps/ecommerce/order/details',
                parentKey: 'apps-ecommerce',
            },
            {
                key: 'ecommerce-customers',
                label: 'Customers',
                url: '/apps/ecommerce/customers',
                parentKey: 'apps-ecommerce',
            },
            {
                key: 'ecommerce-shopping-cart',
                label: 'Shopping Cart',
                url: '/apps/ecommerce/shopping-cart',
                parentKey: 'apps-ecommerce',
            },
            {
                key: 'ecommerce-checkout',
                label: 'Checkout',
                url: '/apps/ecommerce/checkout',
                parentKey: 'apps-ecommerce',
            },
            {
                key: 'ecommerce-sellers',
                label: 'Sellers',
                url: '/apps/ecommerce/sellers',
                parentKey: 'apps-ecommerce',
            },
        ],

    },
    {
        key: 'apps-comunicacao',
        label: 'COMUNICAÇÃO',
        isTitle: false,
        icon: 'mdi mdi-message-text',
        children: [
            {
                key: 'comunicacao-mural',
                label: 'Mural',
                url: '/apps/comunicacao/mural',
                parentKey: 'apps-comunicacao',
            },
            {
                key: 'comunicacao-contatos',
                label: 'Contato',
                url: '/apps/comunicacao/contatos',
                parentKey: 'apps-comunicacao',
            }
        ]
    },
    {
        key: 'apps-seguranca',
        label: 'SEGURANÇA',
        isTitle: false,
        icon: 'mdi mdi-shield-lock',
        children: [
            {
                key: 'seguranca-cftv',
                label: 'CFTV',
                url: '/apps/seguranca/cftv',
                parentKey: 'apps-seguranca',
            },
            {
                key: 'seguranca-portaria',
                label: 'Portaria',
                url: '/apps/seguranca/portaria',
                parentKey: 'apps-seguranca',
            }
        ]
    },
    {
        key: 'apps-agendamentos',
        label: 'AGENDAMENTOS',
        isTitle: false,
        icon: 'mdi mdi-calendar-clock',
        children: [
            {
                key: 'agendamentos-salas',
                label: 'Salas',
                url: '/apps/agendamentos/salas',
                parentKey: 'apps-agendamentos',
            },
            {
                key: 'agendamentos-veiculos',
                label: 'Veículos',
                url: '/apps/agendamentos/veiculos',
                parentKey: 'apps-agendamentos',
            }
        ]
    },
    {
        key: 'apps-documentos',
        label: 'DOCUMENTOS',
        isTitle: false,
        icon: 'mdi mdi-file-document',
        children: [
            {
                key: 'documentos-politicas-rh',
                label: 'Políticas RH',
                url: '/apps/documentos/politicas-rh',
                parentKey: 'apps-documentos',
            }
        ]
    },
    {
        key: 'apps-processos',
        label: 'PROCESSOS',
        isTitle: false,
        icon: 'mdi mdi-play-box-outline',
        children: [
            {
                key: 'processos-its',
                label: 'ITs',
                url: '/apps/processos/its',
                parentKey: 'apps-processos',
            },
            {
                key: 'processos-workflow',
                label: 'Workflow',
                url: '/apps/processos/workflow',
                parentKey: 'apps-processos',
            }
        ]
    },
    {
        key: 'apps-dashboards',
        label: 'DASHBOARDS',
        isTitle: false,
        icon: 'mdi mdi-chart-bar',
        children: [
            {
                key: 'dashboards-kpis-vendas',
                label: 'KPIs Vendas',
                url: '/apps/dashboards/kpis-vendas',
                parentKey: 'apps-dashboards',
            },
            {
                key: 'dashboards-produtividade',
                label: 'Produtividade',
                url: '/apps/dashboards/produtividade',
                parentKey: 'apps-dashboards',
            }
        ]
    },
    {
        key: 'apps-acessos',
        label: 'ACESSOS',
        isTitle: false,
        icon: 'mdi mdi-login',
        children: [
            {
                key: 'acessos-erp',
                label: 'ERP',
                url: '/apps/acessos/erp',
                parentKey: 'apps-acessos',
            },
            {
                key: 'acessos-crm',
                label: 'CRM',
                url: '/apps/acessos/crm',
                parentKey: 'apps-acessos',
            }
        ]
    }


];

export { MENU_ITEMS };
