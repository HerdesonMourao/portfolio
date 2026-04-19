<template>
  <section id="hero" class="hero">
    <div class="hero-scan-line"></div>

    <div class="container hero-inner">
      <div class="hero-meta">
        <span class="status-dot"></span>
        <span class="status-text">Disponível para projetos</span>
        <span class="location">// Crateús, CE — Brasil</span>
      </div>

      <h1 class="hero-name">
        <span class="name-line" style="animation-delay: 0.1s">Herdeson</span>
        <span class="name-line accent" style="animation-delay: 0.25s">Mourão</span>
      </h1>

      <div class="hero-role" style="animation-delay: 0.4s">
        <span class="role-prefix">&gt;_</span>
        <span class="role-text">{{ currentRole }}</span>
        <span class="cursor">|</span>
      </div>

      <p class="hero-desc animate-in" style="animation-delay: 0.55s">
        Tech Lead &amp; Full Stack Developer com experiência desde 2016.<br>
        Especializado em Node.js, TypeScript, APIs REST e sistemas distribuídos escaláveis.
      </p>

      <div class="hero-actions animate-in" style="animation-delay: 0.7s">
        <a href="#projetos" class="btn-primary">Ver Projetos</a>
        <a href="#sobre" class="btn-ghost">Sobre mim →</a>
      </div>

      <div class="hero-stats animate-in" style="animation-delay: 0.85s">
        <div class="stat" v-for="s in stats" :key="s.label">
          <span class="stat-value">{{ s.value }}</span>
          <span class="stat-label">{{ s.label }}</span>
        </div>
      </div>
    </div>

    <div class="hero-bg-text" aria-hidden="true">BACKEND</div>

    <div class="hero-socials">
      <a href="https://github.com/HerdesonMourao" target="_blank" class="social-link" title="GitHub">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
      </a>
      <a href="https://www.linkedin.com/in/herdesonmourao" target="_blank" class="social-link" title="LinkedIn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      </a>
      <a href="https://gitlab.com/HerdesonMourao" target="_blank" class="social-link" title="GitLab">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.6 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z"/></svg>
      </a>
      <div class="social-line"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const roles = [
  'Tech Lead',
  'Backend Specialist',
  'Node.js Engineer',
  'API Architect',
  'Full Stack Developer',
]

const currentRole = ref('')
let roleIndex = 0
let charIndex = 0
let typing = true
let timer = null

const stats = [
  { value: '9+', label: 'Anos de Exp.' },
  { value: 'Capgemini', label: 'Empresa Atual' },
  { value: 'Node.js', label: 'Stack Principal' },
  { value: 'AURA/Vivo', label: 'Projeto Atual' },
]

const typeEffect = () => {
  const target = roles[roleIndex]
  if (typing) {
    currentRole.value = target.substring(0, charIndex + 1)
    charIndex++
    if (charIndex === target.length) {
      typing = false
      timer = setTimeout(typeEffect, 1800)
      return
    }
  } else {
    currentRole.value = target.substring(0, charIndex - 1)
    charIndex--
    if (charIndex === 0) {
      typing = true
      roleIndex = (roleIndex + 1) % roles.length
    }
  }
  timer = setTimeout(typeEffect, typing ? 80 : 45)
}

onMounted(() => { timer = setTimeout(typeEffect, 600) })
onUnmounted(() => clearTimeout(timer))
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 7rem 0 4rem;
}

.hero-scan-line {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(232,164,0,0.03) 50%, transparent 100%);
  height: 3px;
  width: 100%;
  animation: scan 8s linear infinite;
  pointer-events: none;
}

.hero-inner { position: relative; z-index: 1; }

.hero-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
  font-size: 0.72rem;
  color: var(--text-secondary);
  letter-spacing: 0.08em;
  animation: fadeInUp 0.5s ease both;
  flex-wrap: wrap;
}

.status-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: #3cb371;
  animation: pulse-glow 2s ease infinite;
  flex-shrink: 0;
}

.location { color: var(--text-muted); margin-left: 0.5rem; }

.hero-name {
  font-family: var(--font-display);
  font-size: clamp(3rem, 10vw, 8rem);
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: -0.03em;
  margin-bottom: 1.5rem;
  display: block;
}

.name-line { display: block; animation: fadeInUp 0.6s ease both; }
.name-line.accent { color: var(--accent); -webkit-text-stroke: 1px var(--accent); }

.hero-role {
  font-family: var(--font-mono);
  font-size: clamp(0.9rem, 2.5vw, 1.3rem);
  color: var(--text-secondary);
  margin-bottom: 1.75rem;
  animation: fadeInUp 0.6s ease both;
  animation-delay: 0.4s;
  min-height: 2rem;
}

.role-prefix { color: var(--accent); margin-right: 0.5rem; }
.cursor { color: var(--accent); animation: pulse-glow 0.8s ease infinite; }

.hero-desc {
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  color: var(--text-secondary);
  max-width: 500px;
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 3.5rem;
  flex-wrap: wrap;
}

.btn-primary {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.875rem 2rem;
  background: var(--accent);
  color: #000;
  font-weight: 700;
  transition: all 0.2s ease;
  border: 1px solid var(--accent);
}
.btn-primary:hover { background: transparent; color: var(--accent); }

.btn-ghost {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.875rem 1.5rem;
  border: 1px solid var(--bg-border);
  color: var(--text-secondary);
  transition: all 0.2s ease;
}
.btn-ghost:hover { border-color: var(--text-secondary); color: var(--text-primary); }

.hero-stats {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  padding-top: 2rem;
  border-top: 1px solid var(--bg-border);
}

.stat { display: flex; flex-direction: column; gap: 0.25rem; }

.stat-value {
  font-family: var(--font-display);
  font-size: clamp(0.85rem, 2vw, 1.1rem);
  font-weight: 700;
  color: var(--text-primary);
}

.stat-label {
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.hero-bg-text {
  position: absolute;
  right: -2rem;
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
  font-family: var(--font-display);
  font-size: clamp(4rem, 18vw, 16rem);
  font-weight: 800;
  color: transparent;
  -webkit-text-stroke: 1px rgba(232,164,0,0.06);
  letter-spacing: 0.1em;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
}

.hero-socials {
  position: fixed;
  left: 2rem;
  bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  z-index: 50;
}

.social-link {
  color: var(--text-muted);
  transition: color 0.2s ease, transform 0.2s ease;
}
.social-link:hover { color: var(--accent); transform: translateY(-2px); }

.social-line {
  width: 1px; height: 60px;
  background: linear-gradient(to bottom, var(--text-muted), transparent);
}

@media (max-width: 1024px) {
  .hero-socials { display: none; }
}

@media (max-width: 768px) {
  .hero { padding: 6rem 0 3rem; }
  .hero-bg-text { display: none; }
  .hero-stats { gap: 1.25rem; }
  .location { display: none; }
}

@media (max-width: 480px) {
  .hero-actions { flex-direction: column; }
  .btn-primary, .btn-ghost { text-align: center; }
}
</style>
