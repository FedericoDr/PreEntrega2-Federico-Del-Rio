const products = [
    {
        id: 1,
        title: 'Doble Queso',
        price: '385',
        category: 'carne',
        stock: 15,
        descripcion: '2 Carnes a la parrilla, pan con semillas de sésamo, queso cheddar, lechuga, tomate, pepino, cebolla, kétchup y mayonesa.',
        image: 'https://s3-eu-central-1.amazonaws.com/bk-uy-demo.menu.app/wp-media-folder-burger-king-uruguay//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/27/WEB_Detail_WHOPPERDOBLEQUESO.png',
    },
    {
        id: 2,
        title: 'Big Burger',
        price: '285',
        category: 'carne',
        stock: 25,
        descripcion: '2 Carnes 100% vacunas hechas a la parrilla, pan con semillas de sésamo, queso cheddar, lechuga, pepinos, cebolla y mayonesa.',
        image: 'https://s3-eu-central-1.amazonaws.com/www.burgerking.com.uy/wp-media-folder-bk-uruguay//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/27/Whopper-Jr-Doble-1.png',
    },
    {
        id: 3,
        title: 'Doble Napolitana',
        price: '315',
        category: 'carne',
        stock: 35,
        descripcion: 'Dos carnes a la parrilla con una capa de queso cheddar, jamón y tomate fresco. Todo servido en un pan de semillas de sésamo tostado.',
        image: 'https://s3-eu-central-1.amazonaws.com/www.burgerking.com.uy/wp-media-folder-bk-uruguay//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/27/Doble-napo.png',
    },
    {
        id: 4,
        title: 'Pollo Jr. Doble',
        price: '215',
        category: 'pollo',
        stock: 45,
        descripcion: 'Dos carnes jugosas de pollo, lechuga, tomate y mayonesa.',
        image: 'https://s3-eu-central-1.amazonaws.com/www.burgerking.com.uy/wp-media-folder-bk-uruguay/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/27/pollo-jr.png',
    },
    {
        id: 5,
        title: 'Pollo Jr. Doble',
        price: '150',
        category: 'pollo',
        stock: 55,
        descripcion: 'Bocados de pollo jugosos por dentro y crujientes por fuera. Revestido en un empanado sazonado.',
        image: 'https://s3-eu-central-1.amazonaws.com/bk-uy-demo.menu.app/wp-media-folder-burger-king-uruguay//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/27/WEB_Detail_nuggetsx6.png',
    },
    {
        id: 6,
        title: 'Pollo Club',
        price: '340',
        category: 'pollo',
        stock: 65,
        descripcion: 'Carne de pollo blanca ligeramente empanada, lechuga, tomate, mayonesa, panceta, queso cheddar en un pan de semillas de sésamo.',
        image: 'https://s3-eu-central-1.amazonaws.com/www.burgerking.com.uy/wp-media-folder-bk-uruguay//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/27/club.png',
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 200);
    });
}


export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
};
