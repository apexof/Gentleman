import "./App.scss";
import styled from "styled-components";

const Div = styled.div`
    background-color: #973d3d;
    color: #fff;
    font-size: 30px;
`;
function App() {
    console.log("object");
    return (
        <div>
            <Div>styled-components</Div>
            <div cx="css-modules">
                Css modules
            </div>
        </div>
    );
}
export default App;
