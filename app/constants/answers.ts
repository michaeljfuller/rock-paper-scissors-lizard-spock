export const answers = [
    'Scissors',
    'Paper',
    'Rock', 
    'Lizard', 
    'Spock'
] as const

export type Answer = typeof answers[number]

export type AnswerWinConditionsMap = {
    [answer in Answer]: Answer[]
}

export const answerWinConditionsMap: AnswerWinConditionsMap = {
    Rock: ["Scissors", "Lizard"],
    Paper: ["Rock", "Spock"],
    Scissors: ["Paper", "Lizard"],
    Lizard: ["Spock", "Paper"],
    Spock: ["Scissors", "Rock"],
}