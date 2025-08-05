import type { LoginForm, validateResultLogin } from "../interface/login";

export const validateLogin = (loginForm: LoginForm): validateResultLogin => {
    if (!loginForm.email || !loginForm.password) return { valid: false, message: "All fields are required" };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(loginForm.email)) return { valid: false, message: "Invalid email format" };

    if (loginForm.password.length < 6) return { valid: false, message: "Password must be at least 6 characters" };

    return { valid: true };
}