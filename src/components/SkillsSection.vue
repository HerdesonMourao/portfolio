<template>
  <section id="skills" class="section skills-section">
    <div class="container">
      <p class="section-label">// 02 — Stack Tecnológico</p>
      <h2 class="section-title">Ferramentas &amp;<br><span class="accent">Tecnologias</span></h2>

      <div class="skills-grid">
        <div class="skill-group" v-for="group in skillGroups" :key="group.title">
          <div class="group-header">
            <span class="group-icon">{{ group.icon }}</span>
            <div>
              <h3 class="group-title">{{ group.title }}</h3>
              <p class="group-subtitle">{{ group.subtitle }}</p>
            </div>
          </div>
          <div class="chips">
            <span
              v-for="skill in group.skills"
              :key="skill.name"
              class="chip"
              :class="skill.primary ? 'chip--primary' : 'chip--secondary'"
            >
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>

      <div class="extras-row">
        <div class="extras-block" v-for="block in extraBlocks" :key="block.label">
          <p class="extras-label">{{ block.label }}</p>
          <div class="extras-chips">
            <span class="chip chip--ghost" v-for="t in block.items" :key="t">{{ t }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillGroups = [
  {
    icon: '⚙️',
    title: 'Backend',
    subtitle: 'Especialidade principal',
    skills: [
      { name: 'Node.js', primary: true },
      { name: 'TypeScript', primary: true },
      { name: 'JavaScript', primary: true },
      { name: 'Express.js', primary: true },
      { name: 'Fastify', primary: false },
      { name: 'APIs REST', primary: false },
      { name: 'Clean Architecture', primary: false },
      { name: 'SOLID', primary: false },
    ]
  },
  {
    icon: '🗄️',
    title: 'Banco de Dados',
    subtitle: 'Relacionais & NoSQL',
    skills: [
      { name: 'PostgreSQL', primary: true },
      { name: 'MySQL', primary: true },
      { name: 'MongoDB', primary: false },
      { name: 'SQLite', primary: false },
      { name: 'Prisma ORM', primary: true },
      { name: 'TypeORM', primary: false },
    ]
  },
  {
    icon: '🌐',
    title: 'Frontend',
    subtitle: 'Interfaces & componentes',
    skills: [
      { name: 'Vue.js', primary: true },
      { name: 'Angular', primary: true },
      { name: 'HTML5', primary: false },
      { name: 'CSS3', primary: false },
      { name: 'TailwindCSS', primary: false },
      { name: 'EJS', primary: false },
    ]
  },
  {
    icon: '🐳',
    title: 'DevOps & Infra',
    subtitle: 'Deploy e automação',
    skills: [
      { name: 'Docker', primary: true },
      { name: 'GitHub Actions', primary: true },
      { name: 'NGINX', primary: false },
      { name: 'CI/CD', primary: true },
      { name: 'Linux', primary: false },
      { name: 'Bash', primary: false },
      { name: 'Cloudflare', primary: false },
    ]
  },
]

const extraBlocks = [
  {
    label: 'Observabilidade & Cloud',
    items: ['Kibana', 'Azure DevOps', 'Azure', 'Microsoft Bot Framework'],
  },
  {
    label: 'Ferramentas & Workflow',
    items: ['Git', 'GitHub', 'GitLab', 'Jira', 'Postman', 'Insomnia', 'Swagger / OpenAPI'],
  },
  {
    label: 'Metodologias',
    items: ['Scrum', 'Kanban', 'Code Review', 'Tech Lead', 'Arquitetura de Software'],
  },
]
</script>

<style scoped>
.skills-section {
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

/* ── Main grid ── */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--bg-border);
  border: 1px solid var(--bg-border);
  margin-bottom: 1px;
}

.skill-group {
  background: var(--bg-card);
  padding: 2rem;
  transition: background 0.2s ease;
}
.skill-group:hover { background: #161616; }

.group-header {
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--bg-border);
}

.group-icon { font-size: 1.4rem; line-height: 1; padding-top: 0.1rem; flex-shrink: 0; }

.group-title {
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 0.2rem;
}

.group-subtitle {
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  color: var(--accent);
  text-transform: uppercase;
}

/* ── Chips ── */
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.chip {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.04em;
  padding: 0.3rem 0.7rem;
  border-radius: 0;
  transition: all 0.18s ease;
  cursor: default;
  user-select: none;
}

.chip--primary {
  background: var(--accent-glow);
  border: 1px solid var(--accent);
  color: var(--accent);
}
.chip--primary:hover {
  background: var(--accent);
  color: #000;
}

.chip--secondary {
  background: transparent;
  border: 1px solid var(--bg-border);
  color: var(--text-secondary);
}
.chip--secondary:hover {
  border-color: var(--text-muted);
  color: var(--text-primary);
}

.chip--ghost {
  background: transparent;
  border: 1px dashed var(--bg-border);
  color: var(--text-muted);
}
.chip--ghost:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* ── Extras row ── */
.extras-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--bg-border);
  border: 1px solid var(--bg-border);
  border-top: none;
}

.extras-block {
  background: var(--bg-card);
  padding: 1.5rem 2rem;
}

.extras-label {
  font-size: 0.63rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.875rem;
}

.extras-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .extras-row { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 768px) {
  .skills-grid { grid-template-columns: 1fr; }
  .skill-group { padding: 1.5rem; }
  .extras-row { grid-template-columns: 1fr; }
  .extras-block { padding: 1.25rem 1.5rem; }
}
</style>
