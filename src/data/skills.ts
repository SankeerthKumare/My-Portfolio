import { Skill } from "@/types";

export const skills: Skill[] = [
  // Languages
  { name: "Java 17", icon: "SiOpenjdk", level: "Expert", category: "Languages", years: 9, featured: true, tagline: "Primary language — Streams, Lambdas, Multithreading" },
  { name: "Java 11", icon: "SiOpenjdk", level: "Expert", category: "Languages", years: 9 },
  { name: "J2EE", icon: "SiOpenjdk", level: "Expert", category: "Languages", years: 9 },
  { name: "SQL", icon: "FiDatabase", level: "Expert", category: "Languages", years: 9 },

  // Backend
  { name: "Spring Boot", icon: "SiSpring", level: "Expert", category: "Backend", years: 9, featured: true, tagline: "Microservices, REST, Security, Batch, WebFlux" },
  { name: "Spring MVC", icon: "SiSpring", level: "Expert", category: "Backend", years: 8 },
  { name: "Spring Security", icon: "SiSpringsecurity", level: "Expert", category: "Backend", years: 7 },
  { name: "Spring Data JPA", icon: "SiSpring", level: "Expert", category: "Backend", years: 8 },
  { name: "Spring Cloud Gateway", icon: "SiSpring", level: "Advanced", category: "Backend", years: 5 },
  { name: "Hibernate", icon: "FiDatabase", level: "Expert", category: "Backend", years: 8 },
  { name: "Microservices", icon: "FiGrid", level: "Expert", category: "Backend", years: 8, featured: true, tagline: "Service decomposition, idempotency, resilience" },
  { name: "REST APIs", icon: "FiLayers", level: "Expert", category: "Backend", years: 9 },
  { name: "gRPC", icon: "FiLayers", level: "Advanced", category: "Backend", years: 3 },
  { name: "OAuth2 / JWT", icon: "FiLock", level: "Expert", category: "Backend", years: 6 },
  { name: "JUnit 5", icon: "SiJunit5", level: "Advanced", category: "Backend", years: 8 },
  { name: "Mockito", icon: "FiCheckCircle", level: "Advanced", category: "Backend", years: 7 },
  { name: "Maven", icon: "SiApachemaven", level: "Advanced", category: "Backend", years: 8 },

  // Messaging & Events
  { name: "Apache Kafka", icon: "FiZap", level: "Expert", category: "Messaging & Events", years: 7, featured: true, tagline: "Kafka Streams, ksqlDB, Schema Registry, 18M msgs/day" },
  { name: "Kafka Streams", icon: "FiZap", level: "Advanced", category: "Messaging & Events", years: 5 },
  { name: "ksqlDB", icon: "FiZap", level: "Advanced", category: "Messaging & Events", years: 4 },
  { name: "Schema Registry", icon: "FiZap", level: "Advanced", category: "Messaging & Events", years: 5 },
  { name: "RabbitMQ", icon: "FiZap", level: "Advanced", category: "Messaging & Events", years: 4 },

  // AI / Agentic AI
  { name: "LangChain", icon: "FiCpu", level: "Advanced", category: "AI / Agentic AI", years: 2, featured: true, tagline: "RAG, Multi-Agent Orchestration, Tool Calling" },
  { name: "LlamaIndex", icon: "FiCpu", level: "Advanced", category: "AI / Agentic AI", years: 2 },
  { name: "OpenAI API", icon: "FiCpu", level: "Advanced", category: "AI / Agentic AI", years: 2 },
  { name: "Pinecone", icon: "FiCpu", level: "Advanced", category: "AI / Agentic AI", years: 2 },
  { name: "RAG Pipelines", icon: "FiCpu", level: "Advanced", category: "AI / Agentic AI", years: 2 },
  { name: "Multi-Agent Orchestration", icon: "FiCpu", level: "Advanced", category: "AI / Agentic AI", years: 1 },

  // Cloud & DevOps
  { name: "AWS", icon: "FiCloud", level: "Expert", category: "Cloud & DevOps", years: 5, featured: true, tagline: "Lambda, EC2, EKS, S3, API Gateway, DynamoDB" },
  { name: "Azure", icon: "FiCloud", level: "Advanced", category: "Cloud & DevOps", years: 3 },
  { name: "Docker", icon: "SiDocker", level: "Advanced", category: "Cloud & DevOps", years: 5 },
  { name: "Kubernetes", icon: "SiKubernetes", level: "Advanced", category: "Cloud & DevOps", years: 4 },
  { name: "Terraform", icon: "SiTerraform", level: "Advanced", category: "Cloud & DevOps", years: 3 },
  { name: "Jenkins", icon: "SiJenkins", level: "Advanced", category: "Cloud & DevOps", years: 6 },
  { name: "GitHub Actions", icon: "SiGithubactions", level: "Advanced", category: "Cloud & DevOps", years: 3 },
  { name: "Prometheus", icon: "SiPrometheus", level: "Advanced", category: "Cloud & DevOps", years: 4 },
  { name: "Grafana", icon: "SiGrafana", level: "Advanced", category: "Cloud & DevOps", years: 4 },
  { name: "ELK Stack", icon: "FiBarChart2", level: "Advanced", category: "Cloud & DevOps", years: 4 },
  { name: "Splunk", icon: "FiBarChart2", level: "Advanced", category: "Cloud & DevOps", years: 5 },
  { name: "Git", icon: "SiGit", level: "Expert", category: "Cloud & DevOps", years: 9 },

  // Databases
  { name: "PostgreSQL", icon: "SiPostgresql", level: "Expert", category: "Databases", years: 7 },
  { name: "Oracle DB", icon: "FiDatabase", level: "Expert", category: "Databases", years: 7 },
  { name: "MySQL", icon: "SiMysql", level: "Expert", category: "Databases", years: 7 },
  { name: "MongoDB", icon: "SiMongodb", level: "Advanced", category: "Databases", years: 4 },
  { name: "Redis", icon: "SiRedis", level: "Advanced", category: "Databases", years: 4 },
  { name: "DynamoDB", icon: "FiDatabase", level: "Advanced", category: "Databases", years: 3 },
  { name: "Elasticsearch", icon: "FiSearch", level: "Advanced", category: "Databases", years: 3 },
];
