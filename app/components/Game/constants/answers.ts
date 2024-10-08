export const answers = [
    'Scissors',
    'Paper',
    'Rock', 
    'Lizard', 
    'Spock'
] as const

export type Answer = typeof answers[number]

export type AnswerToStrengthsMap = {
    [answer in Answer]: Answer[]
}

export const answerToStrengthsMap: AnswerToStrengthsMap = {
    Rock: ["Scissors", "Lizard"],
    Paper: ["Rock", "Spock"],
    Scissors: ["Paper", "Lizard"],
    Lizard: ["Spock", "Paper"],
    Spock: ["Scissors", "Rock"],
}