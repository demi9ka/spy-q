import { makeAutoObservable } from 'mobx'

class PanelFormStore {
  proposal = ''
  contact = ''
  mailingCount = 1000
  city: any = ''

  constructor() {
    makeAutoObservable(this)
  }
}

// Создаем экземпляр и экспортируем
export const counterStore = new PanelFormStore()
