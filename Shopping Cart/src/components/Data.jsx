import axios from 'axios'
export const temp = [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack",
        "price": 109.95,
        "images": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "images": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "images": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
        "id": 4,
        "title": "Mens Casual Slim Fit",
        "price": 15.99,
        "images": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
    {
        "id": 5,
        "title": "John Hardy Women's Silver Dragon Bracelet",
        "price": 695,
        "images": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    },
    {
        "id": 6,
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "images": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    },
    {
        "id": 7,
        "title": "White Gold Plated Princess",
        "price": 9.99,
        "images": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    },
    {
        "id": 8,
        "title": "Pierced Owl Rose Gold Plated Double",
        "price": 10.99,
        "images": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    },
    {
        "id": 9,
        "title": "WD 2TB External Hard Drive - USB 3.0 ",
        "price": 64,
        "images": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    },
    {
        "id": 10,
        "title": "SanDisk SSD PLUS 1TB Internal SSD ",
        "price": 109,
        "images": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    },
    {
        "id": 11,
        "title": "Silicon Power 256GB SSD ",
        "price": 109,
        "images": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    },
    {
        "id": 12,
        "title": "WD 4TB Gaming Drive ",
        "price": 114,
        "images": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    },
    {
        "id": 13,
        "title": "Acer SB220Q 21.5 inches Full HD Ultra-Thin",
        "price": 599,
        "images": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    },
    {
        "id": 14,
        "title": "Samsung 49-Inch 144Hz Curved Gaming Monitor ",
        "price": 999.99,
        "images": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    },
    {
        "id": 15,
        "title": "BIYLACLESEN Women's 3-in-1 Snowboard Winter Coats",
        "price": 56.99,
        "images": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    },
    {
        "id": 16,
        "title": "Lock and Love Women's Moto Biker Jacket",
        "price": 29.95,
        "images": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    },
    {
        "id": 17,
        "title": "Rain Jacket Women ",
        "price": 39.99,
        "images": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    },
    {
        "id": 18,
        "title": "MBJ Women's Short Sleeve Boat Neck  ",
        "price": 9.85,
        "images": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    },
    {
        "id": 19,
        "title": "Opna Women's Short Sleeve Moisture",
        "price": 7.95,
        "images": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    },
    {
        "id": 20,
        "title": "DANVOUY Womens T Shirt Casual Cotton Short",
        "price": 12.99,
        "images": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    },
]
async function getUser() {
    try {
        // https://dummyjson.com/products
        // // https://api.escuelajs.co/api/v1/products
        // const response = await axios.get("https://dummyjson.com/products");
        // const response2 = await axios.get("https://api.escuelajs.co/api/v1/products");
        // console.log(response.data)
        return [...temp];
        // return [...response.data.products, ...response2.data.slice(0, 17), ...temp];
    } catch (error) {
        console.error(error);
    }
}
export const data = await getUser();

