export const isFullNameValid = (name) =>
    name.trim().length >= 2;

export const isPhoneValid = (phone) =>
    /^[0-9+\s()-]{7,20}$/.test(phone.trim());

export const isEmailValid = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());