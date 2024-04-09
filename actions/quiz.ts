"use server";

export const mockQuizData = async () => {
  const quiz = {
    id: "12331XwzqwdSSDW",
    time: 10, // 45 min
    data: [
      {
        id: "1",
        title: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
      },
      {
        id: "2",
        title: "Who wrote 'To Kill a Mockingbird'?",
        options: [
          "Harper Lee",
          "Ernest Hemingway",
          "F. Scott Fitzgerald",
          "Mark Twain",
        ],
      },
      {
        id: "3",
        title: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "NaCl"],
      },
      {
        id: "4",
        title: "What is the largest planet in our solar system?",
        options: ["Jupiter", "Saturn", "Neptune", "Mars"],
      },
      {
        id: "5",
        title: "Who painted the Mona Lisa?",
        options: [
          "Leonardo da Vinci",
          "Pablo Picasso",
          "Vincent van Gogh",
          "Michelangelo",
        ],
      },
      {
        id: "6",
        title: "What is the primary ingredient in guacamole?",
        options: ["Avocado", "Tomato", "Onion", "Lemon"],
      },
      {
        id: "7",
        title: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Mercury", "Uranus"],
      },
      {
        id: "8",
        title: "Who discovered penicillin?",
        options: [
          "Alexander Fleming",
          "Louis Pasteur",
          "Marie Curie",
          "Isaac Newton",
        ],
      },
      {
        id: "9",
        title: "What is the smallest prime number?",
        options: ["2", "1", "3", "5"],
      },
      {
        id: "10",
        title: "What is the longest river in the world?",
        options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
      },
    ],
  };

  return {
    success: "Data retrived successfully",
    quiz,
  };
};
