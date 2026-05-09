export interface User {
    name: string;
    password: string;
}

// DTO data transfer Object
export interface CreatedUserDTO {
    name: string;
    hashedPassword: string;
}

export interface UserResponse {
    name: string;
}


export interface AuthUserPassword {
    id: string;
    name: string;
    passwordUser: string;
}

export interface AuthUserPasswordDTO {
    password: string;
    userPassword: string;
}

export interface AuthResponseDTO {
    token: string;
}