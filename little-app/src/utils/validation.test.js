
import {
    isFullNameValid,
    isPhoneValid,
    isEmailValid
} from "./validation";

describe("Guest Information validations", () => {
    test("accepts a valid full name", () => {
        expect(isFullNameValid("Maria Lopez")).toBe(true);
    });

    test("rejects an empty full name", () => {
        expect(isFullNameValid("   ")).toBe(false);
    });

    test("accepts a valid phone number", () => {
        expect(isPhoneValid("+57 3001234567")).toBe(true);
    });

    test("rejects a phone number with letters", () => {
        expect(isPhoneValid("abc12345")).toBe(false);
    });

    test("accepts a valid email", () => {
        expect(isEmailValid("maria@example.com")).toBe(true);
    });

    test("rejects an invalid email", () => {
        expect(isEmailValid("mariaexample.com")).toBe(false);
    });
});
