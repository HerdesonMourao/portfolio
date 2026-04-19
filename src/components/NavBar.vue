<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-inner container">
      <a href="#hero" class="nav-logo">
        <span class="logo-bracket">[</span>HM<span class="logo-bracket">]</span>
      </a>

      <!-- Desktop links -->
      <ul class="nav-links">
        <li v-for="link in links" :key="link.id">
          <a :href="`#${link.id}`" class="nav-link" :class="{ active: activeSection === link.id }">
            <span class="link-num">{{ link.num }}</span>
            {{ link.label }}
          </a>
        </li>
      </ul>

      <a href="mailto:herdesondev@gmail.com" class="nav-cta desktop-only">Contato</a>

      <!-- Mobile hamburger -->
      <button class="hamburger" @click="menuOpen = !menuOpen" :class="{ open: menuOpen }" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <div class="mobile-menu" :class="{ open: menuOpen }">
      <a
        v-for="link in links"
        :key="link.id"
        :href="`#${link.id}`"
        class="mobile-link"
        @click="menuOpen = false"
      >
        <span class="mobile-num">{{ link.num }}</span>
        {{ link.label }}
      </a>
      <a href="mailto:herdesondev@gmail.com" class="mobile-cta" @click="menuOpen = false">
        ✉ Contato
      </a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const activeSection = ref('hero')
const menuOpen = ref(false)

const links = [
  { id: 'sobre', label: 'Sobre', num: '01' },
  { id: 'skills', label: 'Skills', num: '02' },
  { id: 'projetos', label: 'Projetos', num: '03' },
  { id: 'experiencia', label: 'Experiência', num: '04' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  const sections = ['hero', 'sobre', 'skills', 'projetos', 'experiencia', 'contato']
  for (const id of sections) {
    const el = document.getElementById(id)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 120 && rect.bottom > 120) {
        activeSection.value = id
        break
      }
    }
  }
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 1.25rem 0;
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

.navbar.scrolled {
  background: rgba(10,10,10,0.96);
  backdrop-filter: blur(12px);
  border-bottom-color: var(--bg-border);
  padding: 0.875rem 0;
}

.nav-inner {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-logo {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.1rem;
  color: var(--accent);
  letter-spacing: 0.05em;
  margin-right: auto;
}

.logo-bracket { color: var(--text-muted); }

.nav-links {
  display: flex;
  list-style: none;
  gap: 0.25rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-secondary);
  padding: 0.4rem 0.75rem;
  border: 1px solid transparent;
  transition: all 0.2s ease;
}
.nav-link:hover,
.nav-link.active { color: var(--text-primary); border-color: var(--bg-border); }
.nav-link.active { color: var(--accent); }

.link-num { color: var(--accent); font-size: 0.6rem; }

.nav-cta {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.5rem 1.25rem;
  border: 1px solid var(--accent);
  color: var(--accent);
  transition: all 0.2s ease;
  white-space: nowrap;
}
.nav-cta:hover { background: var(--accent); color: #000; }

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  margin-left: auto;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-secondary);
  transition: all 0.25s ease;
  transform-origin: center;
}

.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile menu */
.mobile-menu {
  display: none;
  flex-direction: column;
  gap: 0;
  background: rgba(10,10,10,0.98);
  backdrop-filter: blur(16px);
  border-top: 1px solid var(--bg-border);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease;
}

.mobile-menu.open {
  max-height: 400px;
}

.mobile-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--bg-border);
  transition: color 0.2s ease, background 0.2s ease;
}
.mobile-link:hover { color: var(--accent); background: var(--accent-glow); }

.mobile-num {
  font-size: 0.6rem;
  color: var(--accent);
  font-family: var(--font-mono);
}

.mobile-cta {
  display: block;
  padding: 1.1rem 2rem;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  font-family: var(--font-mono);
  transition: background 0.2s ease;
}
.mobile-cta:hover { background: var(--accent-glow); }

@media (max-width: 768px) {
  .nav-links { display: none; }
  .desktop-only { display: none; }
  .hamburger { display: flex; }
  .mobile-menu { display: flex; }
}
</style>
