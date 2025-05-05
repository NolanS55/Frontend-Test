import Todo from "@/test/test";
import "./home.css";

export default function Home() {
    const email =
        "mailto: \u006d\u007a\u0068\u0040\u006c\u0065\u0074\u0073\u0073\u0074\u006f\u0070\u0061\u0069\u0064\u0073\u002e\u006f\u0072\u0067";
    return (
        <main>
            <div className="header-container">
                <h1>Test - React + NextJS</h1>
                <h4>
                    This test aims to test your skill(s) on ReactJS and NextJS.
                    The test is used for and only for LetsStopAIDS. Please do
                    not share this with anyone else.
                </h4>
                <div className="steps">
                    <h3>Steps:</h3>
                    <ol>
                        <li>
                            Code Location: Please complete your answer in{
                                " "


                            }
                            <code>modules/test</code>. You may start your answer
                            after <code>Your Test Starts Here</code>
                        </li>
                        <li>
                            Component Requirement: This component is essentially
                            a To-Do List, it should include:
                            <ul>
                                <li>
                                    Input box for users to enter new to do item.
                                </li>
                                <li>A button to add the item to the list.</li>
                                <li>
                                    Display all the to do items underneath the
                                    input area.
                                </li>
                                <li>
                                    Every item should have its own Delete
                                    button. Once clicked, only the corresponding
                                    item will be deleted.
                                </li>
                            </ul>
                        </li>
                        <li>
                            State Management: Please use the React Hook{" "}
                            <code>useState</code> to manage the To-Do List.
                        </li>
                        <li>
                            No Storage Required: The list is not required to be
                            saved. For example, if the user refresh the page,
                            the list will be reset.
                        </li>
                        <li>
                            Screen Compatible: Please make sure that it works on
                            both desktop view (768px plus) and mobile view
                            (768px less)
                        </li>
                        <li>
                            Styling (bonus): if you would like to add styling,
                            please add them in{" "}
                            <code>modules/test/test.module.css</code>
                        </li>
                        <li>
                            Error Handling (bonus): Report the error when the
                            input is empty.
                        </li>
                        <li>Edit (bonus): Allow user to edit the item(s)</li>
                    </ol>
                    <p>
                        If you have any questions, please email{" "}
                        <a
                            className="underline"
                            href={email}
                            id="questionEmail"
                            target="_blank">
                            mzh&#64;
                            <b className="hidden">
                                hiddenToPreventFromCrawlers
                            </b>
                            letsstopaids
                            <b className="hidden">
                                hiddenToPreventFromCrawlers
                            </b>
                            &#46;org
                        </a>
                    </p>
                    <p>Note 1: Please add proper comments in your code.</p>
                    <p>
                        Note 2:🚫Do NOT use external libraries to complete it.
                    </p>
                </div>
            </div>
            <Todo />
        </main>
    );
}
