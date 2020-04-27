import {Product} from "common/models/product";

export default interface CartObserver{
    update(cartItems: Product[]): void
}