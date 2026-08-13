import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const demoQuestions = [
  {
    id: 1,
    question: "Which language is primarily used to build React applications?",
    options: ["Python", "JavaScript", "SQL", "C++"],
    answer: "JavaScript"
  },
  {
    id: 2,
    question: "Which hook is commonly used to manage state in a React component?",
    options: ["useState", "useRoute", "useStyle", "usePage"],
    answer: "useState"
  },
  {
    id: 3,
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Simple Question Language",
      "System Query Logic",
      "Structured Question List"
    ],
    answer: "Structured Query Language"
  },
  {
    id: 4,
    question: "Which of the following is a JavaScript framework/library?",
    options: ["React", "MySQL", "MongoDB", "PostgreSQL"],
    answer: "React"
  },
  {
    id: 5,
    question: "Which HTML element is normally used for the largest heading?",
    options: ["<h6>", "<head>", "<h1>", "<heading>"],
    answer: "<h1>"
  }
];

function App() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const question = demoQuestions[current];

  const selectAnswer = (option) => {
    setAnswers((prev) => ({
      ...prev,
      [question.id]: option
    }));
  };

  const nextQuestion = () => {
    if (current < demoQuestions.length - 1) {
      setCurrent((prev) => prev + 1);
    }
  };

  const previousQuestion = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  const submitTest = () => {
    setSubmitted(true);
  };

  const restartTest = () => {
    setStarted(false);
    setCurrent(0);
    setAnswers({});
    setSubmitted(false);
  };

  const score = demoQuestions.reduce(
    (total, q) => total + (answers[q.id] === q.answer ? 1 : 0),
    0
  );

  if (!started) {
    return (
      <div className="page">
        <div className="card welcome-card">
          <div className="logo">MCQ</div>
          <h1>MCQ Test</h1>
          <p className="subtitle">
            Standalone demo frontend for the MCQ assessment module
          </p>

          <div className="info-grid">
            <div>
              <strong>{demoQuestions.length}</strong>
              <span>Questions</span>
            </div>
            <div>
              <strong>Demo</strong>
              <span>Question Data</span>
            </div>
            <div>
              <strong>Frontend</strong>
              <span>Only</span>
            </div>
          </div>

          <button className="primary-btn" onClick={() => setStarted(true)}>
            Start Test
          </button>

          <p className="note">
            Backend/API integration is intentionally not included.
          </p>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="page">
        <div className="card result-card">
          <div className="result-icon">✓</div>
          <h1>Test Completed</h1>
          <p className="score">
            {score} <span>/ {demoQuestions.length}</span>
          </p>
          <p className="subtitle">Your demo test score</p>

          <div className="summary">
            <div>
              <span>Correct</span>
              <strong>{score}</strong>
            </div>
            <div>
              <span>Incorrect</span>
              <strong>{demoQuestions.length - score}</strong>
            </div>
            <div>
              <span>Answered</span>
              <strong>{Object.keys(answers).length}</strong>
            </div>
          </div>

          <button className="primary-btn" onClick={restartTest}>
            Restart Test
          </button>
        </div>
      </div>
    );
  }

  const progress = ((current + 1) / demoQuestions.length) * 100;

  return (
    <div className="page">
      <div className="quiz-container">
        <header className="quiz-header">
          <div>
            <div className="small-label">MCQ ASSESSMENT</div>
            <h1>Demo Test</h1>
          </div>
          <div className="question-count">
            {current + 1} / {demoQuestions.length}
          </div>
        </header>

        <div className="progress-track">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>

        <main className="card question-card">
          <div className="question-number">Question {current + 1}</div>
          <h2>{question.question}</h2>

          <div className="options">
            {question.options.map((option, index) => {
              const selected = answers[question.id] === option;

              return (
                <button
                  key={option}
                  className={`option ${selected ? "selected" : ""}`}
                  onClick={() => selectAnswer(option)}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
                </button>
              );
            })}
          </div>

          <div className="actions">
            <button
              className="secondary-btn"
              onClick={previousQuestion}
              disabled={current === 0}
            >
              Previous
            </button>

            {current === demoQuestions.length - 1 ? (
              <button className="submit-btn" onClick={submitTest}>
                Submit Test
              </button>
            ) : (
              <button className="primary-btn" onClick={nextQuestion}>
                Next
              </button>
            )}
          </div>
        </main>

        <p className="footer-note">
          Standalone frontend • Demo data only • Ready for integration
        </p>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);