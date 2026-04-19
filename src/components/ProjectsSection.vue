<template>
  <section id="projetos" class="section">
    <div class="container">
      <p class="section-label">// 03 — Projetos</p>
      <h2 class="section-title">O que eu<br><span class="accent">construí</span></h2>

      <div class="projects-grid">
        <div class="project-card" v-for="(proj, i) in projects" :key="proj.title">
          <div class="project-top">
            <div class="project-meta">
              <span class="project-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <div class="project-links">
                <a v-if="proj.github" :href="proj.github" target="_blank" class="proj-link" title="GitHub">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
            <div class="project-badge" v-if="proj.badge">{{ proj.badge }}</div>
          </div>

          <h3 class="project-title">{{ proj.title }}</h3>
          <p class="project-desc">{{ proj.desc }}</p>

          <div class="project-tags">
            <span class="tag" v-for="t in proj.tags" :key="t">{{ t }}</span>
          </div>
        </div>
      </div>

      <div class="projects-cta">
        <a href="https://github.com/HerdesonMourao" target="_blank" class="btn-ghost">
          Ver todos os repositórios no GitHub →
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'AURA — Chatbot Vivo/Telefônica',
    desc: 'Solução conversacional de larga escala para a Vivo/Telefônica (projeto AURA). Desenvolvimento e liderança técnica de APIs, integrações com sistemas corporativos e bots com Microsoft Bot Framework em ambiente enterprise.',
    tags: ['Node.js', 'TypeScript', 'Microsoft Bot Framework', 'Docker', 'Kibana', 'Azure DevOps'],
    badge: 'Enterprise',
  },
  {
    title: 'authenticate-docs',
    desc: 'Pacote NPM open source para validação e autenticação de CPF e CNPJ. Biblioteca pragmática para desenvolvedores Node.js lidarem com documentos brasileiros sem dependências pesadas.',
    tags: ['JavaScript', 'Node.js', 'NPM', 'Open Source'],
    github: 'https://github.com/HerdesonMourao/authenticate-docs',
    badge: 'NPM Package',
  },
  {
    title: 'ChampionshipManagement',
    desc: 'Sistema de gerenciamento de campeonatos com controle de times, partidas e classificações. Backend robusto com API RESTful, TypeScript e banco de dados relacional.',
    tags: ['Node.js', 'TypeScript', 'API REST', 'PostgreSQL'],
    github: 'https://github.com/HerdesonMourao/ChampionshipManagement',
    badge: 'Backend',
  },
  {
    title: 'Plataformas SaaS & CI/CD',
    desc: 'Implementação de pipelines CI/CD e infraestrutura para plataformas SaaS na Aikont. Uso de Docker, GitHub Actions, NGINX e Linux para automação de deploy, estabilidade e entrega contínua.',
    tags: ['Docker', 'CI/CD', 'NGINX', 'GitHub Actions', 'Linux', 'Bash'],
    badge: 'DevOps',
  },
  {
    title: 'Projeto Integrador 3 & 4',
    desc: 'Projetos acadêmicos integradores com arquitetura de software multicamadas. Integração de múltiplas disciplinas, design patterns avançados e entrega de sistemas coesos e funcionais.',
    tags: ['Node.js', 'TypeScript', 'Fullstack', 'Design Patterns'],
    github: 'https://github.com/HerdesonMourao/projeto-integrador-4',
    badge: 'Acadêmico',
  },
  {
    title: 'APIs REST Escaláveis',
    desc: 'Desenvolvimento de APIs corporativas com foco em Clean Architecture e SOLID. Integrações com sistemas externos, observabilidade com Kibana, troubleshooting em produção e modelagem de banco de dados relacional.',
    tags: ['Node.js', 'Express', 'Fastify', 'Clean Architecture', 'SOLID', 'PostgreSQL'],
    badge: 'Backend',
  },
]
</script>

<style scoped>
.section { padding: 6rem 0; }

.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 3rem;
}

.accent { color: var(--accent); }

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--bg-border);
  border: 1px solid var(--bg-border);
  margin-bottom: 3rem;
}

.project-card {
  background: var(--bg-card);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: background 0.2s ease;
}
.project-card:hover { background: var(--bg-secondary); }

.project-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.project-meta { display: flex; align-items: center; gap: 1rem; }

.project-num {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--text-muted);
  letter-spacing: 0.1em;
}

.project-links { display: flex; gap: 0.5rem; }

.proj-link {
  color: var(--text-muted);
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
}
.proj-link:hover { color: var(--accent); }

.project-badge {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.2rem 0.5rem;
  border: 1px solid var(--accent);
  color: var(--accent);
  white-space: nowrap;
}

.project-title {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  flex: 1;
}
.project-card:hover .project-title { color: var(--accent); }

.project-desc {
  font-size: 0.78rem;
  color: var(--text-secondary);
  line-height: 1.7;
  flex: 1;
}

.project-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }

.projects-cta { text-align: center; }

.btn-ghost {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.875rem 1.75rem;
  border: 1px solid var(--bg-border);
  color: var(--text-secondary);
  transition: all 0.2s ease;
}
.btn-ghost:hover { border-color: var(--accent); color: var(--accent); }

@media (max-width: 1024px) {
  .projects-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .projects-grid { grid-template-columns: 1fr; }
  .project-card { padding: 1.5rem; }
}
</style>
