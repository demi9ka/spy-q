'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { observer } from 'mobx-react-lite'
import { modalStore } from '@/store/modal.store'
import { Loader } from 'lucide-react'
import { stateStore } from '@/store/state.store'

export const MailingProgress = observer(() => {
  const { setStatus, progress } = stateStore
  const { modal, closeModal } = modalStore

  return (
    <Dialog open={modal == 'mailing-progress'} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle />
        </DialogHeader>
        <Loader
          className='text-accent mx-auto animate-spin animation-duration-3000
        size-[120.0px] md:size-[57.6px] lg:size-[73.6px] xl:size-[92.0px] 2xl:size-[120.0px]
        mt-[85.0px] md:mt-[40.8px] lg:mt-[52.1px] xl:mt-[65.2px] 2xl:mt-[85.0px]
      
        '
        />
        <h4
          className='text-center font-semibold 
            text-[24.0px] md:text-[14.4px] lg:text-[18.4px] xl:text-[23.0px] 2xl:text-[30.0px]'
        >
          AI-агент запущен, ожидайте завершения процесса
        </h4>
        <span
          className='font-semibold text-center
        text-[16.0px] md:text-[7.7px] lg:text-[9.8px] xl:text-[12.3px] 2xl:text-[16.0px]'
        >
          {progress.toFixed(1)}%
        </span>
        <div
          className='relative bg-white mx-auto max-w-[90%] overflow-hidden 
        w-full md:w-[212.2px] lg:w-[271.1px] xl:w-[338.9px] 2xl:w-[442.0px]
        h-[20.0px] md:h-[9.6px] lg:h-[12.3px] xl:h-[15.3px] 2xl:h-[20.0px]
        rounded-[12.0px] md:rounded-[5.8px] lg:rounded-[7.4px] xl:rounded-[9.2px] 2xl:rounded-[12.0px]
        mb-[39.0px] md:mb-[31.2px] lg:mb-[39.9px] xl:mb-[49.8px] 2xl:mb-[65.0px]'
        >
          <div
            className='bg-accent h-full transition-all duration-200 absolute top-0 left-0
            rounded-[12.0px] md:rounded-[5.8px] lg:rounded-[7.4px] xl:rounded-[9.2px] 2xl:rounded-[12.0px]'
            style={{
              width: `${progress}%`
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
})
