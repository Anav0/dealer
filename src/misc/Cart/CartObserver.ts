import {Product} from "common/models/product";

// WZORZEC OBSERVATOR - Observer definition
export default interface CartObserver{
    update(cartItems: Product[]): void
}