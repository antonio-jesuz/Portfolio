// Edite apenas este arquivo para atualizar o conteúdo do site.
export const profile = {
  name: 'Antonio Jesuz',
  role: 'Engenheiro de Software',
  headline: 'Backend em Go, dados e visão computacional.',
  summary:
    'Construo serviços concorrentes em Go, pipelines de análise de dados em Python e sistemas de visão computacional em tempo real, do protótipo à produção.',
  email: 'antonio.jesuz@hotmail.com',
  github: 'https://github.com/antonio-jesuz',
  linkedin: 'https://www.linkedin.com/in/antonio-jesuz'
}

export const pillars = [
  { icon: 'Server', title: 'Backend e microsserviços em Go', text: 'APIs REST e gRPC com Gin, concorrência com goroutines e channels, Clean Architecture e foco em baixa latência.' },
  { icon: 'Eye', title: 'Visão computacional', text: 'Processamento de vídeo em tempo real com OpenCV: subtração de fundo, análise de contornos e contagem automatizada.' },
  { icon: 'Database', title: 'Análise de dados', text: 'Análise exploratória, tratamento de bases complexas e métricas de crédito e saúde com Python e Pandas.' }
]

export const stack = [
  { group: 'Go e engenharia', items: ['Go', 'Gin', 'REST', 'gRPC', 'Python', 'Julia', 'Clean Code'] },
  { group: 'IA e visão', items: ['OpenCV', 'PyTorch', 'TensorFlow', 'Scikit-Learn', 'NumPy', 'Pandas'] },
  { group: 'Dados e cache', items: ['PostgreSQL', 'Redis', 'SQL', 'ETL'] },
  { group: 'DevOps', items: ['Docker', 'Linux (Ubuntu)', 'Git e GitHub', 'CI/CD'] },
  { group: 'Frontend', items: ['Vue.js', 'Nuxt', 'React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS'] }
]

export const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'go', label: 'Go e backend' },
  { id: 'vision', label: 'Visão computacional' },
  { id: 'datascience', label: 'Dados' }
]

export const projects = [
  {
    id: 'vehicle-detection', category: 'vision', title: 'Vehicle Detection and Counting',
    description: 'Monitora e conta o fluxo de veículos em rodovias usando subtração de fundo e análise de contornos, com baixo custo computacional para rodar em tempo real.',
    techs: ['Python', 'OpenCV', 'NumPy'], github: 'https://github.com/antonio-jesuz/Vehicle-detection'
  },
  {
    id: 'go-microservice', category: 'go', title: 'Go Distributed Microservices Core',
    description: 'Arquitetura de microsserviços concorrentes em Go (Gin) com rate limiting distribuído em Redis, persistência em PostgreSQL e isolamento via Docker.',
    techs: ['Go', 'Gin', 'Redis', 'PostgreSQL', 'Docker', 'gRPC'], github: 'https://github.com/antonio-jesuz'
  },
  {
    id: 'credito-analise', category: 'datascience', title: 'Análise descritiva de crédito (Índia)',
    description: 'Análise exploratória de transações financeiras: tendências sazonais, segmentação de clientes e padrões demográficos para apoiar a gestão de risco.',
    techs: ['Python', 'Pandas', 'Seaborn', 'Matplotlib'], github: 'https://github.com/antonio-jesuz/Analise_Credito'
  },
  {
    id: 'healthcare-analytics', category: 'datascience', title: 'HealthCare Data Analytics',
    description: 'Pipelines de análise para saúde pública: correlações entre indicadores clínicos e eficiência operacional hospitalar.',
    techs: ['Python', 'Pandas', 'Data Pipelines'], github: 'https://github.com/antonio-jesuz/HealthCare'
  }
]
