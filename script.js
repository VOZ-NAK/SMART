let currentQuestion = 1;

function nextQuestion(answer) {
  switch (currentQuestion) {
    case 1:
      if (answer === 1) {
        displayQuestion(
          "Я бы хотела стать программистом:). Согласно концепции цель должна быть Specific — конкретная. Какая формулировка больше подходит?",
          [
            "Хочу стать профессионалом области Frontend-разработки с целью успешного создания современных и интерактивных веб-сайтов, обеспечивая отличное пользовательское взаимодействие и улучшая визуальный опыт пользователей.",
            "Хочу стать программистом, потому что это популярная и высокооплачиваемая профессия.",
          ]
        );
      } else {
        displayQuestion("Жаль. Пока!", []);
      }
      break;
    case 2:
      if (answer === 1) {
        displayQuestion(
          "Отлично!Теперь надо сделать цель Measurable-измеримой ",
          [
            "Устроиться на работу Junior Frontend-разработчиком.",
            "Довстичь успеха в роли Frontend-разработчика.",
          ]
        );
      } else {
        displayQuestion("Кажется этот ответ не очень подходит :)", []);
      }
      break;
    case 3:
      if (answer === 1) {
        displayQuestion(
          "Цель должна быть достижима (Achievable — достижима), давайте оценим навыки и составим колесо баланса",
          ["Есть над чем поработать:) Идём дальше"]
        );
      } else {
        displayQuestion("Кажется этот ответ не очень подходит :)", []);
      }
    case 4:
      if (answer === 1) {
        displayQuestion(
          "Цель должна быть достижима (Achievable — достижима), давайте оценим навыки и составим колесо баланса",
          ["Есть над чем поработать:) Идём дальше"]
        );
      } else {
        displayQuestion("Кажется этот ответ не очень подходит :)", [
          "Есть над чем поработать:) Идём дальше",
        ]);
      }
      break;
    case 5:
      if (answer === 1) {
        displayQuestion(
          "Relevant — значимая. Надо задаваться вопросом «А действительно ли я этого хочу?»",
          [
            "Эта цель для меня ОЧЕНЬ значима",
            "Эта цель навязанна обществом и мне это не надо",
          ]
        );
      } else {
        displayQuestion("Кажется надо отказаться от цели :)", [
          "Что бы начать сначала обновите страницу",
        ]);
      }
      if (currentQuestion !== 4) {
        removeBalanceWheel();
      }
      break;
    case 6:
      if (answer === 1) {
        displayQuestion("Time bound — ограниченная во времени.", [
          "Устроиться на работу Junior Frontend-разработчиком к 1 января 2025.",
          "Устроиться на работу Junior Frontend-разработчиком в ближайшее время.",
        ]);
      } else {
        displayQuestion("Кажется надо отказаться от цели :)", [
          "Что бы начать сначала обновите страницу",
        ]);
      }
      break;
    case 7:
      if (answer === 1) {
        displayQuestion(
          "Ура! Мы поставили цель, осталось только её достичь! Спасибо за внимание!",
          []
        );
      } else {
        displayQuestion("Кажется надо отказаться от цели :)", [
          "Что бы начать сначала обновите страницу",
        ]);
      }
      break;
    default:
      break;
  }
  const gameBody = document.getElementById("game-body");
  gameBody.style.backgroundImage = `url('background${currentQuestion}.jpg')`;
}

function displayQuestion(questionText, options) {
  const questionContainer = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options-container");

  document.getElementById("question-text").textContent = questionText;

  // Remove previous options
  while (optionsContainer.firstChild) {
    optionsContainer.removeChild(optionsContainer.firstChild);
  }

  // Add new options
  options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => nextQuestion(index + 1);
    optionsContainer.appendChild(button);
  });

  currentQuestion++;

  if (currentQuestion === 4) {
    displayBalanceWheel();
  }
  function displayBalanceWheel() {
    // Удаление предыдущих графиков, если они есть
    const existingChart = document.getElementById("balance-wheel-chart");
    if (existingChart) {
      existingChart.remove();
    }

    // Создание элемента canvas для отображения графика
    const canvas = document.createElement("canvas");
    canvas.id = "balance-wheel-chart";
    canvas.width = 250;
    canvas.height = 250;

    // Вставка canvas внутрь вопроса
    const questionContainer = document.getElementById("question-container");
    questionContainer.appendChild(canvas);

    // Данные для лепестковой диаграммы
    const data = {
      labels: [
        "Владение HTML",
        "Владение CSS",
        "Владение JS",
        "Владение React",
      ],
      datasets: [
        {
          data: [7, 7, 4, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.7)",
            "rgba(54, 162, 235, 0.7)",
            "rgba(255, 206, 86, 0.7)",
            "rgba(75, 192, 192, 0.7)",
          ],
        },
      ],
    };

    // Опции для лепестковой диаграммы
    const options = {
      responsive: false,
      scale: {
        ticks: {
          beginAtZero: true,
          max: 10,
        },
      },
    };

    // Инициализация и отображение лепестковой диаграммы
    const ctx = document.getElementById("balance-wheel-chart").getContext("2d");
    new Chart(ctx, {
      type: "polarArea",
      data: data,
      options: options,
    });
  }
}

function removeBalanceWheel() {
  // Удаление графика, если он есть
  const existingChart = document.getElementById("balance-wheel-chart");
  if (existingChart) {
    existingChart.remove();
  }
}
