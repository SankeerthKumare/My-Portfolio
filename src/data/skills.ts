import { Skill } from "@/types";

export const skills: Skill[] = [
  // Languages
  { name: "Java 17", icon: "SiOpenjdk", level: "Expert", category: "Languages", years: 6, featured: true, tagline: "Primary language — records, streams, virtual threads" },
  { name: "SQL", icon: "FiDatabase", level: "Expert", category: "Languages", years: 6 },
  { name: "Python", icon: "SiPython", level: "Advanced", category: "Languages", years: 3 },
  { name: "TypeScript", icon: "SiTypescript", level: "Advanced", category: "Languages", years: 2 },
  { name: "JavaScript", icon: "SiJavascript", level: "Advanced", category: "Languages", years: 3 },

  // Backend
  { name: "Spring Boot", icon: "SiSpring", level: "Expert", category: "Backend", years: 6, featured: true, tagline: "Microservices, REST, security, observability" },
  { name: "Apache Kafka", icon: "FiZap", level: "Expert", category: "Backend", years: 4, featured: true, tagline: "Outbox pattern, async event flows at scale" },
  { name: "Microservices", icon: "FiGrid", level: "Expert", category: "Backend", years: 5, featured: true, tagline: "Service decomposition, idempotency, resilience" },
  { name: "REST APIs", icon: "FiLayers", level: "Expert", category: "Backend", years: 6 },
  { name: "Spring Security", icon: "SiSpringsecurity", level: "Advanced", category: "Backend", years: 4 },
  { name: "Hibernate / JPA", icon: "FiDatabase", level: "Expert", category: "Backend", years: 5 },
  { name: "JUnit 5", icon: "SiJunit5", level: "Advanced", category: "Backend", years: 5 },
  { name: "Mockito", icon: "FiCheckCircle", level: "Advanced", category: "Backend", years: 4 },

  // Cloud & DevOps
  { name: "AWS", icon: "FiCloud", level: "Expert", category: "Cloud & DevOps", years: 3, featured: true, tagline: "ECS, S3, EC2 — 2x certified" },
  { name: "Docker", icon: "SiDocker", level: "Advanced", category: "Cloud & DevOps", years: 4, featured: true, tagline: "Containerized Spring Boot services" },
  { name: "Kubernetes", icon: "SiKubernetes", level: "Advanced", category: "Cloud & DevOps", years: 3 },
  { name: "Azure", icon: "FiCloud", level: "Advanced", category: "Cloud & DevOps", years: 2 },
  { name: "Terraform", icon: "SiTerraform", level: "Advanced", category: "Cloud & DevOps", years: 2 },
  { name: "Jenkins", icon: "SiJenkins", level: "Advanced", category: "Cloud & DevOps", years: 4 },
  { name: "CI/CD", icon: "FiGitMerge", level: "Advanced", category: "Cloud & DevOps", years: 5 },
  { name: "Maven", icon: "SiApachemaven", level: "Advanced", category: "Cloud & DevOps", years: 5 },
  { name: "Git", icon: "SiGit", level: "Expert", category: "Cloud & DevOps", years: 6 },
  { name: "GitHub", icon: "SiGithub", level: "Expert", category: "Cloud & DevOps", years: 6 },

  // Databases
  { name: "PostgreSQL", icon: "SiPostgresql", level: "Expert", category: "Databases", years: 5 },
  { name: "Oracle DB", icon: "FiDatabase", level: "Expert", category: "Databases", years: 5 },
  { name: "MongoDB", icon: "SiMongodb", level: "Advanced", category: "Databases", years: 3 },
  { name: "MySQL", icon: "SiMysql", level: "Advanced", category: "Databases", years: 4 },
  { name: "Redis", icon: "SiRedis", level: "Advanced", category: "Databases", years: 3 },
];
