const menu = [
    {
        name: 'Dashboard',
        link: '/',
    },
    {
        name: 'Orders',
        link: '/',
    },
    {
        name: 'Stores',
        children: [
            {
                name: 'All',
                link: '/stores/all',
            },
            {
                name: 'New York',
                link: '/stores/new-york',
            },
            {
                name: 'Tel Aviv',
                link: '/stores/tel-aviv',
            },
            {
                name: 'Tokyo',
                link: '/stores/tokyo',
            },
        ],
    },
    {
        name: 'CMS',
        link: '/cms',
    },
];

export default menu;
