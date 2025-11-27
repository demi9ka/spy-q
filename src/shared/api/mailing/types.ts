export type DefaultParams = {
  mailingId: string
}

export type StartResposne = {
  result: boolean
}

export type CheckResponse = {
  progress: number
  result: false
}
export type StatusReponse =
  | {
      status: 0
      isPaymented: boolean
    }
  | {
      status: 1 | 2
    }

//0 - ожидаем или модалка с кнопкой старта если isPaymenteed:true
//1 - процесс рассылки
//2 - завершено
