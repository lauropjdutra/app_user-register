import React, { useState, useEffect } from "react"

import axios from "axios"

import { useNavigate } from "react-router-dom"

import Users from "../../assets/users.svg"
import Arrow from "../../assets/arrow.svg"
import Trash from "../../assets/trash.svg"

import H1 from  "../../components/Title"
import ContainerItems from  "../../components/ContainerItems"
import Image from  "../../components/Image"
import Button from  "../../components/Button"

import {
  Container,
  User 
} from "./style"

const PageUsers = () => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  const baseUrl = "https://api-user-register.vercel.app"

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
                <p>{u.name}</p>
                <p>{u.age === 1 ? `${u.age} ano` : `${u.age} anos`}</p>
                <button onClick={() => delUser(u.id)}>
                  <img src={Trash} alt="Lixeira" />
                </button>
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

      </ContainerItems>
    </Container>
  )
}

export default PageUsers
