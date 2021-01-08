interface IDialog {
  title: string,
  avatar: string,
  date: string,
  count?: number,
  isActive?: true,
  message: {
    text: string,
    isMy?: true
  }
}

interface IInfo {
  time: string,
  text?: string,
  isMy?: true,
  image?: string,
  watch?: true
}

interface IChat {
  date: string,
  info: IInfo[]
}

export interface IContext {
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
  dialogs: IDialog[],
  currentChat: IChat[]
}

export const context:IContext = {
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
      isActive: true,
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
  ],
  currentChat: [
    {
      date: 'Вчера',
      info: [
        {
          time: '',
          text: 'Страница с чатом. от дизайнеров Практикума, вам нужно будет самостоятельно доработать интерфейс. Например, выбрать как будет выглядеть кнопка или иконка удаления чата (а может ссылка или меню), где она будет располагаться, будет ли модальное окно с вопросом «Вы уверены?» и как оно будет выглядеть, что будет происходить после удаления.'
        },
        {
          time: '11:15',
          text: 'Очень интересно',
          isMy: true,
          watch: true
        }
      ]
    },
    {
      date: 'Сегодня',
      info: [
        {
          time: '09:48',
          text: 'Два блока: слева — список с чатами, но один из них должен быть активным; справа — блок с «лентой» переписки активного чата. Нужно отображать следующую информацию о сообщениях: дата отдельного сообщения, прочитано ли, дата переписки (например, 19 июля: «лента» сообщений за этот день). Необходимо выделять собеседников (цветом или расположением сообщений), а также само сообщение. Нужно уметь отправлять и отображать: обычный текст, Emoji, картинки, видео. Также должна быть возможность удалить чат. Обратите внимание, что этого нет в примере. Даже если решите использовать макет от дизайнеров Практикума, вам нужно будет самостоятельно доработать интерфейс. Например, выбрать как будет выглядеть кнопка или иконка удаления чата (а может ссылка или меню), где она будет располагаться, будет ли модальное окно с вопросом «Вы уверены?» и как оно будет выглядеть, что будет происходить после удаления.'
        },
        {
          time: '10:01',
          image: 'images/static_cat.jpg'
        },
        {
          time: '11:15',
          text: 'Спасибо',
          isMy: true
        }
      ]
    }
  ]
};