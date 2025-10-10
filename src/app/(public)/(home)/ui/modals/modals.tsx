import { Promocode } from './promocode'
import { MailingStart } from './mailing-start'
import { MailingProgress } from './mailing-progress'
import { MailingFinished } from './mailing-finished'

export const Modals = () => {
  return (
    <>
      <Promocode />
      <MailingStart />
      <MailingProgress />
      <MailingFinished />
    </>
  )
}
