import React, { useState, useEffect } from "react"

import axios from "axios"

import { useNavigate } from "react-router-dom"

import Users from "../../assets/users.png"
import Arrow from "../../assets/arrow.svg"
import Trash from "../../assets/trash.svg"
import UserVector from "../../assets/user.png"

import H1 from  "../../components/Title"
import ContainerItems from  "../../components/ContainerItems"
import Image from  "../../components/Image"
import Button from  "../../components/Button"
import Footer from "../../components/Footer"

import {
  Container,
  User 
} from "./style"

const PageUsers = () => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  // const baseUrl = "https://api-user-register.vercel.app"
  const baseUrl = "http://localhost:3001"

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get(`${baseUrl}/users`)
      setUsers(data)
    }
    getUsers()
  }, [])

  const delUser = async (uId) => {
    const { data } = await axios.delete(`${baseUrl}/users/${uId}`)
    setUsers(data)
  }

  return (
    <Container>
      <Image src={Users} alt="Três vetores de usuários" marginTop={true} />

      <ContainerItems>
        <H1>Usuários</H1>

        <ul>
          {users.length > 0 ? (
            users.map((u) => (
              <User key={u.id}>
                <div>
                  <img src={UserVector} alt="" />
                <div>
                <p><b>{u.name}</b>, {u.age === 1 ? `${u.age} ano` : `${u.age} anos`}</p>
                <p>{u.email}</p>
                </div>
                </div>
                <div>
                <button onClick={() => delUser(u.id)}>
                  <img src={Trash} alt="Lixeira" />
                </button>
                </div>
              </User>
            ))                                  
          ) : (
            <User>
              <span>Nenhum usuário cadastrado.</span>
            </User>
          )}
        </ul>

        <Button backTheme={true} onClick={() => navigate("/")}>
          <img src={Arrow} alt="Seta" />
          Voltar
        </Button>
        <Footer>
        <span title="Desenvolvido por Lauro Dutra">Copyright &copy; 2024 - Desenvolvido por <a href="https://www.linkedin.com/in/lauropjdutra" target="_blank" rel="noreferrer">Lauro Dutra</a></span>
        </Footer>
      </ContainerItems>
    </Container>
  )
}

export default PageUsers
