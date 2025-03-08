export function useScrollLock(condition: boolean): void {
  const html: HTMLElement | null = document.querySelector('html')
  const body: HTMLElement = document.body

  if (!html) return

  if (condition) {
    html.style.paddingRight = `${window.innerWidth - body.offsetWidth}px`

    document.body.style.overflow = 'hidden'

    return
  }

  html.style.paddingRight = '0'

  document.body.style.overflow = 'auto'
}
