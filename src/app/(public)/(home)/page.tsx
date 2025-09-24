import { HowWork } from './ui/how-work/how-work'
import { Panel } from './ui/panel'
import { Questions } from './ui/questions/questions'
import { Welcome } from './ui/welcome/welcome'

export default () => {
  return (
    <>
      <Welcome />
      <Panel />
      <HowWork />
      <Questions />
    </>
  )
}
