import React from 'react';
import Header from '../components/Header';
import style from '../styles/Projects.module.scss';
import ProjectCard from '../components/ProjectCard';
import { Language } from '../components/LanguageElement';
import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';

type ProjectInfo = {
  /**
   * The URL to the refering github repository
   */
  url: string;
  /**
   * All languages that are used in this project
   */
  languages: Language[];
  /**
   * The name of the project
   */
  name: string;
  /**
   * The description of the project
   */
  description: string;
};

const Projects = () => {
  const projects: ProjectInfo[] = [
    /*{
      url: 'https://github.com/MathisBurger/shorty',
      languages: [Language.elixir, Language.svelte],
      name: 'Shorty',
      description:
        'An not yet finished URL shortener built to learn svelte and elixir',
    },
    {
      url: 'https://github.com/MathisBurger/AnalAsia',
      languages: [Language.golang],
      name: 'AnalAsia',
      description:
        'An easy to use discord chat analytics bot. You can analyse some basic stuff.',
    },
    {
      url: 'https://github.com/MathisBurger/commander',
      languages: [Language.golang],
      name: 'Commander',
      description:
        'A lightweight discordgo command handler with internal help command and not found messages.',
    },
    {
      url: 'https://github.com/MathisBurger/ikea-name-generator',
      languages: [Language.react],
      name: 'Ikea name generator',
      description:
        'This is a little fun project. It is a webapp, which generates random ikea product names.',
    },
    {
      url: 'https://github.com/MathisBurger/SLF-Engine',
      languages: [Language.nextjs, Language.rust],
      name: 'SLF-Engine',
      description:
        'An open source stadt-land-fluss engine. I built it for learning more about rust and next.js',
    },
    {
      url: 'https://github.com/MathisBurger/sporty-leaderboards',
      languages: [Language.rust, Language.react],
      name: 'Sporty-Leaderboards',
      description:
        'An open source workout monitoring system I made of me and my family, because we wanted to see our stats in comparison.',
    },
    {
      url: 'https://github.com/MathisBurger/CustomMidiController',
      languages: [Language.cpp],
      name: 'CustomMidiControl',
      description:
        'An C++ executable for the arduino, built for a custom MIDI lighting desk',
    },*/
    {
      url: 'https://github.com/MathisBurger/PaintShare',
      languages: [Language.rust, Language.react],
      name: 'PaintShare',
      description:
        'A socialmedia platform to share self painted pictures and other media for creators.',
    },
    {
      url: 'https://github.com/MathisBurger/OpenInventory-Backend',
      languages: [Language.golang, Language.angular],
      name: 'Open Inventory',
      description:
        'An open source Inventory system made for everyone, who want to organize his storage with multiple user.',
    },
    {
      url: 'https://github.com/MathisBurger/crypto-simulator',
      languages: [Language.golang, Language.angular],
      name: 'Crypto Simulator',
      description:
        'A partly multiplayer crypto-currency game. You can simulate trading currencies on an webapp.',
    },
    /*{
      url: 'https://github.com/MathisBurger/dom-toretto',
      languages: [Language.golang],
      name: 'Dom Toretto',
      description:
        'A simple discord bot that responds to every discord message containing family',
    },
    {
      url: 'https://github.com/rednit-team/tinder.js',
      languages: [Language.typescript],
      name: 'Tinder JS',
      description:
        'I built a tinder API wrapper as a fun project as a contributor',
    },
    {
      url: 'https://github.com/MathisBurger/ChocolateCSS',
      languages: [Language.scss],
      name: 'ChocolateCSS',
      description: 'A SCSS library built for faster development of dark themes',
    },*/
    {
      url: 'https://github.com/MathisBurger/MathOnWeb',
      languages: [Language.svelte],
      name: 'MathOnWeb',
      description:
        'A webapp built to automate complex math calculations aka. my homework ;)',
    },
    /*{
      url: 'https://github.com/MathisBurger/vaccinecounter',
      languages: [Language.php, Language.react, Language.scss],
      name: 'Vaccinecounter',
      description:
        'A simple webapp built for monitoring the number of vaccines and the people in a doctors office.',
    },*/
    {
      url: 'https://github.com/MathisBurger/SimpleInventory',
      languages: [Language.php, Language.vue, Language.mui],
      name: 'SimpleInventory',
      description:
        'Another modern lokking and super fast web inventory system for the personal and internal use.',
    },
    {
      url: 'https://github.com/MathisBurger/digify',
      languages: [Language.csharp, Language.react, Language.mui],
      name: 'digify',
      description:
        'An small open source classbook for the private use in schools',
    },
    /*{
      url: 'https://github.com/MathisBurger/SoundboardServer',
      languages: [Language.golang, Language.nextjs, Language.mui],
      name: 'SoundboardServer',
      description: 'A web interface that plays sounds on the host device',
    },
    {
      url: 'https://github.com/MathisBurger/terminalToDo',
      languages: [Language.rust],
      name: 'terminalToDo',
      description:
        'A simple to-do app as an cli. Makes managing toDos for terminal addicted people much easier.',
    },
    {
      url: 'https://github.com/MathisBurger/rusty-cli',
      languages: [Language.rust],
      name: 'rusty-cli',
      description:
        'A cli library that makes developing CLIs faster. It is perfect for fast and scalable cli applications',
    },*/
    {
      url: 'https://github.com/SoftwareTemplates/cli',
      languages: [Language.golang],
      name: 'softwareTemplates',
      description:
        'A simple cli tool for setting up your next project more quickly.',
    },
    /*{
      url: 'https://github.com/MathisBurger/symfony-layla',
      languages: [Language.php, Language.twig],
      name: 'Symfony-Layla',
      description:
        'A fun symfony bundle, that plays the song layla in karaoke style',
    },*/
    /*{
      url: 'https://github.com/MathisBurger/surrealdb.php',
      languages: [Language.php],
      name: 'surrealdb.php',
      description: 'A database driver for the surrealdb written in php',
    },
    {
      url: 'https://github.com/MathisBurger/surrealdb-docker-service',
      languages: [Language.docker],
      name: 'surrealdb-docker-service',
      description:
        'The base surrealdb docker image configured to run easily in github actions.',
    },
    {
      url: 'https://github.com/MathisBurger/google-study-plan-generator',
      languages: [Language.typescript, Language.nextjs],
      name: 'google-study-plan-generator',
      description: 'Generates your study plan in your google calendar',
    },*/
    /*{
      url: 'https://github.com/MathisBurger/time-dependent-quotes',
      languages: [Language.rust],
      name: 'time-dependent-quotes',
      description: 'Application for proving time dependent quotes',
    },*/
    {
      url: 'https://github.com/MathisBurger/web-service-mock',
      languages: [Language.kotlin],
      name: 'web-service-mock',
      description:
        'Simulates simple web api responses and is configured with yaml',
    },
    /*{
      url: 'https://github.com/MathisBurger/phpunit-stopwatch',
      languages: [Language.php],
      name: 'phpunit-stopwatch',
      description:
        'A php library that provides phpunit test cases for performance tests',
    },*/
    {
      url: 'https://github.com/MathisBurger/abigrade-calculator',
      languages: [Language.nextjs, Language.typescript],
      name: 'abigrade-calculator',
      description:
        'Calculates the best possible Abitur-grade based on your results.',
    },
    /*{
      url: 'https://github.com/MathisBurger/grocy-rpi',
      languages: [Language.docker],
      name: 'grocy-rpi',
      description: 'An docker image for grocy',
    },*/
    {
      url: 'https://github.com/MathisBurger/Immocalc',
      languages: [Language.swift],
      name: 'Immocalc',
      description: 'Simple housing price analysis app',
    },
    {
      url: 'https://github.com/MathisBurger/SolarCalc',
      languages: [Language.swift],
      name: 'SolarCalc',
      description: 'Simple solar price calculation app',
    },
    /*{
      url: 'https://github.com/MathisBurger/calculation-flow',
      languages: [Language.java],
      name: 'Calculation flow',
      description: 'Calculation configuration application made for SSW',
    },
    {
      url: 'https://github.com/MathisBurger/tankopedia',
      languages: [Language.java],
      name: 'Tankopedia',
      description: 'GraphQL wrapper for World of Tanks API',
    },
    {
      url: 'https://github.com/MathisBurger/budget',
      languages: [Language.rust],
      name: 'budget',
      description:
        'Simple CLI for creating budget reports for personal household',
    },
    {
      url: 'https://github.com/MathisBurger/typespeed',
      languages: [Language.nextjs, Language.typescript],
      name: 'Typespeed',
      description: 'Typespeed application for developers',
    },*/
    {
      url: 'https://github.com/MathisBurger/immowealth',
      languages: [Language.kotlin, Language.typescript],
      name: 'Immowealth',
      description: 'Real estate management application',
    },
    {
      url: 'https://github.com/MathisBurger/CodeCanvas',
      languages: [Language.rust, Language.typescript],
      name: 'CodeCanvas',
      description: 'A platform to learn how to code',
    },
    {
      url: 'https://github.com/MathisBurger/BetTogether',
      languages: [Language.php],
      name: 'BetTogether',
      description: 'A platform to place some bets with your friends.',
    },
  ];
  return (
    <Wrapper>
      <Header active={'projects'} />
      <div className={style.container}>
        <h1>Projects</h1>
        <h3>Total: {projects.length}</h3>
        <div className={style.projectBox}>
          {projects.reverse().map((project, i) => (
            <ProjectCard
              githubUrl={project.url}
              languages={project.languages}
              name={project.name}
              description={project.description}
              key={`project-${i}`}
            />
          ))}
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Projects;
