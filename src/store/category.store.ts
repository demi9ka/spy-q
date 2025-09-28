import { CategoryType } from '@/type'

class PanelFormStore {
  category: CategoryType[] | null = null
}

// Создаем экземпляр и экспортируем
export const counterStore = new PanelFormStore()
