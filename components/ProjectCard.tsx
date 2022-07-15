import style from '../styles/Projects.module.scss'
import LanguageElement, { Language } from './LanguageElement'
import React from 'react'

interface ProjectCardProps {
  /**
   * The url to the open source repository.
   */
  githubUrl: string
  /**
   * All languages and frameworks used in the project
   */
  languages: Language[]
  /**
   * The project name
   */
  name: string
  /**
   * A short description of the project
   */
  description: string
}

/**
 * Displays the content of the project into a single card.
 */
const ProjectCard = ({
  githubUrl,
  languages,
  name,
  description,
}: ProjectCardProps) => {
  const redirectToGithub = (url) => {
    const win = window.open(url, '_blank')
    win.focus()
  }

  return (
    <div
      className={style.projectCard}
      onClick={() => redirectToGithub(githubUrl)}
    >
      <h2>{name}</h2>
      <p>{description}</p>
      <div className={style.langRow}>
        {languages.map((lang) => (
          <LanguageElement language={lang} key={lang.toString()} />
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
