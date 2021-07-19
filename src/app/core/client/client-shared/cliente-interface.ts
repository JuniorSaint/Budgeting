import { IPadrao } from "src/app/shared/interface-padrao";
export interface IClient extends IPadrao {
    _id?: string;
    name: string;
    cpf: number;
    email: string;
    phone: IPhone[],
    address: {
        street: string,
        district: string,
        complement: string,
        city: string,
        UF: string,
        zipCode: number,
    },
    note: string;
}
export interface IPhone {
    _id?: string,
    phoneType: string,
    phoneNumber: number,
    social: string
}
