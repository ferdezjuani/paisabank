export type Credentials = {
  email: string;
  password: string;
};

export interface LoginResponse {
  success: boolean;
  data: {
    name: string;
    token: string;
  };
}

export interface ICardBank {
  id: number;
  issuer: "mastercard" | "visa";
  currency: "ARS" | "USD";
  balance: string;
  expDate: string;
  lastDigits: string;
  name: string;
}

export interface Transaction {
  id: number;
  title: string;
  amount: string;
  transactionType: 'SUS' | 'CASH_IN' | 'CASH_OUT';
  date: string;
}
