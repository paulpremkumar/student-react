export interface LoginForm {
    email: string;
    password: string;
}
export interface validateResultLogin {
    valid: boolean;
    message?: string;
}