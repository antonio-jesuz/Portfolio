<script setup lang="ts">
import { Github, Linkedin, Mail, Server, Eye, Database, ExternalLink, Menu, X, Check, Copy } from 'lucide-vue-next'
import { profile, pillars, stack, categories, projects } from '~/data/portfolio'

const icons: Record<string, any> = { Server, Eye, Database }
const active = ref('all')
const menuOpen = ref(false)
const copied = ref(false)
const scrolled = ref(false)

const filtered = computed(() =>
  active.value === 'all' ? projects : projects.filter(p => p.category === active.value)
)

const nav = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#stack', label: 'Stack' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' }
]

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2500)
  } catch { window.location.href = `mailto:${profile.email}` }
}

onMounted(() => {
  const onScroll = () => (scrolled.value = window.scrollY > 16)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
})

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org', '@type': 'Person',
      name: profile.name, jobTitle: profile.role,
      url: profile.github, sameAs: [profile.github, profile.linkedin]
    })
  }]
})
</script>

<template>
  <div class="min-h-screen">
    <a href="#sobre" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-go focus:px-3 focus:py-2 focus:text-ink">Ir para o conteúdo</a>

    <!-- Header -->
    <header :class="['fixed inset-x-0 top-0 z-40 transition-colors', scrolled || menuOpen ? 'border-b border-line bg-ink/90 backdrop-blur' : '']">
      <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" class="font-display text-lg font-bold text-white">{{ profile.name }}</a>

        <nav class="hidden items-center gap-8 text-sm md:flex" aria-label="Principal">
          <a v-for="n in nav" :key="n.href" :href="n.href" class="text-slate-300 transition-colors hover:text-go">{{ n.label }}</a>
        </nav>

        <div class="flex items-center gap-2">
          <a :href="profile.github" target="_blank" rel="noopener" aria-label="GitHub" class="rounded-lg border border-line p-2 text-slate-300 hover:border-go/60 hover:text-go"><Github class="h-5 w-5" /></a>
          <a :href="profile.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn" class="rounded-lg border border-line p-2 text-slate-300 hover:border-go/60 hover:text-go"><Linkedin class="h-5 w-5" /></a>
          <button class="rounded-lg border border-line p-2 text-slate-300 md:hidden" :aria-expanded="menuOpen" aria-label="Abrir menu" @click="menuOpen = !menuOpen">
            <X v-if="menuOpen" class="h-5 w-5" /><Menu v-else class="h-5 w-5" />
          </button>
        </div>
      </div>
      <nav v-if="menuOpen" class="border-t border-line px-4 pb-4 md:hidden" aria-label="Mobile">
        <a v-for="n in nav" :key="n.href" :href="n.href" class="block py-3 text-slate-200" @click="menuOpen = false">{{ n.label }}</a>
      </nav>
    </header>

    <main>
      <!-- Hero -->
      <section class="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 md:pb-28 md:pt-44">
        <div class="pointer-events-none absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-go/10 blur-[120px]" aria-hidden="true" />
        <div class="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-12">
          <div class="md:col-span-7">
            <p class="mb-4 font-mono text-sm text-go">{{ profile.role }}</p>
            <h1 class="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {{ profile.headline }}
            </h1>
            <p class="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">{{ profile.summary }}</p>
            <div class="mt-8 flex flex-wrap gap-3">
              <a href="#projetos" class="rounded-xl bg-go px-6 py-3 font-semibold text-ink transition-colors hover:bg-go-soft">Ver projetos</a>
              <a href="#contato" class="rounded-xl border border-line bg-panel px-6 py-3 font-semibold text-white transition-colors hover:border-go/50">Falar comigo</a>
            </div>
          </div>

          <div class="md:col-span-5">
            <div class="overflow-hidden rounded-2xl border border-line bg-[#081320] shadow-2xl">
              <div class="flex items-center justify-between border-b border-[#14243b] bg-[#050c14] px-4 py-3">
                <div class="flex gap-2" aria-hidden="true"><span class="h-3 w-3 rounded-full bg-red-500/80" /><span class="h-3 w-3 rounded-full bg-yellow-500/80" /><span class="h-3 w-3 rounded-full bg-green-500/80" /></div>
                <span class="font-mono text-xs text-slate-400">main.go</span>
                <span class="w-12" />
              </div>
              <pre class="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-slate-300 sm:text-sm"><code><span class="text-slate-500">// Serviço de analytics</span>
<span class="text-go">package</span> main

<span class="text-go">import</span> <span class="text-mint">"github.com/gin-gonic/gin"</span>

