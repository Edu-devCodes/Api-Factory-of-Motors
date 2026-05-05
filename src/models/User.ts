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