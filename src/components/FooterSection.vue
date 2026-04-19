<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-left">
        <span class="footer-logo">
          <span class="bracket">[</span>HM<span class="bracket">]</span>
        </span>
        <p class="footer-tagline">Herdeson Mourão — Tech Lead & Full Stack Developer</p>
        <p class="footer-location">📍 Crateús, CE — Brasil &nbsp;|&nbsp; ✉️ herdesondev@gmail.com</p>
      </div>

      <div class="footer-right">
        <p class="footer-copy">
          &copy; {{ year }} Herdeson Mourão. Construído com
          <span class="tech-badge">Vue.js</span>
        </p>
        <p class="footer-credits">
          Design &amp; Desenvolvimento por Herdeson Mourão
        </p>
      </div>
    </div>
    <div class="footer-bar"></div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--bg-border);
  background: var(--bg-secondary);
  padding: 2.5rem 0 0;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding-bottom: 2rem;
}

.footer-logo {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.1rem;
  color: var(--accent);
  display: block;
  margin-bottom: 0.5rem;
}

.bracket { color: var(--text-muted); }

.footer-tagline {
  font-size: 0.75rem;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
}

.footer-location {
  font-size: 0.68rem;
  color: var(--text-muted);
}

.footer-right { text-align: right; }

.footer-copy {
  font-size: 0.72rem;
  color: var(--text-muted);
  margin-bottom: 0.3rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  justify-content: flex-end;
  flex-wrap: wrap;
}

.tech-badge {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  padding: 0.15rem 0.4rem;
  border: 1px solid var(--bg-border);
  color: var(--accent);
}

.footer-credits {
  font-size: 0.65rem;
  color: var(--text-muted);
  letter-spacing: 0.05em;
}

.footer-bar {
  height: 3px;
  background: linear-gradient(to right, transparent, var(--accent), transparent);
  opacity: 0.4;
}

@media (max-width: 700px) {
  .footer-inner { flex-direction: column; align-items: flex-start; }
  .footer-right { text-align: left; }
  .footer-copy { justify-content: flex-start; }
}
</style>
