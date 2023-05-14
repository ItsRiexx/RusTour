// конфигурация чат-бота
const configChatbot = {};
// CSS-селектор кнопки, посредством которой будем вызывать окно диалога с чат-ботом
configChatbot.btn = '.chatbot__btn';
// ключ для хранения отпечатка браузера
configChatbot.key = 'fingerprint';
// реплики чат-бота
configChatbot.replicas = {
    bot: {
      0: { content: 'Приветствую! Я бот поддержки сайта.', human: [0] },
      1: { content: 'Как мне к Вам обращаться?', human: [1] },
      2: { content: '{{name}}, что Вас интересует?', human: [2, 3] },
      3: { content: 'По всем вопросам можете обращаться по контактной почте - rustour.org@gmail.com. Всего хорошего!'},
      4: { content: 'Перевод на СберБанк: +79080283727. Спасибо за поддержку <3'},
      /* ... */
    },
    human: {
      0: { content: 'Приветствую!', bot: 1 },
      1: { content: '', bot: 2, name: 'name' },
      2: { content: 'Хочу оставить запрос модератору сайта.', bot: 3 },
      3: { content: 'Хочу материально поддержать разработчиков.', bot: 4 },
      /* ... */
    }
  }
// корневой элемент
configChatbot.root = SimpleChatbot.createTemplate();
// URL chatbot.php
configChatbot.url = '/chatbot/chatbot.php';
// создание SimpleChatbot
let chatbot = new SimpleChatbot(configChatbot);
// при клике по кнопке configChatbot.btn
document.querySelector(configChatbot.btn).onclick = function (e) {
  this.classList.add('d-none');
  const $tooltip = this.querySelector('.chatbot__tooltip');
  if ($tooltip) {
    $tooltip.classList.add('d-none');
  }
  configChatbot.root.classList.toggle('chatbot_hidden');
  chatbot.init();
};
// добавление ключа для хранения отпечатка браузера в LocalStorage
let fingerprint = localStorage.getItem(configChatbot.key);
if (!fingerprint) {
  Fingerprint2.get(function (components) {
    fingerprint = Fingerprint2.x64hash128(components.map(function (pair) {
      return pair.value
    }).join(), 31)
    localStorage.setItem(configChatbot.key, fingerprint)
  });
}


window.addEventListener('scroll', e =>
{
    document.documentElement.style.setProperty('--scrollTop',`${this.scrollY}px`);
}
)
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})

