import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { environment } from 'src/environments/enviroments'
import { Observable } from 'rxjs';
import {AlunosData} from '../models/alunosData';
import { AlunosCadastro } from '../models/alunoCadastro';


@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  private baseUrl:string = "";
  private alunosData:AlunosData|any;


  constructor(private http:HttpClient) { 
    this.baseUrl=environment.faturamentoApi;

  }

  getAlunos():Observable<AlunosData[]>{
    this.alunosData = this.http.get<AlunosData[]>(`${this.baseUrl}${"alunos"}`)
    return this.alunosData;
  }

  cadastrarAluno(cadastro:AlunosCadastro):Observable<AlunosCadastro>{
    return this.http.post<AlunosCadastro>(`${this.baseUrl}${"alunos"}`,cadastro)
  }
  
  deletarAluno(cpf:string):Observable<any>{
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: new HttpParams().set("cpf", cpf)
    };

  return this.http.delete<any>(`${this.baseUrl}${"alunos"}`, options)

 }
 update(updateAluno:AlunosCadastro):Observable<AlunosCadastro>{
  return this.http.put<AlunosCadastro>(`${this.baseUrl}${"alunos"}`,updateAluno)
 }

}
