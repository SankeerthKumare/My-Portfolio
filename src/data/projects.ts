import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "AI-Driven Code Review & PR Analysis Tool",
    description:
      "AI-powered code review tool on AWS using GitHub Webhooks → API Gateway → Kafka → Lambda consumers to process PRs. Invokes OpenAI/Claude APIs to detect bugs, security risks, performance issues, and missing tests. Stores insights in DynamoDB and displays feedback through an Angular dashboard with JWT authentication.",
    techStack: ["Java", "Spring Boot", "Angular", "AWS Lambda", "API Gateway", "DynamoDB", "S3", "Kafka", "GitHub API", "OpenAI/Claude", "Docker", "JWT"],
    githubUrl: "https://github.com/Sankeerthkumar",
    featured: true,
  },
  {
    id: 2,
    title: "Microservices E-Commerce Backend",
    description:
      "Distributed microservices architecture with independent services for orders, inventory, and payments. Apache Kafka async processing achieving sub-100ms message latency, containerized with Docker, and 85%+ unit test coverage via JUnit 5 and Mockito.",
    techStack: ["Java 17", "Spring Boot", "Apache Kafka", "Docker", "JUnit 5", "Mockito", "PostgreSQL"],
    githubUrl: "https://github.com/Sankeerthkumar",
    featured: true,
  },
  {
    id: 3,
    title: "FinTech Payment Processing Platform",
    description:
      "Enterprise-grade payment microservices for Citi Bank processing 50K+ daily transactions. Built Kafka outbox pattern, idempotent REST APIs with request-key deduplication, HikariCP tuning for Oracle/MongoDB, and Oracle query optimization achieving 35% API response time reduction.",
    techStack: ["Java 17", "Spring Boot", "Apache Kafka", "Oracle", "PostgreSQL", "AWS ECS", "Azure AKS"],
    featured: true,
  },
  {
    id: 4,
    title: "Core Banking API — Finacle",
    description:
      "Payment microservices for First Bank's ACH, RTGS, and cross-border transfers on Infosys Finacle. Resolved card transaction lock timeouts, tuned SQL for balance inquiry endpoints (30% query improvement), and ensured compliance with field-level masking and trace ID persistence.",
    techStack: ["Java 11/17", "Spring Boot", "Apache Kafka", "Oracle", "Spring Security"],
    featured: true,
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "This portfolio — built with Next.js 14, TypeScript, and Tailwind CSS. Single-page design with smooth scroll navigation, dark theme, and deployed on Vercel.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://sankeerth.vercel.app",
    featured: false,
  },
];
