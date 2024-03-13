import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SolicitacaoDto } from '../../pages/shared/models';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = 'http://localhost:3333'

  constructor(private http: HttpClient) { }

  /** Cadastra solicitações. */
  post(solicitacao: SolicitacaoDto): Observable<SolicitacaoDto> {
    const json = JSON.stringify(solicitacao);
    return this.http.post<SolicitacaoDto>(`${this.apiUrl}/solicitacao`, json, { headers: {"Content-Type": "application/json" } })
  }

  /** Altera solicitações */
  put(solicitacao: SolicitacaoDto, id: number): Observable<SolicitacaoDto> {
    const json = JSON.stringify(solicitacao);
    return this.http.put<SolicitacaoDto>(`${this.apiUrl}/solicitacao/update/${id}`, json, { headers: {"Content-Type": "application/json" } })
  }

  /** Busca dados filtrados pelo nome do solicitante, descrisão do item e status do fluxo. */
  getFiltro(obj: Object): Observable<SolicitacaoDto[]> {
    const { nome_solicitante, desc_item, solicitacao_status } = obj as SolicitacaoDto;
    return this.http.get<SolicitacaoDto[]>(`${this.apiUrl}/solicitacoes/filtro/${nome_solicitante}/${desc_item}/${solicitacao_status}`, { headers: {"Content-Type": "application/json" } })
  }

  /** Busca todas solicitações por um status específico. */
  getAllByStatus(status: string): Observable<SolicitacaoDto[]> {
    return this.http.get<SolicitacaoDto[]>(
      `${this.apiUrl}/solicitacaoFiltro/${status}`,
      { headers: {"Content-Type": "application/json" } }
    )
  }
}
