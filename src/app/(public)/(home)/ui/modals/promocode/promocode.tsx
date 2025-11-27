'use client'

import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { BadgeAlertIcon, BadgeCheck, Ticket } from 'lucide-react'
import { useState } from 'react'
import { useDebounce } from '@uidotdev/usehooks'
import { useApplyPromocode } from '@/entities/panel/use-apply-promocode'
import { useSendForm } from '@/entities/panel/use-send-form'
import { observer } from 'mobx-react-lite'
import { panelFormStore } from '@/store/panel-form.store'
import { modalStore } from '@/store/modal.store'
import { stateStore } from '@/store/state.store'
import checkPayment from '@/lib/check-payment'

export const Promocode = observer(() => {
  const { closeModal, openModal, modal } = modalStore
  const { setMailingId, setStatus } = stateStore
  const { formData } = panelFormStore

  const [value, setValue] = useState('')
  const debounceValue = useDebounce(value, 800)

  const { data } = useApplyPromocode({ promocode: debounceValue })
  const { mutateAsync, isPending } = useSendForm()

  const isPromocodeWrong = data && !data.result && debounceValue === value
  const isPromocodeSuccess = data && data.result

  const sendForm = async () => {
    const { id, link } = await mutateAsync({
      promocode: isPromocodeSuccess ? value : undefined,
      data: formData
    })
    setMailingId(id)
    if (link) {
      window.open(link, '_blank')
      checkPayment(link)
      closeModal()
    } else {
      openModal('mailing-start')
      setStatus(0)
    }
  }

  return (
    <Dialog open={modal == 'promocode'} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-center'>Оплата</DialogTitle>
        </DialogHeader>
        <div
          className='bg-white 
      my-[21.0px] md:my-[10.1px] lg:my-[12.9px] xl:my-[16.1px] 2xl:my-[21.0px]
      mx-[16.0px] md:mx-[7.7px] lg:mx-[9.8px] xl:mx-[12.3px] 2xl:mx-[16.0px]
     p-[16.0px] md:p-[11.5px] lg:p-[14.7px] xl:p-[18.4px] 2xl:p-[24.0px]
      rounded-[24.0px] md:rounded-[11.5px] lg:rounded-[14.7px] xl:rounded-[18.4px] 2xl:rounded-[24.0px]'
        >
          <h4
            style={{ lineHeight: '100%' }}
            className='font-semibold 
          text-[16.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]
          mb-[12.0px] md:mb-[5.8px] lg:mb-[7.4px] xl:mb-[9.2px] 2xl:mb-[12.0px] '
          >
            Промокод
          </h4>
          <div
            className='flex items-center bg-[var(--bg)]
            px-[16.0px] md:px-[7.7px] lg:px-[9.8px] xl:px-[12.3px] 2xl:px-[16.0px]
            py-[13.5px] md:py-[6.5px] lg:py-[8.3px] xl:py-[10.3px] 2xl:py-[13.5px]
            rounded-[16.0px] md:rounded-[7.7px] lg:rounded-[9.8px] xl:rounded-[12.3px] 2xl:rounded-[16.0px]
            gap-[8.0px] md:gap-[3.8px] lg:gap-[4.9px] xl:gap-[6.1px] 2xl:gap-[8.0px]
            '
          >
            <Ticket
              className='text-accent rotate-90 
            size-[24.0px] md:size-[11.5px] lg:size-[14.7px] xl:size-[18.4px] 2xl:size-[24.0px]'
            />
            <input
              className={`${
                isPromocodeWrong && 'text-red-500'
              } grow-[2] outline-0 text-[15.0px] md:text-[7.2px] lg:text-[9.2px] xl:text-[11.5px] 2xl:text-[15.0px]`}
              placeholder='Введите промокод'
              type='text'
              value={value}
              onChange={e => setValue(e.target.value)}
            />
            {isPromocodeSuccess && (
              <BadgeCheck
                className='text-white fill-accent
            size-[24.0px] md:size-[11.5px] lg:size-[14.7px] xl:size-[18.4px] 2xl:size-[24.0px]'
              />
            )}
            {isPromocodeWrong && (
              <BadgeAlertIcon
                className='text-white fill-red-500
            size-[24.0px] md:size-[11.5px] lg:size-[14.7px] xl:size-[18.4px] 2xl:size-[24.0px]'
              />
            )}
          </div>
          {isPromocodeWrong && (
            <span
              className='text-red-500 
              mt-[12.0px] md:mt-[5.8px] lg:mt-[7.4px] xl:mt-[9.2px] 2xl:mt-[12.0px]
              text-[14.0px] md:text-[6.7px] lg:text-[8.6px] xl:text-[10.7px] 2xl:text-[14.0px]'
            >
              Неверный промокод, попробуйте другой
            </span>
          )}
        </div>
        <DialogFooter
          className='flex justify-center bg-white rounded-2xl 
        p-[16.0px] md:p-[7.7px] lg:p-[9.8px] xl:p-[12.3px] 2xl:p-[16.0px]'
        >
          <button
            onClick={sendForm}
            disabled={isPending}
            className='disabled:opacity-70  cursor-pointer bg-accent font-semibold text-white
           w-full  md:w-[180.5px] lg:w-[230.6px] xl:w-[288.3px] 2xl:w-[376.0px]
           py-[11.0px] md:py-[5.3px] lg:py-[6.7px] xl:py-[8.4px] 2xl:py-[11.0px]
           text-[16.0px] md:text-[7.7px] lg:text-[9.8px] xl:text-[12.3px] 2xl:text-[16.0px]
           rounded-[16.0px] md:rounded-[7.7px] lg:rounded-[9.8px] xl:rounded-[12.3px] 2xl:rounded-[16.0px]
          '
          >
            {isPromocodeSuccess ? 'оплатить' : 'Пропустить и оплатить'}
          </button>
          <DialogClose asChild></DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
})
