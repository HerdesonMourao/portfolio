<template>
  <section id="experiencia" class="section exp-section">
    <div class="container">
      <p class="section-label">// 04 — Experiência</p>
      <h2 class="section-title">Trajetória<br><span class="accent">Profissional</span></h2>

      <div class="timeline">
        <div class="timeline-item" v-for="(exp, i) in experiences" :key="i">
          <div class="timeline-left">
            <div class="timeline-dot" :class="{ current: exp.current }"></div>
            <div class="timeline-line" v-if="i < experiences.length - 1"></div>
          </div>
          <div class="timeline-content">
            <div class="exp-header">
              <div class="exp-title-block">
                <h3 class="exp-role">{{ exp.role }}</h3>
                <p class="exp-company">
                  <span class="company-name">{{ exp.company }}</span>
                  <span v-if="exp.current" class="current-badge">Atual</span>
                </p>
              </div>
              <span class="exp-period">{{ exp.period }}</span>
            </div>
            <p class="exp-desc">{{ exp.desc }}</p>
            <div class="exp-tags">
              <span class="tag" v-for="t in exp.tags" :key="t">{{ t }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="education">
        <p class="section-label" style="margin-bottom: 1.5rem">// Formação</p>
        <div class="edu-card">
          <span class="edu-icon">🎓</span>
          <div>
            <p class="edu-title">Curso Técnico em Informática</p>
            <p class="edu-school">Escola Estadual de Educação Profissional Manoel Mano</p>
            <p class="edu-period">2016 – 2018</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    role: 'Tech Lead',
    company: 'Capgemini',
    period: '08/2025 — Presente',
    current: true,
    desc: 'Liderando o desenvolvimento de soluções conversacionais no ambiente AURA (Vivo/Telefônica), com Node.js e Microsoft Bot Framework. Responsável pelo direcionamento técnico do time, code reviews e decisões arquiteturais, garantindo qualidade, escalabilidade e confiabilidade das aplicações.',
    tags: ['Node.js', 'TypeScript', 'Microsoft Bot Framework', 'Docker', 'Azure DevOps', 'Kibana', 'Chatbots', 'Tech Lead'],
  },
  {
    role: 'Consultant Solutions III',
    company: 'Capgemini',
    period: '08/2025 — Presente',
    current: true,
    desc: 'Desenvolvimento e manutenção de soluções backend para o AURA, com foco em performance, integrações e estabilidade. Atuação em troubleshooting, análise de logs e evolução contínua das aplicações em ambiente ágil.',
    tags: ['Node.js', 'TypeScript', 'Bot Framework', 'Docker', 'Kibana', 'Jira'],
  },
  {
    role: 'Development Analyst',
    company: 'Mutant',
    period: '07/2022 — 07/2025',
    current: false,
    desc: 'Atuei no desenvolvimento e evolução de soluções conversacionais para o AURA, com foco em integrações, performance e confiabilidade. Forte atuação em ambientes ágeis com Scrum, garantindo qualidade técnica e estabilidade em produção.',
    tags: ['Node.js', 'TypeScript', 'Microsoft Bot Framework', 'Docker', 'Kibana', 'Azure DevOps', 'Scrum'],
  },
  {
    role: 'Technical Development Coordinator',
    company: 'Aikont',
    period: '07/2022 — 07/2023',
    current: false,
    desc: 'Coordenei tecnicamente projetos de software, liderando equipes e definindo padrões de arquitetura. Atuei em code reviews, estruturação de pipelines CI/CD e suporte à infraestrutura, garantindo estabilidade e escalabilidade das soluções.',
    tags: ['Node.js', 'TypeScript', 'Docker', 'CI/CD', 'Angular', 'Linux', 'GitHub', 'GitLab'],
  },
  {
    role: 'Tech Lead',
    company: 'Aikont',
    period: '05/2021 — 07/2022',
    current: false,
    desc: 'Liderança técnica com execução hands-on de sprints. Responsável por decisões arquiteturais, padronização de código e desenvolvimento full stack. Aplicação de CI/CD, TypeORM e Prisma em projetos Node.js + Angular.',
    tags: ['Node.js', 'TypeScript', 'Angular', 'Docker', 'CI/CD', 'TypeORM', 'Prisma', 'Bash'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Aikont',
    period: '01/2021 — 06/2022',
    current: false,
    desc: 'Desenvolvimento de APIs REST e aplicações web, com foco em modelagem de sistemas, integrações e implementação de regras de negócio. Deploy e manutenção de aplicações com Docker, GitHub e GitLab.',
    tags: ['Node.js', 'TypeScript', 'Angular', 'MySQL', 'TypeORM', 'Prisma', 'Docker'],
  },
  {
    role: 'Front-end Developer',
    company: 'Aikont',
    period: '12/2020 — 01/2021',
    current: false,
    desc: 'Desenvolvimento de interfaces web responsivas e integração com APIs REST, com foco em usabilidade, performance e padronização visual usando HTML5, CSS, Bootstrap e EJS.',
    tags: ['JavaScript', 'HTML5', 'CSS', 'Bootstrap', 'EJS', 'GitLab'],
  },
]
</script>

<style scoped>
.exp-section {
  background: var(--bg-secondary);
  border-top: 1px solid var(--bg-border);
  border-bottom: 1px solid var(--bg-border);
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 3.5rem;
}

.accent { color: var(--accent); }

.timeline { display: flex; flex-direction: column; margin-bottom: 4rem; }

.timeline-item {
  display: grid;
  grid-template-columns: 2rem 1fr;
  gap: 1.5rem;
}

.timeline-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.3rem;
}

.timeline-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  border: 2px solid var(--text-muted);
  background: var(--bg-primary);
  flex-shrink: 0;
}

.timeline-dot.current {
  border-color: var(--accent);
  background: var(--accent);
  box-shadow: 0 0 10px var(--accent-glow);
}

.timeline-line {
  width: 1px;
  flex: 1;
  background: var(--bg-border);
  margin: 0.5rem 0;
  min-height: 1.5rem;
}

.timeline-content { padding-bottom: 2.5rem; }

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.875rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.exp-role {
  font-family: var(--font-display);
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  font-weight: 700;
  margin-bottom: 0.3rem;
}

.exp-company {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.company-name {
  font-size: 0.8rem;
  color: var(--accent);
  letter-spacing: 0.05em;
}

.current-badge {
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.15rem 0.5rem;
  background: var(--accent-glow);
  border: 1px solid var(--accent);
  color: var(--accent);
}

.exp-period {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--text-muted);
  letter-spacing: 0.05em;
  white-space: nowrap;
}

.exp-desc {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1rem;
  max-width: 680px;
}

.exp-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }

/* Education */
.education {
  border-top: 1px solid var(--bg-border);
  padding-top: 3rem;
}

.edu-card {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.5rem;
  background: var(--bg-card);
  border: 1px solid var(--bg-border);
  max-width: 520px;
  transition: border-color 0.2s ease;
}
.edu-card:hover { border-color: var(--accent); }

.edu-icon { font-size: 1.75rem; flex-shrink: 0; }

.edu-title {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
}

.edu-school {
  font-size: 0.78rem;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
  line-height: 1.4;
}

.edu-period {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--accent);
  letter-spacing: 0.08em;
}

@media (max-width: 600px) {
  .timeline-item { grid-template-columns: 1.5rem 1fr; gap: 1rem; }
  .exp-header { flex-direction: column; }
  .exp-period { align-self: flex-start; }
  .timeline-content { padding-bottom: 2rem; }
}
</style>
