export type company = {
  name: string;
  role: {
    br: string;
    en: string;
  };
  technologies: string[];
  duration: string;
  actual?: boolean;
  activities: {
    br: string[];
    en: string[];
  };

  logo: string;
  companyIn: string;
};

export const companies: company[] = [
  {
    name: "Senai Soluções Digitais",
    role: {
      en: "Mobile Developer",
      br: "Desenvolvedor Mobile",
    },
    technologies: ["reactNative", "js", "ts"],
    duration: "12/2022 - ",
    actual: true,
    activities: {
      en: [
        "Worked on the development of a safety monitoring and management platform designed to enable real-time monitoring of worker safety in the field, ensure compliance with current OSH legislation, and prevent accidents, fines, and legal issues. Contributed to the migration of the project from Angular to React, implementing new features and ensuring code compatibility.",
        "As a Mobile Applications Responsible for the National Department team, was responsible for developing and maintaining mobile applications with React Native. Assisted in the publication of applications to both Apple Store and Play Store, and contributed to the development of various SENAI applications by implementing new features and addressing bugs. ",
      ],
      br: [
        "Contribui no desenvolvimento de uma plataforma de monitoramento e gestão de segurança projetada para permitir o monitoramento em tempo real da segurança dos trabalhadores de obras, garantir conformidade com a legislação de segurança, prevenir acidentes, multas e problemas legais. Contribuí para a migração do projeto de Angular para React, implementando novos recursos e garantindo a compatibilidade do código.",
        "Como responsável pelas Aplicações Móveis da equipe do Departamento Nacional, fui responsável por desenvolver e manter aplicações móveis com React Native. Auxiliei na publicação das aplicações tanto na Apple Store quanto na Play Store e contribuí para o desenvolvimento de várias aplicações do SENAI, implementando novos recursos e solucionando bugs. ",
      ],
    },
    logo: "/senai.jpeg",
    companyIn:
      "https://www.linkedin.com/company/senai-solu%C3%A7%C3%B5es-digitais",
  },
  {
    name: "Innova Connect Sistemas",
    role: {
      en: "Web Developer Jr",
      br: "Desenvolvedor Web Jr",
    },
    technologies: ["vue", "php", "postgres", "node"],
    duration: "05/2022 - 12/2022",
    activities: {
      en: [
        "Contributed to multiple plataforms of a leading natural products distributor in Brazil, including sales systems, customer and salesman websites, using Vue, PHP and Node.js. I was responsible to develop a telesales platform for a supplements and nutraceuticals company within the group.",
      ],
      br: [
        "Contribuí para várias plataformas de um dos principais distribuidores de produtos naturais no Brasil, incluindo sistemas de vendas, websites para clientes e televendedores, utilizando Vue, PHP e Node.js. Fui responsável pelo desenvolvimento de uma plataforma de vendas por telefone para uma empresa de suplementos e nutracêuticos dentro do grupo.",
      ],
    },

    logo: "/innova.jpeg",
    companyIn: "https://www.linkedin.com/company/innovaconnect/",
  },
  {
    name: "Senai Soluções Digitais",
    role: {
      en: "Web Developer Intern",
      br: "Desenvolvedor Web Estagiário",
    },
    technologies: ["symfony", "php", "react", "postgres"],
    duration: "06/2021 - 05/2022",
    activities: {
      en: [
        "Completed an internship with the National Department, contributing to the development and planning of an internal team tool, which consisted of a Kanban board for task tracking, time management, sprint workflow and other funcionalities.",
      ],
      br: [
        "Realizei um estágio no time do Senai de Departamento Nacional, contribuindo para o desenvolvimento e planejamento de uma ferramenta interna da equipe, que consistia em um quadro Kanban para o acompanhamento de tarefas, gestão de tempo, fluxo de trabalho em sprints e outras funcionalidades.",
      ],
    },

    logo: "/senai.jpeg",
    companyIn:
      "https://www.linkedin.com/company/senai-solu%C3%A7%C3%B5es-digitais",
  },
  {
    name: "OSTEC Business Security",
    role: {
      br: "Suporte N1",
      en: "Support N1",
    },

    technologies: ["linux", "freebsd"],
    duration: "10/2020 - 06/2021",
    activities: {
      en: [
        "Worked as an N1 Support Analyst, responsible for analyzing network issues and vulnerabilities, firewall configurations, email systems, and website and program blocking through proxies and firewalls.",
      ],
      br: [
        "Trabalhei como Analista de Suporte N1, responsável por analisar problemas e vulnerabilidades de rede, configurações de firewall, sistemas de e-mail e bloqueio de sites e programas por meio de proxies e firewalls.",
      ],
    },

    logo: "/ostec.jpeg",
    companyIn: "https://www.linkedin.com/company/ostec-security/",
  },
];
