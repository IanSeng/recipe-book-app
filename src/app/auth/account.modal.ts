
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


export class User {
    constructor(
        public emai: string,
        public id: string,
        private _token: string,
        private _tokenExplirationDate: Date) { }

    get token() {
        if (!this._tokenExplirationDate || new Date() > this._tokenExplirationDate) {
            return null;
        }
        return this._token;
    }
}
