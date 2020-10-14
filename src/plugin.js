import VLibras from './VLibras.vue'

export default function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('VLibras', VLibras)
}

// auto install
if (typeof window !== 'undefined' && typeof window.Vue !== 'undefined') {
  window.Vue.use(install)
}
