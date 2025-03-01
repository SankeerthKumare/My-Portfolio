import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Bean Infosystems · Citi Bank",
    role: "Senior Software Engineer (Java Backend)",
    duration: "Jun 2025 – Present",
    location: "Irving, TX",
    description: [
      "Led on-premises to AWS/Azure cloud migration for a high-volume financial platform — containerized Spring Boot services, updated ECS/AKS pipelines, and converted SOAP interfaces to versioned REST endpoints, reducing deployment cycle time by ~40%.",
      "Implemented a Kafka-based outbox pattern for write-heavy transaction flows, enabling reliable downstream event consumption and eliminating synchronous DB bottlenecks during peak payment windows.",
      "Tuned Oracle and PostgreSQL queries on high-volume reporting paths — targeted indexing, eliminated nested subqueries — reducing average API response time by ~35% and restoring SLA compliance.",
      "Built idempotent REST handlers using request keys and immutable DTOs, preventing duplicate payment records during circuit breaker retries and client-side replays.",
      "Configured HikariCP connection pools for Oracle and MongoDB, eliminating connection exhaustion during end-of-month peak load.",
      "Diagnosed and fixed a JWT clock skew issue causing intermittent 401 failures on a partner API without requiring client-side changes.",
    ],
    techStack: ["Java 17", "Spring Boot", "Apache Kafka", "Oracle", "MongoDB", "AWS", "Azure"],
  },
  {
    id: 2,
    company: "Mindgraph · MD Anderson Cancer Center",
    role: "Software Engineer (CPT Intern)",
    duration: "Jan 2025 – May 2025",
    location: "Houston, TX",
    description: [
      "Built and maintained Java REST APIs supporting healthcare data workflows within DXC's delivery framework for MD Anderson Cancer Center systems.",
      "Assisted in migrating legacy service components to Spring Boot, improving maintainability and aligning with enterprise Java standards.",
      "Wrote JUnit test cases for assigned modules, improving test coverage and reducing regression risk during iterative sprint releases.",
      "Participated in AWS deployments (EC2, S3), code reviews, and sprint planning under Agile/Scrum methodology.",
    ],
    techStack: ["Java", "Spring Boot", "REST APIs", "AWS", "JUnit", "Agile"],
  },
  {
    id: 3,
    company: "Infosys",
    role: "Software Engineer",
    duration: "May 2022 – Aug 2023",
    location: "India (Remote)",
    description: [
      "Delivered feature changes and bug fixes to Finacle payment microservices for First Bank — ACH, RTGS, and cross-border transfers — maintaining API stability across channels processing 50K+ daily transactions.",
      "Reworked card transaction posting flow using explicit Oracle transactions and retry handling, resolving intermittent lock timeout failures causing ~5% transaction failure rate during peak hours.",
      "Tuned SQL for high-volume balance inquiry endpoints — tightened Oracle indexes, simplified joins — cutting query response time by 30%.",
      "Validated core banking APIs against compliance requirements: field-level masking, trace ID persistence, and session timeout enforcement.",
    ],
    techStack: ["Java 11/17", "Spring Boot", "Apache Kafka", "Oracle", "PostgreSQL", "Spring Security"],
  },
  {
    id: 4,
    company: "Sri Tech",
    role: "Associate Software Engineer",
    duration: "Jun 2019 – Apr 2022",
    location: "India (Remote)",
    description: [
      "Migrated Java monolith modules to Spring Boot microservices — analyzed legacy Apache Struts systems, identified module boundaries, and refactored components for cloud deployment.",
      "Converted legacy data formats to JSON-based REST payloads using SQL extraction and Java mapping logic, feeding normalized data into downstream reporting endpoints.",
      "Built Oracle JDBC DAO layer with centralized error handling, reducing per-query bug surface and improving testability of the data access layer.",
      "Wrote JUnit tests covering edge cases and regression paths for Java controllers, stabilizing the build pipeline ahead of each planned deployment.",
    ],
    techStack: ["Java", "Spring Boot", "Oracle", "JUnit", "REST APIs", "Docker"],
  },
];
