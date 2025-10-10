import { makeAutoObservable } from 'mobx'

type ModalType = '' | 'promocode' | 'mailing-start' | 'mailing-progress' | 'mailing-finished'

class ModalStore {
  modal: ModalType = ''
  constructor() {
    makeAutoObservable(this)
  }

  closeModal = () => {
    this.modal = ''
  }

  openModal = (modalName: ModalType) => {
    this.modal = modalName
  }
}

export const modalStore = new ModalStore()
