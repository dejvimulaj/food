import products from "./products";

const cartProducts = products.map(product=> ({
    ...product,
    quantity:null
}))

export default cartProducts