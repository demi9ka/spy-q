'use client'

import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { observer } from 'mobx-react-lite'
import { modalStore } from '@/store/modal.store'
import { useStartMailing } from '@/entities/mailing/use-start-mailing'
import { CheckCheck } from 'lucide-react'
import { stateStore } from '@/store/state.store'
import checkMailing from '@/lib/check-mailing'
import { panelFormStore } from '@/store/panel-form.store'

export const MailingStart = observer(() => {
  const { mailingId, setStatus } = stateStore
  const { clearForm } = panelFormStore
  const { openModal, modal, closeModal } = modalStore
  const { mutateAsync, isPending } = useStartMailing()

  const onStart = async () => {
    const { result } = await mutateAsync({ mailingId: mailingId! })
    if (!result) return
    openModal('mailing-progress')
    setStatus(1)
    checkMailing()
    clearForm()
  }

  return (
    <Dialog open={modal == 'mailing-start'} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle />
        </DialogHeader>
        <CheckCheck
          className='text-accent mx-auto
        size-[120.0px] md:size-[57.6px] lg:size-[73.6px] xl:size-[92.0px] 2xl:size-[120.0px]
        mt-[85.0px] md:mt-[40.8px] lg:mt-[52.1px] xl:mt-[65.2px] 2xl:mt-[85.0px]
      
        '
        />
        <h4
          className='text-center font-semibold 
           text-[24.0px] md:text-[11.5px] lg:text-[14.7px] xl:text-[18.4px] 2xl:text-[24.0px]'
        >
          Оплата прошла успешно
        </h4>
        <DialogFooter
          className='flex justify-center bg-white rounded-2xl 
        p-[16.0px] md:p-[7.7px] lg:p-[9.8px] xl:p-[12.3px] 2xl:p-[16.0px]'
        >
          <button
            onClick={onStart}
            disabled={isPending}
            className='disabled:opacity-70 cursor-pointer bg-accent font-semibold text-white
           w-full  md:w-[180.5px] lg:w-[230.6px] xl:w-[288.3px] 2xl:w-[376.0px]
           py-[11.0px] md:py-[5.3px] lg:py-[6.7px] xl:py-[8.4px] 2xl:py-[11.0px]
           text-[16.0px] md:text-[7.7px] lg:text-[9.8px] xl:text-[12.3px] 2xl:text-[16.0px]
           rounded-[16.0px] md:rounded-[7.7px] lg:rounded-[9.8px] xl:rounded-[12.3px] 2xl:rounded-[16.0px]
          '
          >
            Запустить агента
          </button>
          <DialogClose asChild></DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
})
