/**
 * todo selectors state
 *
 * @package selectors
 */
import { selector } from "recoil";
import { todoListState, todoSearchKeywordState } from "../atoms/todo";

/**
 * 検索後のtodo list
 * @type {RecoilValueReadOnly<({id: number, title: string}|{id: number, title: string})[]>}
 */
export const searchedTodoListState = selector({
  key: "searchedTodoListState",
  get: ({ get }) => {
    // 検索キーワードに部分一致したTodoだけを一覧表示する
    const regexp = new RegExp("^" + get(todoSearchKeywordState), "i");
    return get(todoListState).filter((todo) => todo.title.match(regexp));
  },
});
