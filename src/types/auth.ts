export interface LoginResponse {
    access_token: string;
}

export interface RegisterResponse {
    access_token: string;
    user: {
        id: number;
        name: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
    };
}