<span class="text-go">func</span> <span class="text-sky-300">main</span>() {
    r := gin.<span class="text-go">New</span>()
    r.<span class="text-go">POST</span>(<span class="text-mint">"/v1/analytics/stream"</span>, handle)
    r.<span class="text-go">Run</span>(<span class="text-mint">":8080"</span>)
}</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- Sobre -->
      <section id="sobre" class="border-t border-line bg-[#050c14]/60 px-4 py-20 sm:px-6">
        <div class="mx-auto max-w-6xl">
          <h2 class="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">Do modelo à produção, ponta a ponta</h2>
          <div class="mt-12 grid gap-6 md:grid-cols-3">
            <article v-for="p in pillars" :key="p.title" class="rounded-2xl border border-line bg-panel p-7">
              <component :is="icons[p.icon]" class="mb-5 h-7 w-7 text-go" />
              <h3 class="font-display text-xl font-bold text-white">{{ p.title }}</h3>
              <p class="mt-3 text-sm leading-relaxed text-slate-400">{{ p.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <!-- Stack -->
      <section id="stack" class="px-4 py-20 sm:px-6">
        <div class="mx-auto max-w-6xl">
          <h2 class="font-display text-3xl font-bold text-white sm:text-4xl">Stack</h2>
          <dl class="mt-10 divide-y divide-line border-y border-line">
            <div v-for="s in stack" :key="s.group" class="grid gap-3 py-5 md:grid-cols-4">
              <dt class="font-display font-semibold text-white">{{ s.group }}</dt>
              <dd class="flex flex-wrap gap-2 md:col-span-3">
                <span v-for="i in s.items" :key="i" class="rounded-md border border-line bg-[#050c14] px-3 py-1 text-sm text-slate-300">{{ i }}</span>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <!-- Projetos -->
      <section id="projetos" class="border-t border-line bg-[#050c14]/40 px-4 py-20 sm:px-6">
        <div class="mx-auto max-w-6xl">
          <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 class="font-display text-3xl font-bold text-white sm:text-4xl">Projetos</h2>
            <div class="flex flex-wrap gap-1 rounded-xl border border-line bg-[#081320] p-1.5" role="group" aria-label="Filtrar projetos">
              <button
                v-for="c in categories" :key="c.id" :aria-pressed="active === c.id"
                :class="['rounded-lg px-4 py-2 text-sm transition-colors', active === c.id ? 'bg-go font-semibold text-ink' : 'text-slate-400 hover:text-white']"
                @click="active = c.id"
              >{{ c.label }}</button>
            </div>
          </div>

          <div class="mt-10 grid gap-6 md:grid-cols-2">
            <article v-for="p in filtered" :key="p.id" class="flex flex-col justify-between rounded-2xl border border-line bg-panel p-7 transition-colors hover:border-go/50">
              <div>
                <h3 class="font-display text-2xl font-bold text-white">{{ p.title }}</h3>
                <p class="mt-3 text-sm leading-relaxed text-slate-400">{{ p.description }}</p>
              </div>
              <div class="mt-6">
                <ul class="flex flex-wrap gap-2">
                  <li v-for="t in p.techs" :key="t" class="rounded-md border border-[#112236] bg-[#04090f] px-2.5 py-1 font-mono text-xs text-slate-300">{{ t }}</li>
                </ul>
                <a :href="p.github" target="_blank" rel="noopener" class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-go hover:text-go-soft">
                  Ver código no GitHub <ExternalLink class="h-4 w-4" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Contato -->
      <section id="contato" class="border-t border-line px-4 py-20 sm:px-6">
        <div class="mx-auto max-w-6xl rounded-3xl border border-line bg-gradient-to-r from-panel to-[#041a29] p-8 sm:p-12">
          <h2 class="max-w-xl font-display text-3xl font-extrabold text-white sm:text-4xl">Tem uma vaga ou projeto em Go, dados ou IA?</h2>
          <p class="mt-4 max-w-xl text-slate-300">Me escreva por e-mail ou LinkedIn. Respondo assim que possível.</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <a :href="`mailto:${profile.email}`" class="inline-flex items-center gap-2 rounded-xl bg-go px-6 py-3 font-semibold text-ink hover:bg-go-soft"><Mail class="h-5 w-5" /> Enviar e-mail</a>
            <button class="inline-flex items-center gap-2 rounded-xl border border-line bg-[#0c1a2b] px-6 py-3 font-semibold text-slate-200 hover:border-go/50" @click="copyEmail">
              <Check v-if="copied" class="h-5 w-5 text-mint" /><Copy v-else class="h-5 w-5 text-slate-400" />
              {{ copied ? 'E-mail copiado' : 'Copiar e-mail' }}
            </button>
            <a :href="profile.linkedin" target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-xl border border-line px-6 py-3 font-semibold text-slate-200 hover:border-go/50"><Linkedin class="h-5 w-5" /> LinkedIn</a>
          </div>
        </div>
      </section>
    </main>

    <footer class="border-t border-line px-4 py-8 text-sm text-slate-500 sm:px-6">
      <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p>© {{ new Date().getFullYear() }} {{ profile.name }}</p>
        <div class="flex gap-6">
          <a :href="profile.github" target="_blank" rel="noopener" class="hover:text-go">GitHub</a>
          <a :href="profile.linkedin" target="_blank" rel="noopener" class="hover:text-go">LinkedIn</a>
        </div>
      </div>
    </footer>
  </div>
</template>
