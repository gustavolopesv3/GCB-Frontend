// import React, { useCallback, useState } from 'react';
import { useCallback, useState } from 'react';
import axios from 'axios';
import { ButtonSubmit, Container, SectionRegister } from './styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Header } from '../../components/Header';
import { FooterPage } from '../../components/Footer';

interface cepData {
  data: {
    cep: string;
    bairro: string;
    localidade: string;
    uf: string;
    logradouro: string;
  };
}

interface dataSaveProps {
  data: {
    nomeCompleto: string;
  };
}

const scremaForm = yup.object().shape({
  nomeCompleto: yup.string(),
});

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(scremaForm),
  });

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

  const dataSave: SubmitHandler<dataSaveProps> = (data) => {
    console.log(data);
  };

  const saveData = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

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
          <form onSubmit={handleSubmit(dataSave)}>
            <input
              type="text"
              name="nomeCompleto"
              placeholder="Nome completo"
              onChange={onChangeForm}
              value={pessoa.nomeCompleto}
            />
            <p>{errors.nomeCompleto?.message}</p>
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
              type="text"
              name="rua"
              placeholder="Endereço"
              onChange={(e) => setRua(e.target.value)}
              value={rua}
            />
            <input
              type="text"
              name="bairro"
              placeholder="Bairro"
              onChange={(e) => setBairro(e.target.value)}
              value={bairro}
            />
            <input
              type="text"
              name="cidade"
              placeholder="Cidade"
              onChange={(e) => setCidade(e.target.value)}
              value={cidade}
            />
            <input
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
      <FooterPage />
    </>
  );
};
