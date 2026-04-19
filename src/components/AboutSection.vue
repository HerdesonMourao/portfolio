<template>
  <section id="sobre" class="section">
    <div class="container">
      <div class="about-grid">
        <div class="about-left">
          <p class="section-label">// 01 — Sobre</p>
          <h2 class="section-title">Arquitetando o<br><span class="accent">futuro digital</span></h2>
          <p class="about-text">
            Sou Herdeson Mourão, Tech Lead e Desenvolvedor Full Stack com experiência desde
            <strong>2016</strong>, especializado em <strong>Node.js e TypeScript</strong> no desenvolvimento
            de APIs REST e sistemas distribuídos escaláveis.
          </p>
          <p class="about-text">
            Tenho experiência em liderança técnica, definição de arquitetura, code review e qualidade
            de software, com foco em performance, confiabilidade e ambientes de produção. Atuo
            hands-on com <strong>Express e Fastify</strong>, aplicando Clean Architecture, SOLID e boas
            práticas de engenharia de software.
          </p>
          <p class="about-text">
            Atualmente na <strong>Capgemini</strong>, liderando o desenvolvimento de soluções
            conversacionais no ambiente <strong>AURA (Vivo/Telefônica)</strong>, com Node.js e
            Microsoft Bot Framework.
          </p>

          <div class="about-highlight">
            <div class="highlight-icon">🔥</div>
            <p>Tech Lead &amp; Full Stack Developer com ênfase em Backend — desde 2016 construindo sistemas que escalam.</p>
          </div>

          <div class="about-links">
            <a href="https://github.com/HerdesonMourao" target="_blank" class="about-link"><span>↗</span> GitHub</a>
            <a href="https://www.linkedin.com/in/herdesonmourao" target="_blank" class="about-link"><span>↗</span> LinkedIn</a>
            <a href="https://gitlab.com/HerdesonMourao" target="_blank" class="about-link"><span>↗</span> GitLab</a>
          </div>
        </div>

        <div class="about-right">
          <div class="profile-frame">
            <div class="profile-avatar">
              <img
                src="https://avatars.githubusercontent.com/u/63677258?v=4"
                alt="Herdeson Mourão"
                class="avatar-img"
              />
            </div>
            <div class="profile-badge">
              <span class="badge-dot"></span>
              Available for hire
            </div>
          </div>

          <div class="about-cards">
            <div class="about-card" v-for="card in cards" :key="card.title">
              <span class="card-icon">{{ card.icon }}</span>
              <div>
                <p class="card-title">{{ card.title }}</p>
                <p class="card-desc">{{ card.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const cards = [
  { icon: '👑', title: 'Tech Lead', desc: 'Liderança de squads ágeis, code review e decisões arquiteturais' },
  { icon: '⚙️', title: 'Backend First', desc: 'APIs REST escaláveis com Express, Fastify, Clean Architecture e SOLID' },
  { icon: '🐳', title: 'DevOps & CI/CD', desc: 'Docker, GitHub Actions, NGINX, cloud e automação de deploy' },
  { icon: '🗄️', title: 'Databases', desc: 'PostgreSQL, MySQL, MongoDB — Prisma, TypeORM e performance' },
]
</script>

<style scoped>
.section { padding: 6rem 0; position: relative; }

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.75rem;
}

.accent { color: var(--accent); }

.about-text {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.9;
  margin-bottom: 1.25rem;
}

.about-highlight {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-left: 2px solid var(--accent);
  background: var(--accent-glow);
  margin: 1.75rem 0;
  font-size: 0.8rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.highlight-icon { font-size: 1.25rem; flex-shrink: 0; }

.about-links {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.about-link {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.2s ease;
}
.about-link:hover { color: var(--accent); }

.profile-frame { position: relative; margin-bottom: 2rem; }

.profile-avatar {
  width: 220px;
  height: 220px;
  border: 1px solid var(--bg-border);
  overflow: hidden;
  position: relative;
}

.profile-avatar::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--accent-glow), transparent);
  z-index: 1;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(20%);
  display: block;
}

.profile-badge {
  position: absolute;
  bottom: -0.75rem;
  left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.875rem;
  background: var(--bg-primary);
  border: 1px solid var(--bg-border);
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.badge-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: #3cb371;
  animation: pulse-glow 2s ease infinite;
}

.about-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.about-card {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  background: var(--bg-card);
  border: 1px solid var(--bg-border);
  transition: border-color 0.2s ease;
}
.about-card:hover { border-color: var(--accent); }

.card-icon { font-size: 1.25rem; flex-shrink: 0; }

.card-title {
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.card-desc {
  font-size: 0.68rem;
  color: var(--text-muted);
  line-height: 1.5;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .about-right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .about-cards { grid-template-columns: 1fr; }
  .profile-avatar { width: 160px; height: 160px; }
}
</style>
