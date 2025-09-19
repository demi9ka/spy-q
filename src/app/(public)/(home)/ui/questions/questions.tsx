import { Container } from '@/shared/ui/container'
import { Question } from './ui/question'
import { DATA } from './constants'

export const Questions = () => {
  return (
    <Container
      className='
        mt-[32px] md:mt-[34.6px] lg:mt-[42.2px] xl:mt-[48.0px] 2xl:mt-[72px]
        mb-[24px] md:mb-[24.0px] lg:mb-[29.3px] xl:mb-[33.3px] 2xl:mb-[50px]
        w-full md:w-[528.0px] lg:w-[645.3px] xl:w-[733.3px] 2xl:w-[1100px]
        '
    >
      <h3
        className='text-center font-semibold 
      text-[24px] md:text-[18.2px] lg:text-[22.3px] xl:text-[25.3px] 2xl:text-[38px]'
      >
        Часто задаваемые вопросы
      </h3>
      <h4
        className='md:text-center
       text-[16px] md:text-[8.6px] lg:text-[10.6px] xl:text-[12.0px] 2xl:text-[18px]
       mt-[16px] md:mt-[7.7px] lg:mt-[9.4px] xl:mt-[10.7px] 2xl:mt-[16px]
       mb-[24px] md:mb-[18.2px] lg:mb-[22.3px] xl:mb-[25.3px] 2xl:mb-[38px]'
      >
        Здесь можно легко найти ответ на возникший вопрос
      </h4>
      <div
        className='flex flex-col w-full
      gap-[12px] md:gap-[9.6px] lg:gap-[11.7px] xl:gap-[13.3px] 2xl:gap-[20px]'
      >
        {DATA.map(({ answer, question }, i) => (
          <Question answer={answer} question={question} id={i} key={i} />
        ))}
      </div>
    </Container>
  )
}
