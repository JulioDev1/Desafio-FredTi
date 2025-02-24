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
        url:"/home"
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
    
];

export { MENU_ITEMS };
