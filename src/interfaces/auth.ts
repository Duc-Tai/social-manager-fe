export interface IRegister {
  email: string;
  password: string;
  code: string;
}

export interface ILogin extends IRegister {
  code: string;
}

export interface IForgotPassword {
  email: string;
}

export interface ICreateNewPassword {
  password: string;
  token: string;
}
