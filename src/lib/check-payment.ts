import api from '@/shared/api'
import { modalStore } from '@/store/modal.store'
import { stateStore } from '@/store/state.store'
import { toast } from 'sonner'

let interval: NodeJS.Timeout | undefined = undefined
export default async (link_?: string) => {
  let link = link_
  if (!link) {
    const { data, status } = await api.payment.link({ mailingId: stateStore.mailingId! })
    if (status == 200) link = data.link
  }
  if (link) {
    toast('Оплатите рассылку', {
      action: {
        label: 'Оплатить',
        onClick: () => window.open(link, '_blank')
      }
    })
  }
  if (interval) return
  interval = setInterval(async () => {
    const { data, status } = await api.payment.check({ mailingId: stateStore.mailingId! })

    if (status !== 200) return

    if (data.result) {
      clearInterval(interval)
      interval = undefined
      modalStore.openModal('mailing-start')
      stateStore.setStatus(1)
    }
  }, 6000)
}
