import type { CSSProperties } from "react";

export interface Brand {
  name: string;
  src: string;
  style?: CSSProperties;
}

export interface StackItem {
  name: string;
  src: string;
  invert?: boolean;
}

export const HERO_BRANDS: Brand[] = [
  {
    name: "J & N Caregiver",
    src: "https://www.jncaregivertraining.com/JN_Logo.png",
  },
  {
    name: "Kathmandu Crafts",
    src: "https://www.kathmandu-crafts.com/img/KathmanduCrafts_Logo.png",
  },
  {
    name: "J & N Caregiver",
    src: "https://www.jncaregivertraining.com/JN_Logo.png",
  },
  {
    name: "Kathmandu Crafts",
    src: "https://www.kathmandu-crafts.com/img/KathmanduCrafts_Logo.png",
  },
  {
    name: "J & N Caregiver",
    src: "https://www.jncaregivertraining.com/JN_Logo.png",
  },
  {
    name: "Kathmandu Crafts",
    src: "https://www.kathmandu-crafts.com/img/KathmanduCrafts_Logo.png",
  },
];

export const BACKERS: StackItem[] = [
  // Frontend
  {
    name: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    invert: true,
  },
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Vite",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  },
  {
    name: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Tailwind CSS",
    src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  // {
  //   name: "Redux",
  //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  // },

  // Backend
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    invert: true,
  },
  {
    name: "NestJS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
  },
  {
    name: "FastAPI",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "Python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: ".NET",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg",
  },

  // Database
  {
    name: "PostgreSQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Redis",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  },
  {
    name: "Supabase",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  },
  {
    name: "MS SQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  },

  // AI Models / Providers
  {
    name: "OpenAI API",
    src: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/openai.png",
    invert: true,
  },
  // {
  //   name: "Claude API",
  //   src: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/claude-color.png",
  // },
  {
    name: "DeepSeek API",
    src: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/deepseek-color.png",
  },
  // {
  //   name: "Kimi API",
  //   src: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/kimi-color.png",
  // },
  // {
  //   name: "Qwen API",
  //   src: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/qwen-color.png",
  // },

  // AI Frameworks
  {
    name: "LangChain",
    src: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/langchain-color.png",
  },
  {
    name: "LlamaIndex",
    src: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/llamaindex-color.png",
  },
  {
    name: "Hugging Face",
    src: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
  },
  // { name: "Ollama", src: "https://ollama.com/public/ollama.png" },
  // {
  //   name: "OpenRouter",
  //   src: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/open-router.webp",
  // },

  // Vector DB
  // {
  //   name: "Pinecone",
  //   src: "https://cdn.jsdelivr.net/gh/callback-io/allogo@main/public/logos/pinecone/icon.svg",
  // },
  // {
  //   name: "Weaviate",
  //   src: "https://cdn.jsdelivr.net/gh/selfhst/icons/svg/weaviate.svg",
  // },
  {
    name: "ChromaDB",
    src: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/chroma.webp",
  },

  // AI & Automation
  {
    name: "n8n",
    src: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/n8n.svg",
  },

  // Infra, Cloud & DevOps
  {
    name: "Docker",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  // {
  //   name: "Kubernetes",
  //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
  // },
  {
    name: "AWS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    invert: true,
  },
  {
    name: "Vercel",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    invert: true,
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    invert: true,
  },
];
