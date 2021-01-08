interface IDialog {
  title: string,
  avatar: string,
  date: string,
  count?: number,
  message: {
    text: string,
    isMy?: true
  }
}

export interface IContext {
  description: string,
  avatar: {
    image: string
  },
  search: {
    type: string,
    config: {
      type: string,
      placeholder: string,
      value: string
    }
  },
  dialogs: IDialog[]
}

export const context:IContext = {
  description: 'Пожалуйста, выберите чат, чтобы начать обмен сообщениями',
  avatar: {
    image: ''
  },
  search: {
    type: 'search',
    config: {
      type: 'text',
      placeholder: 'Поиск',
      value: ''
    }
  },
  dialogs: [
    {
      title: 'Андрей',
      avatar: '',
      date: 'Пт',
      message: {
        text: 'Изображение'
      }
    },
    {
      title: 'Киноклуб',
      avatar: '',
      date: '10:49',
      message: {
        text: 'стикер',
        isMy: true
      }
    },
    {
      title: 'Андрей',
      avatar: 'images/static_cat.jpg',
      date: 'Пт',
      message: {
        text: 'Друзья, у меня для вас особенный выпуск новостей!...'
      }
    },
    {
      title: 'Андрей',
      avatar: '',
      date: 'Ср',
      count: 2,
      message: {
        text: 'Друзья, у меня для вас особенный выпуск'
      }
    },
    {
      title: 'Андрей',
      avatar: '',
      date: 'Ср',
      message: {
        text: 'Изображение'
      }
    },
    {
      title: 'Андрей',
      avatar: '',
      date: 'Ср',
      message: {
        text: 'Изображение'
      }
    },
    {
      title: 'Андрей',
      avatar: '',
      date: 'Ср',
      message: {
        text: 'Изображение'
      }
    }
  ]
};