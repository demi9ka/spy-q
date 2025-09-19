import { HowWork } from './ui/how-work/how-work'
import { Panel } from './ui/panel'
import { Questions } from './ui/questions/questions'
import { Welcome } from './ui/welcome/welcome'

export default () => {
  return (
    <main className='flex-grow flex-shrink-0 basis-auto'>
      <Welcome />
      <Panel />
      <HowWork />
      <Questions />
    </main>
  )
}
