import { Route } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Topside, Botside } from './styles'

interface Props {
  username: string
  reponame: string
  description?: string
  language?: string
  homepage?: string
}

export const RepoCard: React.FC<Props> = ({
  username,
  reponame,
  description,
  language,
  homepage,
}) => {
  const languageClass = language ? language.toLowerCase() : 'other'

  return (
    <Container>
      <Topside>
        <header>
          <Link to={`https://github.com/${username}/${reponame}`}>
            {reponame}
          </Link>
        </header>

        <p>{description}</p>
      </Topside>

      <Botside>
        <div>
          <div className={`language ${languageClass}`} />
          <span>{language}</span>
        </div>

        <Link to={`${homepage}`} target={'_blank'}>
          Deploy
          <Route fontSize="small" />
        </Link>
      </Botside>
    </Container>
  )
}
