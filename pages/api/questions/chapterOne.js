import { chapterOne } from "../../../data/lifeChanger";

export default function handler(req, res) {
  res.status(200).json(chapterOne);
}
