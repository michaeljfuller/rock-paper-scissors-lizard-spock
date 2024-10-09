import type { MetaFunction } from "@remix-run/node";
import css from '../styles/index.module.scss'
import Game from "~/components/game/Game";

export const meta: MetaFunction = () => {
  return [
    { title: "Frontend Mentor | Rock, Paper, Scissors" },
    { name: "description", content: "Challenge submission for https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Game />

      <div className={css.footer}>
        <div className={css.attribution}>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://github.com/michaeljfuller">Michael Fuller</a>.
        </div>
      </div>
    </div>
  );
}
