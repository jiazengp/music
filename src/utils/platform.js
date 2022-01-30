export const isWindows = false
export const isMac = false
export const isLinux = false
export const isDevelopment = import.meta.env.DEV === 'development'

export const isCreateTray = isWindows || isLinux || isDevelopment
