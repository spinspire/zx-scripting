export enum COLORS {
  BLACK = '\x1b[0;30m',
  RED = '\x1b[0;31m',
  GREEN = '\x1b[0;32m',
  YELLOW = '\x1b[0;33m',
  BLUE = '\x1b[0;34m',
  MAGENTA = '\x1b[0;35m',
  CYAN = '\x1b[0;36m',
  WHITE = '\x1b[0;37m',
  DEFAULT = '\x1b[0;39m',
  RESET = '\x1b[0m'
}

export const PEOPLE = {
  TICKET_MASTER: {
    name: 'Ticket Master',
    color: COLORS.BLUE
  },
  PLAYER: {
    name: 'You',
    color: COLORS.GREEN
  }
}