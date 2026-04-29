export const heroLines = [
  "Душу баги на работе и дома.",
  "Ручное, автотесты, мобилки - багам не спрятаться.",
  "Собеседование начинается, когда чек-лист смотрит в душу.",
];

export const qaInventory = [
  "Full-stack QA",
  "Mobile QA",
  "API",
  "English B2",
  "AI-assisted QA",
];

export const skillCards = [
  {
    title: "Ручное тестирование",
    text: "Прохожу сценарии как пользователь, который обязательно нажмет не туда, свернет приложение и вернется в самый неудобный момент.",
    tag: "MANUAL",
    tools: ["Jira", "Confluence", "Test design", "DevTools"],
    checks: ["BVA/EP", "чек-листы", "smoke", "exploratory"],
    artifacts: ["bug reports", "test cases", "decision tables"],
    aiNote:
      "AI помогает накидать edge cases, проверить чек-лист и подсветить риски. Решения принимает QA, а не магический попугай.",
    aiKit: [">_ Cursor", "◇ Claude", "ChatGPT", "Prompt QA"],
  },
  {
    title: "Автотесты",
    text: "Покрываю критичные флоу, ловлю регрессии и отношусь к flaky-тестам как к личному вызову.",
    tag: "AUTO",
    tools: ["Python", "JavaScript", "Selenium", "Playwright", "Pytest", "Allure"],
    checks: ["critical flows", "daily runs", "flaky hunt", "CI/CD"],
    artifacts: ["test reports", "regression suite", "Allure dashboards"],
    aiNote:
      "AI ускоряет тестовые идеи и негативные сценарии, но код, стабильность и ответственность остаются на QA.",
    aiKit: [">_ Cursor", "Claude", "ChatGPT"],
  },
  {
    title: "Мобильное QA",
    text: "Проверяю iOS/Android, адаптив, жесты, повороты, разрешения, пуши и состояния, где приложение обычно начинает чудить.",
    tag: "MOBILE",
    tools: ["TestFlight", "Play Console", "Android Studio", "iOS/Android"],
    checks: ["релизные сборки", "разрешения", "адаптив", "пуши"],
    artifacts: ["release notes", "mobile checklists", "device matrix"],
    aiNote:
      "AI помогает собрать device matrix и edge cases, включая старый Android, который всегда приходит без приглашения.",
    aiKit: ["Prompt QA", "ChatGPT"],
  },
  {
    title: "API и регресс",
    text: "Смотрю на контракты, ответы, ошибки, edge-cases и места, где маленький фикс превращается в большой сюрприз.",
    tag: "REGRESS",
    tools: ["REST API", "Postman", "Swagger", "PostgreSQL", "DynamoDB", "Stripe API"],
    checks: ["contracts", "negative tests", "data checks", "release risks"],
    artifacts: ["API bug reports", "regression notes", "risk lists"],
    aiNote:
      "AI работает как второй взгляд на требования и API-контракты: странные условия, противоречия, релизные риски.",
    aiKit: ["Claude", "ChatGPT", "Prompt QA"],
  },
];

export const qaCases = [
  {
    id: "SIL4-404",
    title: "SIL4 requirements risk",
    context: "Safety-critical логика беспилотного поезда.",
    bug: "Требования могли расходиться со сложной бизнес-логикой.",
    action: "Собрал decision tables и закрыл критичные сценарии до аудита.",
    result: "15+ несоответствий нашли на требованиях, SIL4-аудит прошел спокойно.",
    tools: ["Decision Tables", "Requirements", "SIL4"],
  },
  {
    id: "PAY-200",
    title: "Stripe release risk",
    context: "Платежи, мобильные приложения и AWS.",
    bug: "Stripe и мобильный релиз могли привезти критичные сюрпризы.",
    action: "Проверил Stripe API, TestFlight/Play Console и AWS-окружение.",
    result: "Мобильные приложения вышли без критических багов на старте.",
    tools: ["Stripe API", "TestFlight", "Play Console", "AWS"],
  },
  {
    id: "REG-030",
    title: "Regression time cut",
    context: "Регресс и автотесты в релизном цикле.",
    bug: "Ручной регресс съедал время и прятал релизные риски.",
    action: "Поднял автотесты, отчеты и ежедневные прогоны.",
    result: "Время регресса сократилось на 30%. Flaky-тесты получили статус врага.",
    tools: ["Python", "JS", "Playwright", "Selenium", "Pytest", "Allure"],
  },
];

export const qaPipeline = [
  {
    title: "Read the task  (RTFM)",
    text: "Сначала требования, потом кнопки. Иначе баг уже смеется.",
  },
  {
    title: "Design the traps",
    text: "Чек-листы, decision tables, BVA/EP и edge cases.",
  },
  {
    title: "Run the hunt",
    text: "Manual, API, mobile, autotests - по ситуации, а не по моде.",
  },
  {
    title: "Report clearly",
    text: "Баг должен воспроизводиться, а не звучать как городская легенда.",
  },
  {
    title: "Regress again",
    text: "Фикс принят только после проверки, а не после слова 'готово'.",
  },
];

export const contactLinks = [
  {
    label: "Telegram",
    href: "/telegram",
  },
  {
    label: "Пет-проекты в карантине",
    href: "/pet-projects",
  },
];

export const consoleMessages = [
  "Если вы добрались до консоли, значит интервью уже началось.",
  "Баг не найден. Он просто очень хорошо замаскировался.",
  "Wake up, Neo. Нужно прогнать регресс.",
];
