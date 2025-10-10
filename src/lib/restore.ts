import api from '@/shared/api'
import { stateStore } from '@/store/state.store'
import checkPayment from './check-payment'
import { modalStore } from '@/store/modal.store'
import checkMailing from './check-mailing'

export default async () => {
  const mailingId = localStorage.getItem('mailingId') || null
  if (!mailingId) return

  stateStore.setMailingId(mailingId)

  const {
    data: { status },
    status: responseStatus
  } = await api.mailing.status({ mailingId: mailingId! })

  if (responseStatus !== 200) return

  stateStore.setStatus(status)

  if (status == 0) checkPayment()
  else if (status == 1) modalStore.openModal('mailing-start')
  else if (status == 2) {
    checkMailing()
    modalStore.openModal('mailing-progress')
  } else if (status == 3) modalStore.openModal('mailing-finished')
}
