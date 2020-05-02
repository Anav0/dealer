import {CardBillingInfo} from "./CardBillingInfo";

export interface IPayment {
    checkout(billingInfo: CardBillingInfo): Promise<void>;
}