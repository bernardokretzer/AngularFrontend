export class UserDto {
    nome: string;
    senha: string;
    cargo: string;

    constructor(obj: UserDto) {
        this.nome = obj.nome;
        this.senha = obj.senha;
        this.cargo = obj.cargo;
    }
}