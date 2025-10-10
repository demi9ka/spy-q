import api from '@/shared/api'
import { modalStore } from '@/store/modal.store'
import { stateStore } from '@/store/state.store'

let interval: NodeJS.Timeout | undefined = undefined
export default async () => {
  if (interval) return
  interval = setInterval(async () => {
    const { data, status } = await api.mailing.check({ mailingId: stateStore.mailingId! })

    if (status !== 200) return
    stateStore.setProgress(data.progress)
    if (data.progress == 100) {
      clearInterval(interval)
      interval = undefined
      modalStore.openModal('mailing-finished')
      stateStore.setStatus(3)
    }
  }, 6000)
}
