import axiosInstance from "./axios";
import {PaymentSessionResponse} from "./responses/PaymentSessionResponse";

export default class PaymentApi {
    createPaymentSession(productIds: string[], cancelUrl: string | undefined = undefined) {
        return axiosInstance.post<PaymentSessionResponse>('/payment/create-session', {
            productIds,
            cancelUrl
        })
    }
}