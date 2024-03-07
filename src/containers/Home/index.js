import React, { useState, useRef } from "react"

import axios from "axios"

import { useNavigate } from "react-router-dom"

import Register from "../../assets/register.png"
import Arrow from "../../assets/arrow.svg"

import H1 from "../../components/Title"
import ContainerItems from "../../components/ContainerItems"
import Image from "../../components/Image"
import Button from "../../components/Button"
import Footer from "../../components/Footer"

import {
  Container,
  Label,
  Input,
} from "./style"

const App = () => {
  const [users, setUsers] = useState([])
  const typedName = useRef()
  const typedAge = useRef()
  const typedEmail = useRef()
  const navigate = useNavigate()

  const baseUrl = "https://api-user-register.vercel.app"

  const capitalize = string => {
    return string
      .toLowerCase()
      .replace(/(?:^|\s)\S/g, char => char.toUpperCase())
  }

  const addUser = async () => {
    const name = capitalize(typedName.current.value)
    const age = parseFloat(typedAge.current.value)
    const email = typedEmail.current.value
    if (name !== "" && !isNaN(age) && age > 0) {
      const { data } = await axios.post(`${baseUrl}/users`, {name, age, email,})
      setUsers([...users, data])
      navigate("/users")
    } else {
      alert("Por favor, preencha os campos corretamente.")
    }
  }

  const addUserOnEnter = (e) => e.key === "Enter" ? addUser() : null

  return (
    <Container>
      <Image src={Register} alt="Formulário de registro" />

      <ContainerItems>
        <H1 prop="Esta é uma propriedade">Cadastro</H1>

        <Label>Nome</Label>
        <Input name="name" id="name" type="text" ref={typedName} placeholder="Digite seu nome" autoFocus autoComplete="off" autoCapitalize="words"/>

        <Label>Idade</Label>
        <Input name="age" id="age" type="number" ref={typedAge} placeholder="Digite sua idade"/>

        <Label>E-mail</Label>
        <Input name="email" id="email" type="email" onKeyDown={addUserOnEnter} ref={typedEmail} placeholder="Digite seu e-mail" autoComplete="off" autoCapitalize="words"/>
        
        <Button
          onClick={addUser}
        >
          Cadastrar
          <img src={Arrow} alt="Seta" />
        </Button>
        <Footer>
        <span title="Desenvolvido por Lauro Dutra">Copyright &copy; 2024 - Desenvolvido por <a href="https://www.linkedin.com/in/lauropjdutra" target="_blank" rel="noreferrer">Lauro Dutra</a></span>
        </Footer>
      </ContainerItems>
    </Container>
  )
}

export default App