// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss']
})
