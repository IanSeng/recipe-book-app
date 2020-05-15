
export class AuthAccount {
    constructor(public email: string, public password: string) { }
}

export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: string;
}