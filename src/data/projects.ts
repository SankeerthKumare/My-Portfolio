import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "AI-Driven Code Review & PR Analysis Tool",
    description:
      "AI-powered code review platform using Java Spring Boot and AWS to analyze GitHub pull requests for bugs, security vulnerabilities, performance bottlenecks, and missing test cases. Integrated GitHub Webhooks, REST APIs, and OpenAI/Claude APIs to process PR diffs and generate structured review insights in real time.",
    techStack: ["Java", "Spring Boot", "AWS Lambda", "API Gateway", "DynamoDB", "S3", "GitHub Webhooks", "OpenAI/Claude", "LangChain", "LlamaIndex", "Pinecone", "RAG", "JWT"],
    githubUrl: "https://github.com/Eswaravaka",
    featured: true,
  },
  {
    id: 2,
    title: "Kafka Payment Settlement Pipeline",
    description:
      "High-throughput Kafka-based payment settlement platform processing 18 million messages per day. Implemented event-driven idempotency guards, dead-letter handling, consumer lag monitoring, and retry backoff strategies for financial transaction processing at scale.",
    techStack: ["Java/J2EE", "Spring Boot", "Apache Kafka", "Kafka Streams", "PostgreSQL", "Prometheus", "Grafana", "Docker", "Kubernetes"],
    featured: true,
  },
  {
    id: 3,
    title: "Agentic AI Banking Platform",
    description:
      "Backend microservices for Citi's Arc agentic AI platform enabling autonomous research synthesis, fraud signal aggregation, and compliance document review. Built RAG-based context retrieval with Pinecone and multi-agent orchestration with human-in-the-loop guardrails.",
    techStack: ["Java", "Spring Boot", "LangChain", "OpenAI API", "Pinecone", "RAG", "Multi-Agent Orchestration", "REST APIs"],
    featured: true,
  },
  {
    id: 4,
    title: "Predictive Maintenance AI Workflows",
    description:
      "Agentic AI backend services for Chevron's ENGINE digital transformation hub. LangChain-based agents integrated with real-time sensor data streams to autonomously flag equipment anomalies. LlamaIndex-powered RAG pipelines for autonomous root cause analysis.",
    techStack: ["Java", "Spring Boot", "LangChain", "LlamaIndex", "OpenAI Function Calling", "Apache Kafka", "MySQL", "Splunk"],
    featured: true,
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "This portfolio — built with Next.js, TypeScript, and Tailwind CSS. Single-page design with smooth scroll navigation, dark theme, and deployed on Vercel.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://sankeerth.vercel.app",
    featured: false,
  },
];
