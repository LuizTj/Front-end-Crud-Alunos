import { Component, OnInit, Inject, DoCheck } from '@angular/core';
import { AlunosData } from 'src/app/models/alunosData';
import { AlunosCadastro } from 'src/app/models/alunoCadastro';
import { AlunosService } from 'src/app/service/alunos.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuarioDialogComponent } from 'src/app/componentes/usuario-dialog/usuario-dialog.component';
import { UsuarioDialogUpdateComponent } from 'src/app/coponentes/usuario-dialog-update/usuario-dialog-update.component';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent  implements OnInit, DoCheck{
  campo: any = document.querySelector(".cadastro-container");

  dados:AlunosData[];
  alunosData:AlunosData[];
  display = 'none';
  altura = '0px';

  nome:string ='';
  cpf:string ='';
  contato:string ='';
  cep:string ='';
  buscarPorNome! :string;

 
  
  constructor(private service: AlunosService,private dialog:MatDialog) {
    this.dados = []

    this.alunosData = this.dados;
   
  }

  ngDoCheck(): void {
    console.log('doCheck');
    if(this.buscarPorNome !=null || this.buscarPorNome!= ''){
      console.log('Inicio doCheck/ oesquisa');

      this.alunosData = this.teste();

    }else{
      console.log('retornando todos os dados');
      this.alunosData = this.dados;
    }
  }

  teste(){
    const regex = new RegExp(this.buscarPorNome, 'i');
    return this.dados.filter(nomes=> regex.test(nomes.nome));
  }


    update(item:AlunosData): void {
      this.dialog.open(UsuarioDialogUpdateComponent,{
        data:{
          id:item.id,
          nome:item.nome,
          cpf:item.cpf,
          contato:item.contato,
          cep:item.endereco.cep
        }
       

      }) 
      
    this.dialog.afterAllClosed.subscribe(()=>{
      console.log("Modal fechou");
      this.carregarCadastro();
    })
    }

    deletar(item:AlunosData): void {
      this.dialog.open(UsuarioDialogComponent,{
        data:{
          nome:item.nome,
          cpf:item.cpf,
          contato:item.contato,
          cep:item.endereco.cep
        }
       

      }) 
      
    this.dialog.afterAllClosed.subscribe(()=>{
      console.log("Modal fechou");
      this.carregarCadastro();
    })
    }


   
    ngOnInit(): void {
      this.carregarCadastro();
    }

    carregarCadastro() : void{
      this.service.getAlunos().subscribe({
        next:(res)=> {
          this.dados = res;
          console.log(this.dados);

        },
        error:(err)=>{
          console.log("Deu Ruim!!!")
          alert("A conexão com o servidor falhou")

        } 

      });

    }

    cadastrar(): void{
      const aluno : AlunosCadastro ={
        nome: this.nome,
        cpf: this.cpf,
        contato : this.contato,
        endereco: {cep:this.cep}

      };

      this.service.cadastrarAluno(aluno).subscribe({
        next:(res) =>{
          this.carregarCadastro();
          console.log("cadastrou");
          console.log(aluno);
          console.log("Sucesso ao Cadastrar Aluno", res)

        },
        error:(err) =>{
          console.log(aluno.contato + " "+ aluno.nome);
      
        }
      })
    }

    

    mudarDisplay(){
      if(this.display == 'none'){
        this.display = 'block'
    
      }else{
        this.display = 'none'
    
      }
    }



}
/*@Component({
  selector: 'usuario-dialog',
  templateUrl: './usuario-dialog.component.html',
})
export class UsuarioDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
}

}

function openDialog() {
  throw new Error('Function not implemented.');
}*/


