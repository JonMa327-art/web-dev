import React from "react";
import Classes from "./classes";
import { Link } from "react-router-dom";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/TodoList";
import ReduxExamples from "./redux-examples/index.js";

const Labs = () => {
    return (
        <>
            <h1>Labs</h1>
            <ReduxExamples />
            <TodoList />
            <ConditionalOutput />
            <Styles />
            <Classes />
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter">
                Tuiter
            </Link>
        </>
    )
};

export default Labs;
