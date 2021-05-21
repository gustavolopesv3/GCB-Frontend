// import React, { useCallback, useState } from 'react';
import { useCallback, useState } from 'react';
import axios from 'axios';
import { ButtonSubmit, Container, SectionRegister } from './styles';
import { Header } from '../../components/Header';
import {validate} from 'gerador-validador-cpf'
interface cepData {
  data: {
    cep: string;
    bairro: string;
    localidade: string;
    uf: string;
    logradouro: string;
  };
}



export const Register = () => {


  const [pessoa, setPessoa] = useState({
    nomeCompleto: '',
    dataNascimento: '',
    cpf: '',
  });

  const [rua, setRua] = useState('');
  const [cep, setCep] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  const onChangeForm = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    console.log(e.currentTarget.value);

    setPessoa((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const saveData = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    const validaCpf = validate(pessoa.cpf)
    if(validaCpf){
      if(pessoa.nomeCompleto === "" || pessoa.dataNascimento === "" || pessoa.cpf === '' || cep === "" ){
        alert('Preencha todos os campo')
        return
      }
      localStorage.setItem(
        'GCB',
        JSON.stringify({
          pessoa,
          endereco: {
            cep,
            cidade,
            bairro,
            estado,
            rua,
          },
        })
      );
      document.cookie = `GCB=${JSON.stringify({
        pessoa,
        endereco: {
          cep,
          cidade,
          bairro,
          estado,
          rua,
        },
      })}`;
      alert('dados salvos com sucesso!!')
    }else{
      alert('CPF Invalido!')
    }

    
       
    
  };

  const handleLoadEndereco = useCallback(async (cep: string) => {
    const response: cepData = await axios.get(
      `https://viacep.com.br/ws/${cep}/json/`
    );

    console.log(response.data);

    setCep(response.data.cep);
    setRua(response.data.localidade);
    setBairro(response.data.bairro);
    setCidade(response.data.localidade);
    setEstado(response.data.uf);
  }, []);

  return (
    <>
      <SectionRegister>
        <Header />
        <Container>
          <form onSubmit={saveData}>
            <input
              type="text"
              name="nomeCompleto"
              placeholder="Nome completo"
              onChange={onChangeForm}
              value={pessoa.nomeCompleto}   
            />
            <input
              type="text"
              name="dataNascimento"
              placeholder="Data de Nascimento"
              onChange={onChangeForm}
              value={pessoa.dataNascimento}
            />
            <input
              type="text"
              name="cpf"
              placeholder="CPF"
              onChange={onChangeForm}
              value={pessoa.cpf}
            />

            <input
              type="text"
              name="cep"
              placeholder="CEP"
              onBlur={(e) => handleLoadEndereco(e.target.value)}
              onChange={(e) => setCep(e.target.value)}
              value={cep}
            />

            <input
              readOnly
              type="text"
              name="rua"
              placeholder="Endereço"
              onChange={(e) => setRua(e.target.value)}
              value={rua}
            />
            <input
              readOnly
              type="text"
              name="bairro"
              placeholder="Bairro"
              onChange={(e) => setBairro(e.target.value)}
              value={bairro}
            />
            <input
              readOnly
              type="text"
              name="cidade"
              placeholder="Cidade"
              onChange={(e) => setCidade(e.target.value)}
              value={cidade}
            />
            <input
              readOnly
              type="text"
              name="estado"
              placeholder="Estado"
              onChange={(e) => setEstado(e.target.value)}
              value={estado}
            />
            <ButtonSubmit>Enviar</ButtonSubmit>
          </form>
        </Container>
      </SectionRegister>
    </>
  );
};
