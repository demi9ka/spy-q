import { makeAutoObservable } from 'mobx'

type StatusType = -1 | 0 | 1 | 2 | null

class StateStore {
  mailingId: string | null = null
  status: StatusType = null
  progress: number = 0

  constructor() {
    makeAutoObservable(this)
  }

  setMailingId = (state: string | null) => {
    if (state === null) localStorage.removeItem('mailingId')
    else localStorage.setItem('mailingId', state)
    this.mailingId = state
  }

  setStatus = (status: StatusType) => {
    this.status = status
  }
  setProgress = (progress: number) => {
    this.progress = progress
  }
}

export const stateStore = new StateStore()
