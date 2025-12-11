import api from '@/shared/api'
import { stateStore } from '@/store/state.store'
import checkPayment from './check-payment'
import { modalStore } from '@/store/modal.store'
import checkMailing from './check-mailing'

export default async () => {
  const mailingId = localStorage.getItem('mailingId') || null
  if (!mailingId) return

  stateStore.setMailingId(mailingId)

  try {
    const { data, status: responseStatus } = await api.mailing.status({ mailingId })
    stateStore.setStatus(data.status)

    if (data.status == 0) {
      if (data.isPaymented) {
        modalStore.openModal('mailing-start')
      } else {
        checkPayment()
      }
    } else if (data.status == 1) {
      checkMailing()
      modalStore.openModal('mailing-progress')
    } else if (data.status == 2) modalStore.openModal('mailing-finished')
  } catch (e) {
    return localStorage.removeItem('mailingId')
  }
}
