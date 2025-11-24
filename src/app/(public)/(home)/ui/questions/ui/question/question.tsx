'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

type Props = {
  question: string
  answer: string
  id: number
}

export const Question = ({ answer, question, id }: Props) => {
  return (
    <Accordion
      type='single'
      collapsible
      className='
        w-full
        bg-[var(--container)]  shadow
       rounded-[16px] md:rounded-[15.4px] lg:rounded-[18.8px] xl:rounded-[21.3px] 2xl:rounded-[32px]'
    >
      <AccordionItem value={`item-${id}`}>
        <AccordionTrigger className='p-0'>
          <h6 className='font-semibold text-[18px] md:text-[11.5px] lg:text-[14.1px] xl:text-[16.0px] 2xl:text-[24px]'>
            {question}
          </h6>
        </AccordionTrigger>
        <AccordionContent className='mt-2 mr-5 text-[14.0px] md:text-[9.6px] lg:text-[12.3px] xl:text-[15.3px] 2xl:text-[20.0px]'>
          <div dangerouslySetInnerHTML={{ __html: answer }} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
