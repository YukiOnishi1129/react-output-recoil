/**
 * useTodo
 *
 * @package hooks
 */
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  todoListState,
  todoUniqueIdState,
  todoSearchKeywordState,
} from "../store/atoms/todo.js";
import { searchedTodoListState } from "../store/selectors/todo";

/**
 * useTodo
 */
export const useTodo = () => {
  // eslint-disable-next-line no-unused-vars
  /* global state */
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [uniqueId, setUniqueId] = useRecoilState(todoUniqueIdState);
  const [searchKeyword, setSearchKeyword] = useRecoilState(
    todoSearchKeywordState
  );
  const showTodoList = useRecoilValue(searchedTodoListState);

  /* local state */
  /* add input title */
  const [addInputValue, setAddInputValue] = useState("");

  /* actions */
  /**
   * addInputValueの変更処理
   * @param {*} e
   */
  const onChangeAddInputValue = (e) => setAddInputValue(e.target.value);

  /**
   * Todo新規登録処理
   * @param {*} e
   */
  const handleAddTodo = (e) => {
    //  エンターキーが押された時にTodoを追加する
    if (e.key === "Enter" && addInputValue !== "") {
      const nextUniqueId = uniqueId + 1;
      // Todo追加処理
      setTodoList([
        ...todoList,
        {
          id: nextUniqueId,
          title: addInputValue,
        },
      ]);
      // 採番IDを更新
      setUniqueId(nextUniqueId);
      // todo追加後、入力値をリセット
      setAddInputValue("");
    }
  };

  /**
   * Todo削除処理
   * @param { number } targetId
   * @param { string }targetTitle
   */
  const handleDeleteTodo = (targetId, targetTitle) => {
    if (window.confirm(`「${targetTitle}」のtodoを削除しますか？`))
      setTodoList(todoList.filter((todo) => todo.id !== targetId));
  };

  /**
   * 検索キーワード更新処理
   * @param {*} e
   */
  const handleChangeSearchKeyword = (e) => setSearchKeyword(e.target.value);

  const states = {
    addInputValue,
    searchKeyword,
    showTodoList,
  };
  const actions = {
    onChangeAddInputValue,
    handleAddTodo,
    handleDeleteTodo,
    handleChangeSearchKeyword,
  };

  return [states, actions];
};
