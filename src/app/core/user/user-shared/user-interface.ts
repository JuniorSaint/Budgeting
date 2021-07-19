import { IPadrao } from "src/app/shared/interface-padrao";
export interface IUser extends IPadrao{
  _id?: string,
  name: string,
  email: string,
  password: string,
  repPassword : string,
  active: boolean,
  userKind: string,
  token?: string;
}
