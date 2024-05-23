import { createRoot } from "react-dom/client";
import { createElement } from "react";

const root = createRoot(document.getElementById("root"));

const App = ({children}) => {
    return createElement("h1", {}, children)
}

const Test = () => {
    return <div>Test</div>
}

root.render(createElement(App, {
    children: createElement(Test)
}))
