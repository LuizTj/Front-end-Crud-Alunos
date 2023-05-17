export type AlunosData ={
    id:string;
    nome: string;
    endereco:{
      cep:string;
      logradouro:string;
      bairro:string;
      localidade:string;
      uf:string;
    };
    contato:string;
    cpf:string;
  }