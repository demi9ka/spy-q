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
export type StatusReponse = {
  status: 0 | 1 | 2 | 3
}

//0 - ожидаем оплаты
//1 - оплата прошла, модалка с кнопкой старта
//2 - процесс рассылки
//3 - завершено
