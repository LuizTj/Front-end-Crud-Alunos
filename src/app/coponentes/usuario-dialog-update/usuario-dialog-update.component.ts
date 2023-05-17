import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlunosService } from 'src/app/service/alunos.service';
import { AlunosCadastro } from 'src/app/models/alunoCadastro';


@Component({
  selector: 'app-usuario-dialog-update',
  templateUrl: './usuario-dialog-update.component.html',
  styleUrls: ['./usuario-dialog-update.component.css']
})
export class UsuarioDialogUpdateComponent {
  id:string;
  nome:string;
  cpf:string;
  contato:string;
  cep:string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private service:AlunosService) {
    this.id= data.id;
    this.nome = data.nome;
    this.cpf = data.cpf;
    this.contato = data.contato;
    this.cep = data.cep;
  }
    
  ngOnInit(): void {
  }

 atualizar():void{
  const aluno : AlunosCadastro ={
    id:this.id,
    nome: this.nome,
    cpf: this.cpf,
    contato : this.contato,
    endereco: {cep:this.cep}
 };
 console.log(aluno.id)

 this.service.update(aluno).subscribe({
  next:(res) =>{
    console.log("Usuario Atualizado!");
  },
  error:(err)=>{
    console.log(err)
  }
});

}


}
