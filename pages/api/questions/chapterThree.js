import { chapterThree } from "../../../data/lifeChanger";

export default function handler(req, res) {
  res.status(200).json(chapterThree);
}
