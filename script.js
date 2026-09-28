const questions = [
    {
      subject: "Linguagens",
      question:
        "Em um texto argumentativo, a principal função de um argumento é:",
      options: [
        "Apresentar uma informação sem relação com o tema.",
        "Sustentar uma ideia ou ponto de vista apresentado.",
        "Substituir completamente a opinião do leitor.",
        "Criar apenas efeitos humorísticos."
      ],
      answer: 1,
      explanation:
        "O argumento é utilizado para sustentar, justificar ou defender uma ideia apresentada no texto."
    },
  
    {
      subject: "Matemática",
      question:
        "Uma camiseta custa R$ 100,00 e recebe um desconto de 20%. Qual será o preço final?",
      options: [
        "R$ 70,00",
        "R$ 75,00",
        "R$ 80,00",
        "R$ 90,00"
      ],
      answer: 2,
      explanation:
        "20% de R$ 100,00 corresponde a R$ 20,00. Portanto, R$ 100,00 − R$ 20,00 = R$ 80,00."
    },
  
    {
      subject: "Ciências Humanas",
      question:
        "A Revolução Industrial teve início na Inglaterra no século XVIII e foi marcada principalmente por:",
      options: [
        "Expansão da produção mecanizada.",
        "Fim imediato das cidades.",
        "Desaparecimento do comércio.",
        "Retorno ao trabalho exclusivamente artesanal."
      ],
      answer: 0,
      explanation:
        "A Revolução Industrial foi marcada pela mecanização da produção e pela transformação das relações de trabalho."
    },
  
    {
      subject: "Biologia",
      question:
        "Qual organela celular está diretamente relacionada à produção de energia na forma de ATP?",
      options: [
        "Ribossomo",
        "Lisossomo",
        "Mitocôndria",
        "Núcleo"
      ],
      answer: 2,
      explanation:
        "As mitocôndrias realizam etapas importantes da respiração celular e estão associadas à produção de ATP."
    },
  
    {
      subject: "Química",
      question:
        "Uma solução com pH menor que 7, em condições usuais, é classificada como:",
      options: [
        "Básica",
        "Neutra",
        "Ácida",
        "Saturada"
      ],
      answer: 2,
      explanation:
        "Em uma escala de pH usual, valores menores que 7 indicam soluções ácidas."
    },
  
    {
      subject: "Física",
      question:
        "Quando a velocidade de um corpo aumenta ao longo do tempo, podemos afirmar que ele possui:",
      options: [
        "Aceleração diferente de zero.",
        "Massa igual a zero.",
        "Energia sempre igual a zero.",
        "Velocidade necessariamente constante."
      ],
      answer: 0,
      explanation:
        "A aceleração representa a variação da velocidade em relação ao tempo."
    },
  
    {
      subject: "Geografia",
      question:
        "O processo de crescimento da população urbana e expansão das cidades é chamado de:",
      options: [
        "Urbanização",
        "Desertificação",
        "Erosão",
        "Intemperismo"
      ],
      answer: 0,
      explanation:
        "Urbanização é o processo de crescimento da população urbana e da expansão das cidades."
    },
  
    {
      subject: "História",
      question:
        "A Constituição Federal atualmente vigente no Brasil foi promulgada em:",
      options: [
        "1964",
        "1979",
        "1988",
        "1994"
      ],
      answer: 2,
      explanation:
        "A Constituição da República Federativa do Brasil foi promulgada em 5 de outubro de 1988."
    },
  
    {
      subject: "Português",
      question:
        "Em uma frase, o sujeito é o termo que normalmente:",
      options: [
        "Indica a ação ou estado expresso pelo verbo.",
        "Indica de quem ou de que se fala na oração.",
        "Sempre aparece depois do verbo.",
        "Nunca pode ser oculto."
      ],
      answer: 1,
      explanation:
        "O sujeito é o termo sobre o qual se declara algo na oração. Ele pode ser simples, composto, oculto ou indeterminado."
    },
  
    {
      subject: "Matemática",
      question:
        "Se 3x + 6 = 21, qual é o valor de x?",
      options: [
        "3",
        "5",
        "7",
        "9"
      ],
      answer: 1,
      explanation:
        "3x + 6 = 21. Subtraindo 6 dos dois lados, temos 3x = 15. Logo, x = 5."
    },
  
    {
      subject: "Física",
      question:
        "A unidade de medida de força no Sistema Internacional é:",
      options: [
        "Joule",
        "Watt",
        "Newton",
        "Pascal"
      ],
      answer: 2,
      explanation:
        "A força é medida em newtons (N) no Sistema Internacional de Unidades."
    },
  
    {
      subject: "Biologia",
      question:
        "A fotossíntese realizada por plantas utiliza principalmente:",
      options: [
        "Oxigênio e glicose.",
        "Gás carbônico, água e luz.",
        "Nitrogênio e proteínas.",
        "ATP e oxigênio."
      ],
      answer: 1,
      explanation:
        "Na fotossíntese, plantas utilizam água e gás carbônico, com energia luminosa, para produzir matéria orgânica e liberar oxigênio."
    }
  ];
  
  const startScreen = document.getElementById("startScreen");
  const quizScreen = document.getElementById("quizScreen");
  const resultScreen = document.getElementById("resultScreen");
  
  const startBtn = document.getElementById("startBtn");
  const nextBtn = document.getElementById("nextBtn");
  const restartBtn = document.getElementById("restartBtn");
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const subjectElement = document.getElementById("subject");
  
  const questionNumber = document.getElementById("questionNumber");
  const scoreElement = document.getElementById("score");
  const progressBar = document.getElementById("progressBar");
  
  const feedbackElement = document.getElementById("feedback");
  const timerElement = document.getElementById("timer");
  
  const finalScore = document.getElementById("finalScore");
  const correctAnswers = document.getElementById("correctAnswers");
  const wrongAnswers = document.getElementById("wrongAnswers");
  const totalQuestions = document.getElementById("totalQuestions");
  const resultMessage = document.getElementById("resultMessage");
  const reviewElement = document.getElementById("review");
  
  const themeBtn = document.getElementById("themeBtn");
  
  let quizQuestions = [];
  let currentQuestion = 0;
  let score = 0;
  let userAnswers = [];
  
  let timer = null;
  let remainingTime = 0;
  
  
  // -------------------------
  // EMBARALHAR
  // -------------------------
  
  function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }
  
  
  // -------------------------
  // INICIAR QUIZ
  // -------------------------
  
  startBtn.addEventListener("click", () => {
  
    const count = Number(
      document.getElementById("questionCount").value
    );
  
    const time = Number(
      document.getElementById("timeLimit").value
    );
  
    quizQuestions = shuffle(questions).slice(
      0,
      Math.min(count, questions.length)
    );
  
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
  
    remainingTime = time;
  
    startScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
  
    if (time > 0) {
      startTimer();
    } else {
      timerElement.textContent = "⏱️ Sem limite";
    }
  
    showQuestion();
  });
  
  
  // -------------------------
  // MOSTRAR QUESTÃO
  // -------------------------
  
  function showQuestion() {
  
    const q = quizQuestions[currentQuestion];
  
    questionElement.textContent = q.question;
    subjectElement.textContent = q.subject;
  
    questionNumber.textContent =
      `Questão ${currentQuestion + 1} de ${quizQuestions.length}`;
  
    scoreElement.textContent =
      `${score} acertos`;
  
    const progress =
      (currentQuestion / quizQuestions.length) * 100;
  
    progressBar.style.width = `${progress}%`;
  
    optionsElement.innerHTML = "";
  
    feedbackElement.classList.add("hidden");
    nextBtn.classList.add("hidden");
  
    q.options.forEach((option, index) => {
  
      const button = document.createElement("button");
  
      button.className = "option";
      button.textContent =
        `${String.fromCharCode(65 + index)}) ${option}`;
  
      button.addEventListener("click", () => {
        selectAnswer(index);
      });
  
      optionsElement.appendChild(button);
    });
  }
  
  
  // -------------------------
  // RESPONDER
  // -------------------------
  
  function selectAnswer(selected) {
  
    const q = quizQuestions[currentQuestion];
  
    const buttons =
      document.querySelectorAll(".option");
  
    buttons.forEach(button => {
      button.disabled = true;
    });
  
    userAnswers.push({
      question: q.question,
      selected,
      correct: q.answer
    });
  
    if (selected === q.answer) {
  
      score++;
  
      buttons[selected].classList.add("correct");
  
      feedbackElement.innerHTML =
        `<strong>✅ Correto!</strong><br>${q.explanation}`;
  
    } else {
  
      buttons[selected].classList.add("wrong");
      buttons[q.answer].classList.add("correct");
  
      feedbackElement.innerHTML =
        `<strong>❌ Resposta incorreta.</strong><br>${q.explanation}`;
    }
  
    feedbackElement.classList.remove("hidden");
  
    scoreElement.textContent =
      `${score} acertos`;
  
    nextBtn.classList.remove("hidden");
  }
  
  
  // -------------------------
  // PRÓXIMA
  // -------------------------
  
  nextBtn.addEventListener("click", () => {
  
    currentQuestion++;
  
    if (currentQuestion >= quizQuestions.length) {
      finishQuiz();
      return;
    }
  
    showQuestion();
  });
  
  
  // -------------------------
  // FINALIZAR
  // -------------------------
  
  function finishQuiz() {
  
    clearInterval(timer);
  
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
  
    const total = quizQuestions.length;
  
    const percentage =
      Math.round((score / total) * 100);
  
    finalScore.textContent =
      `${percentage}%`;
  
    correctAnswers.textContent =
      score;
  
    wrongAnswers.textContent =
      total - score;
  
    totalQuestions.textContent =
      total;
  
    if (percentage >= 80) {
  
      resultMessage.textContent =
        "Excelente desempenho! Continue praticando para manter seu ritmo.";
  
    } else if (percentage >= 60) {
  
      resultMessage.textContent =
        "Bom desempenho! Revise os conteúdos em que teve dificuldade.";
  
    } else {
  
      resultMessage.textContent =
        "Continue estudando. A prática constante ajuda a melhorar bastante.";
  
    }
  
    createReview();
  }
  
  
  // -------------------------
  // REVISÃO
  // -------------------------
  
  function createReview() {
  
    reviewElement.innerHTML =
      "<h3>📋 Revisão das questões</h3>";
  
    userAnswers.forEach((answer, index) => {
  
      const q = quizQuestions[index];
  
      const item = document.createElement("div");
  
      const correct =
        answer.selected === answer.correct;
  
      item.className =
        `review-item ${correct ? "correct" : "wrong"}`;
  
      item.innerHTML = `
        <strong>
          ${correct ? "✅" : "❌"} Questão ${index + 1}
        </strong>
  
        <p>${q.question}</p>
  
        <small>
          Sua resposta:
          ${q.options[answer.selected]}
        </small>
  
        <br>
  
        <small>
          Resposta correta:
          ${q.options[q.answer]}
        </small>
      `;
  
      reviewElement.appendChild(item);
    });
  }
  
  
  // -------------------------
  // CRONÔMETRO
  // -------------------------
  
  function startTimer() {
  
    updateTimer();
  
    timer = setInterval(() => {
  
      remainingTime--;
  
      updateTimer();
  
      if (remainingTime <= 0) {
  
        clearInterval(timer);
  
        alert("⏰ O tempo acabou!");
  
        finishQuiz();
      }
  
    }, 1000);
  }
  
  
  function updateTimer() {
  
    const minutes =
      Math.floor(remainingTime / 60);
  
    const seconds =
      remainingTime % 60;
  
    timerElement.textContent =
      `⏱️ ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  
    if (remainingTime <= 60) {
      timerElement.classList.add("warning");
    } else {
      timerElement.classList.remove("warning");
    }
  }
  
  
  // -------------------------
  // REINICIAR
  // -------------------------
  
  restartBtn.addEventListener("click", () => {
  
    resultScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
  
    progressBar.style.width = "0%";
  });
  
  
  // -------------------------
  // MODO ESCURO
  // -------------------------
  
  themeBtn.addEventListener("click", () => {
  
    document.body.classList.toggle("dark");
  
    const dark =
      document.body.classList.contains("dark");
  
    themeBtn.textContent =
      dark ? "☀️" : "🌙";
  
    localStorage.setItem(
      "darkMode",
      dark
    );
  });
  
  
  // Recuperar preferência
  
  if (localStorage.getItem("darkMode") === "true") {
  
    document.body.classList.add("dark");
  
    themeBtn.textContent = "☀️";
  }