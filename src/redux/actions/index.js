import { UPDATE_WORD } from "../types";

export function updateWord(text) {
  return { type: UPDATE_WORD, payload: text };
}
