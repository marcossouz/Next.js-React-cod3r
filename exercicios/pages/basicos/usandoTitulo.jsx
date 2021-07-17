import Titulo from '../../components/Titulo'

export default function usandoTitulo() {
  return (
    <>
      <h1>Usando Titulo</h1>
      <Titulo 
        principal="Página de cadastro" 
        secundario="Incluir, alterar e excluir coisas"  
      />
      <Titulo 
        principal="Página de Login" 
        secundario="Informe o seu email e login"
        pequeno
      />
      <Titulo 
        principal="Página de Login" 
        secundario="Informe o seu email e login"
        pequeno={true}
      />
    </>
  )
}