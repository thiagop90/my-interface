import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'

import { APIRepo, APIUser } from '../../@types'
import { RepoCard } from './RepoCard'
import { RepoIcon } from './RepoCard/styles'

import { Container, Repos, Tab, Main, Loading } from './styles'

interface Data {
  user?: APIUser
  repos?: APIRepo[]
  error?: string
}

export const Repo: React.FC = () => {
  const { username = 'thiagop90' } = useParams()
  const [data, setData] = useState<Data>()

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
    ]).then(async (responses) => {
      const [userResponse, reposResponse] = responses

      if (userResponse.status === 404) {
        setData({ error: 'User not found!' })
        return
      }

      const user = await userResponse.json()
      const repos = await reposResponse.json()

      setData({
        user,
        repos,
      })
    })
  }, [username])

  if (data?.error) {
    return <h1>{data.error}</h1>
  }

  if (!data?.user || !data?.repos) {
    return (
      <Loading>
        <BeatLoader color="#007FFF" />
      </Loading>
    )
  }

  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">{data.user?.public_repos}</span>
      <div className="underline" />
    </div>
  )

  console.log(data)

  return (
    <Container>
      <Tab>
        <div className="wrapper">
          <TabContent />
          <div className="profile">
            <Link to={`https://github.com/${username}`}>{username}</Link>
            <img src={data.user.avatar_url} alt="" />
          </div>
        </div>
      </Tab>
      <Main>
        <h2>My Projects</h2>
        <Repos>
          {data.repos.map((item) => (
            <RepoCard
              key={item.name}
              username={item.owner.login}
              reponame={item.name}
              description={item.description}
              language={item.language}
              homepage={item.homepage}
            />
          ))}
        </Repos>
      </Main>
    </Container>
  )
}
