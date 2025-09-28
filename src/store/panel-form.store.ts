import { makeAutoObservable } from 'mobx'

class PanelFormStore {
  public search = ''

  proposal = ''
  contact = ''
  mailingCount = 1000
  city: any = ''

  constructor() {
    makeAutoObservable(this)
  }

  setSearch = (value: string) => {
    this.search = value
  }
}

// Создаем экземпляр и экспортируем
export const panelFormStore = new PanelFormStore()
