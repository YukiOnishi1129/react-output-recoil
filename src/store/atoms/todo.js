/**
 * todo atom state
 *
 * @package atoms
 */
import { atom } from "recoil";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../../constants/data.js";

/**
 * 検索前のtodo list
 * @type {RecoilState<[{id: number, title: string},{id: number, title: string}]>}
 */
export const todoListState = atom({
  key: "todoListState",
  default: INIT_TODO_LIST,
});

/**
 * todoの採番ID
 * @type {RecoilState<number>}
 */
export const todoUniqueIdState = atom({
  key: "todoUniqueIdState",
  default: INIT_UNIQUE_ID,
});

/**
 * 検索キーワード
 * @type {RecoilState<string>}
 */
export const todoSearchKeywordState = atom({
  key: "todoSearchKeywordState",
  default: "",
});
