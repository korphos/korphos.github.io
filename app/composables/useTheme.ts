const isDark = ref(false)

export function useTheme() {
  function applyTheme(dark: boolean) {
    isDark.value = dark
    if (import.meta.client) {
      document.documentElement.classList.toggle('dark', dark)
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    }
  }

  function init() {
    if (import.meta.client) {
      isDark.value = document.documentElement.classList.contains('dark')
    }
  }

  function toggle() {
    applyTheme(!isDark.value)
  }

  return { isDark, init, toggle }
}
