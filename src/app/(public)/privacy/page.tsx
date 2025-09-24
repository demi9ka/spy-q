import { Section } from '@/shared/ui/section'
import { PageUrl } from './ui/page-url'
import { Back } from './ui/back'
import { Container } from '@/shared/ui/container'

export default () => {
  return (
    <Section className='max-w-[1100px]   pt-[120.0px] md:pt-[57.6px] lg:pt-[73.6px] xl:pt-[92.0px] 2xl:pt-[120.0px]  pb-33 md:pb-14'>
      <PageUrl />
      <div className='flex gap-8 mt-[0.0px] md:mt-[11.5px] lg:mt-[14.7px] xl:mt-[18.4px] 2xl:mt-[24.0px]'>
        <Back />
        <h4 className='font-semibold text-[24.0px] md:text-[18.2px] lg:text-[23.3px] xl:text-[29.1px] 2xl:text-[38.0px]'>
          Политика конфиденциальности
        </h4>
      </div>
      <Container className='mt-[24.0px] md:mt-[11.5px] lg:mt-[14.7px] xl:mt-[18.4px] 2xl:mt-[24.0px]'>
        <h5 className='font-bold text-[18.0px] md:text-[11.5px] lg:text-[14.7px] xl:text-[18.4px] 2xl:text-[24.0px]'>
          Информация
        </h5>
        <p
          className='leading-[130%] 
        mt-[16.0px] md:mt-[7.7px] lg:mt-[9.8px] xl:mt-[12.3px] 2xl:mt-[16.0px]
         text-[14.0px] md:text-[8.6px] lg:text-[11.0px] xl:text-[13.8px] 2xl:text-[18.0px]'
        >
          1. Выбираете аудиторию <br />
          <br /> Отмечаете подходящие категории: например, автосервисы, прокат авто, дилеры или любые другие сегменты
          бизнеса.
          <br />
          <br />
          2. Анализ вашей аудитории <br />
          <br />
          Интеллектуальная система автоматически обходит тысячи сайтов в выбранных нишах, анализирует их и определяет
          релевантные площадки.
          <br />
          <br /> 3. Точечные оповещения <br />
          <br />
          На этих ресурсах размещаются короткие сообщения с вашим предложением и ссылкой на сайт. Эти оповещения
          фиксируются в статистике и отчётах сайтов, и их видят владельцы и руководители бизнеса.
          <br />
          <br /> 4. Прямой контакт с клиентами <br />
          <br />
          Если предложение заинтересовало, клиент сразу переходит на ваш сайт или связывается напрямую. Никаких
          посредников и лишних шагов.
        </p>
      </Container>
    </Section>
  )
}
