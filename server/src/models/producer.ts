import {getModelForClass, prop} from "@typegoose/typegoose";

export class Producer {
    _id: string

    @prop({ required: true })
    desc: string;

    @prop({ required: true })
    name: string;

}
export const ProducerModel = getModelForClass(Producer);



