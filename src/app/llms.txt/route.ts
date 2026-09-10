import { SITE_URL, qaCases, qaInventory, skillCards, socialLinks } from "@/data/site";

const socialLines = Object.entries(socialLinks)
  .filter(([, url]) => Boolean(url))
  .map(([name, url]) => `- ${name[0].toUpperCase()}${name.slice(1)}: ${url}`);

const body = [
  "# Душные идеи — QA-портфолио Ивана",
  "",
  "> QA-портфолио Ивана (QA-инженер, 4+ года опыта): ручное тестирование, автотесты, mobile QA, API-тестирование, регресс и AI-assisted QA. Подача мемная, инженерия — взрослая.",
  "",
  "## Сайт",
  `- [Главная](${SITE_URL}/): навыки, кейсы, контакты.`,
  "",
  "## Навыки",
  ...skillCards.map((skill) => `- ${skill.title}: ${skill.tools.join(", ")}.`),
  "",
  "## QA inventory",
  qaInventory.join(", "),
  "",
  "## Кейсы",
  ...qaCases.map(
    (qaCase) => `- ${qaCase.title} (${qaCase.id}): ${qaCase.context} ${qaCase.action} ${qaCase.result}`,
  ),
  "",
  "## Контакты",
  ...socialLines,
];

export const dynamic = "force-static";

export function GET() {
  return new Response(`${body.join("\n")}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
