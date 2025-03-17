export function useScrollLock(condition: boolean): void {
  const html: HTMLElement | null = document.querySelector('html')
  const body: HTMLElement = document.body

  if (!html) return

  if (condition) {
    html.style.paddingRight = `${window.innerWidth - body.offsetWidth}px`

    body.style.overflow = 'hidden'

    return
  }

  html.style.paddingRight = '0'

  body.style.overflow = 'auto'
}
