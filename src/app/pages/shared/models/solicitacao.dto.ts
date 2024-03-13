export class SolicitacaoDto {
    id?: number;
    nome_solicitante: string;
    desc_item: string;
    preco_produto: string;
    solicitacao_status: string;
    observacao?: string;

    constructor(obj: SolicitacaoDto) {
        this.nome_solicitante = obj.nome_solicitante;
        this.desc_item = obj.desc_item;
        this.preco_produto = obj.preco_produto;
        this.solicitacao_status = obj.solicitacao_status;
        this.observacao = obj?.observacao ?? '';
    }
}