export type Link = {
  text: string
  url: string
} | null

export type ToastStatus = 'success' | 'error'

export type ToastCallback = (text: string, status?: ToastStatus, link?: Link, time?: number) => void

interface Toast {
  show: ToastCallback
  on: (callback: ToastCallback) => void
}

let instance: Toast | null = null

export function useToast() {
  if (!instance) instance = toast()

  return instance
}

function toast(): Toast {
  const callbacks: Array<ToastCallback> = []

  function show(text: string, status: ToastStatus = 'success', link: Link = null, time: number = 3000) {
    callbacks.forEach((callback) => callback(text, status, link, time))
  }

  function on(callback: ToastCallback) {
    callbacks.push(callback)
  }

  return {
    show,
    on,
  }
}
