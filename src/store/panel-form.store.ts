import { FormDataType } from '@/type'
import { makeAutoObservable } from 'mobx'

const initialFormData: FormDataType = {
  proposal: '',
  contact: '',
  mailingCount: 1000,
  city: '',
  category: []
}

class PanelFormStore {
  public search = ''
  public formData = initialFormData

  constructor() {
    makeAutoObservable(this)
  }

  setSearch = (value: string) => {
    this.search = value
  }

  clearForm = () => {
    this.formData = initialFormData
  }

  setValue = <K extends keyof FormDataType>(fieldName: K, value: any) => {
    if (fieldName == 'category') value = [...new Set(value)]

    this.formData[fieldName] = value
  }
}

export const panelFormStore = new PanelFormStore()
