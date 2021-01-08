import Block from '../core/block.js';
import Button from "../components/button/index.js";
import Input from "../components/input/index.js";
import {render, Templator, forma} from "../core/utils.js";

interface IInput {
  type: string
  config: {
    value: string
    type: string
    placeholder: string
    dataType: string
    dataText: string
    clName: string
  }
  valid: boolean,
  validation: {
    required: boolean
  }
  validationMessage: string
}

interface IContext {
  title: string
  formdata: {
    login: IInput
    password: IInput
  }
  link: object
  btn: object
}

class Page extends Block {
  constructor(props: IContext) {
    // Создаём враппер дом-элемент button
    super("main", 'container', props);
  }

  render() {
    const templ = `
        <div class="overview overview_active"></div>
        <div class="log-form">
          <div class="js-form">
            <span class="log-form__title">{{ title }}</span>
          </div>
          <div class="log-form__group-btn js-btn"></div>
        </div>`;

    const tmpl:any = new Templator(templ);
    return tmpl.compile(this.props);
  }
}

const context:IContext = {
  title: 'Вход',
  formdata: {
    login: {
      type: 'lightForm',
      config: {
        value: '',
        type: 'text',
        placeholder: 'Логин',
        dataType: 'login',
        dataText: 'Ведите логин',
        clName: ''
      },
      validation: {
        required: true
      },
      valid: false,
      validationMessage: ''
    },
    password: {
      type: 'lightForm',
      config: {
        value: '',
        type: 'password',
        placeholder: 'Пароль',
        dataType: 'password',
        dataText: 'Ведите пароль',
        clName: ''
      },
      validation: {
        required: true
      },
      valid: false,
      validationMessage: ''
    },
  },
  link: {
    text: 'Регистрация',
    className: 'log-form__btn log-form__btn_gray',
    type: 'link',
    url: '/registration.html'
  },
  btn: {
    text: 'Авторизоваться',
    clName: 'log-form__btn',
    type: 'button',
  }
};
const {formdata:{login, password}, btn, link}: any = context
// console.log(title, login, password, btn, link)

const page = new Page(context);
render(".container", page);

// const {login, password}: any = context.formdata
const inputLogin: any = new Input(login);
const inputPassword: any = new Input(password);
render('.js-form', inputLogin)
render('.js-form', inputPassword)

// const btn = context.btn as btnType
render(".js-btn", new Button(btn));

// const link = context.link as btnType
render(".js-btn", new Button(link));

// log.in(context.formdata);

const form = <HTMLDivElement>document.getElementsByClassName('log-form')[0];
// const inputs = form ? form.querySelectorAll('input') : null;
// const btn = document.getElementsByClassName('js-login')[0];

if (form) {
  /*form.addEventListener("blur", (event: Event) => {
    const element = <HTMLInputElement>event.target

    if (element.tagName === 'INPUT') {
      const type = element.dataset.type
      const value = element.value;

      if (type) {
        const {formdata}: any = context;
        const valid = forma.validate(element, formdata[type]);
        let input;
        if(type === 'login') {
          input = inputLogin
        }
        if(type === 'password') {
          input = inputPassword
        }
        if (valid) {
          input.setProps({
            ...formdata[type],
            config: {
              ...formdata[type].config,
              value: value,
              clName: '',
            },
            valid: true,
            validationMessage: ''
          });
        } else {
          input.setProps({
            ...formdata[type],
            config: {
              ...formdata[type].config,
              value: value,
              clName: 'log-form__control_error',
            },
            valid: false,
            validationMessage: formdata[type].config.dataText
          });
        }
      }
    }
  }, true);
  form.addEventListener("focus", (event: Event) => {
    const element = <HTMLInputElement>event.target

    if (element.tagName === 'INPUT') {
      const parent = element.closest('div');
      const label = element.nextElementSibling;

      if (parent) {
        parent.classList.remove('log-form__control_error');
      }
      if (label) {
        label.textContent = ''
      }
    }
  }, true);

  form.addEventListener('click', (event: Event) => {
    const element = <HTMLElement>event.target
    if (element.classList.contains('js-submit')) {
      const isValid = forma.isValid(context.formdata)

      for(let key in context.formdata) {
        console.log('-', context.formdata[key])
      }
      console.log(isValid)
    }
  })*/

  form.addEventListener("blur", (event: Event) => {
    const element = <HTMLInputElement>event.target

    if (element.tagName === 'INPUT') {
      forma.validate(element, false)
    }
  }, true);

  form.addEventListener("focus", (event: Event) => {
    const element = <HTMLInputElement>event.target

    if (element.tagName === 'INPUT') {
      forma.validate(element, true)
    }
  }, true);

  form.addEventListener('click', (event: Event) => {
    const element = <HTMLElement>event.target
    if (element.classList.contains('js-submit')) {
      const inputs = element.querySelectorAll('input');
      forma.send(inputs, false)
      //
    }
  });
}