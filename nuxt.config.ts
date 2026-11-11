export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'Antonio Jesuz | Engenheiro de Software',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfólio de Antonio Jesuz: Engenharia de Software em Go, Ciência de Dados e Visão Computacional.' },
        { name: 'theme-color', content: '#070e17' },
        { property: 'og:title', content: 'Antonio Jesuz | Engenheiro de Software' },
        { property: 'og:description', content: 'Backend em Go, dados e visão computacional. Veja projetos e contato.' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;700;800&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap' }
      ]
    }
  }
})
