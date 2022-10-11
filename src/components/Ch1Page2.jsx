import Latex from "react-latex";
import HiddenText from "./HiddenText";

const Ch1Page2 = () => {
  return (
    <div>
      <p>
        <strong>Implications</strong>
      </p>
      <div>
        <p><em>(Section incomplete; please bear with me!)</em></p>
        <p>
          You'll be seeing a lot of these in Discrete Math, usually used in the
          context of proofs, so it's best to get used to these early on.
        </p>
        <p>
          <strong>Implication/Conditional Statement</strong>
        </p>
        <div>
          <p>
            Usually, these will be written as something like{" "}
            <Latex>$$\textit p \to \textit q$$</Latex>. This means{" "}
            <Latex>$$\textit p$$</Latex> implies <Latex>$$\textit q$$</Latex>.
            That might sound weird, and you probably might not understand it
            yet. What you really only need to know is this truth table for
            implications:
          </p>
          <table>
            <tr>
              <td>
                <Latex>$$\textit p$$</Latex>
              </td>
              <td>
                <Latex>$$\textit q$$</Latex>
              </td>
              <td>
                <Latex>$$\textit p \to \textit q$$</Latex>
              </td>
            </tr>
            <tr>
              <td style={{ color: "lightgreen" }}>T</td>
              <td style={{ color: "lightgreen" }}>T</td>
              <td style={{ color: "lightgreen" }}>T</td>
            </tr>
            <tr>
              <td style={{ color: "lightgreen" }}>T</td>
              <td style={{ color: "red" }}>F</td>
              <td style={{ color: "red" }}>F</td>
            </tr>
            <tr>
              <td style={{ color: "red" }}>F</td>
              <td style={{ color: "lightgreen" }}>T</td>
              <td style={{ color: "lightgreen" }}>T</td>
            </tr>
            <tr>
              <td style={{ color: "red" }}>F</td>
              <td style={{ color: "red" }}>F</td>
              <td style={{ color: "lightgreen" }}>T</td>
            </tr>
          </table>
          <p>
            To keep it simple, an implication is false <u>only if</u>{" "}
            <Latex>$$\textit q$$</Latex> is false.
          </p>
        </div>

        <p>
          <strong>Converses</strong>
        </p>
        <div>
          <p>
            On their own, these are basically just normal implications. The only
            "difference" is that given{" "}
            <Latex>$$\textit p \to \textit q$$</Latex>, that implication's
            converse would be <Latex>$$\textit q \to \textit p$$</Latex>.
          </p>
          <table>
            <tr>
              <td>
                <Latex>$$\textit p$$</Latex>
              </td>
              <td>
                <Latex>$$\textit q$$</Latex>
              </td>
              <td>
                <Latex>$$\textit q \to \textit p$$</Latex>
              </td>
            </tr>
            <tr>
              <td style={{ color: "lightgreen" }}>T</td>
              <td style={{ color: "lightgreen" }}>T</td>
              <td style={{ color: "lightgreen" }}>T</td>
            </tr>
            <tr>
              <td style={{ color: "lightgreen" }}>T</td>
              <td style={{ color: "red" }}>F</td>
              <td style={{ color: "lightgreen" }}>T</td>
            </tr>
            <tr>
              <td style={{ color: "red" }}>F</td>
              <td style={{ color: "lightgreen" }}>T</td>
              <td style={{ color: "red" }}>F</td>
            </tr>
            <tr>
              <td style={{ color: "red" }}>F</td>
              <td style={{ color: "red" }}>F</td>
              <td style={{ color: "lightgreen" }}>T</td>
            </tr>
          </table>
          <p>
            Thus, an implication is false <u>only if</u>{" "}
            <Latex>$$\textit q$$</Latex> is false.
          </p>
        </div>

        <p>
          <strong>Double Implication</strong>
        </p>
        <div>
          <p>
            Written as <Latex>$$\textit p \leftrightarrow \textit q$$</Latex>,
            this basically means "<Latex>$$\textit p$$</Latex> if and only if{" "}
            <Latex>$$\textit q$$</Latex>". Simply put, to make this double
            implication true, <Latex>$$\textit p \to \textit q$$</Latex> and{" "}
            <Latex>$$\textit q \to \textit p$$</Latex> <u>must both be true.</u>{" "}
            Otherwise, it is false.
          </p>
          <table>
            <tr>
              <td>
                <Latex>$$\textit p$$</Latex>
              </td>
              <td>
                <Latex>$$\textit q$$</Latex>
              </td>
              <td>
                <Latex>$$\textit p \to \textit p$$</Latex>
              </td>
              <td>
                <Latex>$$\textit q \to \textit p$$</Latex>
              </td>
              <td>
                <Latex>$$\textit p \leftrightarrow \textit q$$</Latex>
              </td>
            </tr>
            <tr>
              <td style={{ color: "lightgreen" }}>T</td>
              <td style={{ color: "lightgreen" }}>T</td>
              <td style={{ color: "lightgreen" }}>T</td>
              <td style={{ color: "lightgreen" }}>T</td>
              <td style={{ color: "lightgreen" }}>T</td>
            </tr>
            <tr>
              <td style={{ color: "lightgreen" }}>T</td>
              <td style={{ color: "red" }}>F</td>
              <td style={{ color: "red" }}>F</td>
              <td style={{ color: "lightgreen" }}>T</td>
              <td style={{ color: "red" }}>F</td>
            </tr>
            <tr>
              <td style={{ color: "red" }}>F</td>
              <td style={{ color: "lightgreen" }}>T</td>
              <td style={{ color: "lightgreen" }}>T</td>
              <td style={{ color: "red" }}>F</td>
              <td style={{ color: "red" }}>F</td>
            </tr>
            <tr>
              <td style={{ color: "red" }}>F</td>
              <td style={{ color: "red" }}>F</td>
              <td style={{ color: "lightgreen" }}>T</td>
              <td style={{ color: "lightgreen" }}>T</td>
              <td style={{ color: "lightgreen" }}>T</td>
            </tr>
          </table>
        </div>

        <p>
          <strong>Negating a Compound Statement</strong>
        </p>
        <div>
          <p>
            To negate <Latex>$$\textit p \wedge \textit q$$</Latex>, you must
            negate both <Latex>$$\textit p$$</Latex> and{" "}
            <Latex>$$\textit q$$</Latex>, as well as change the{" "}
            <Latex>$$\wedge$$</Latex> to a <Latex>$$\vee$$</Latex>. Effectively,
            you are turning the AND statement to an OR statement. Thus, <Latex>$$\neg(\textit p \wedge \textit q$$)</Latex> will be <Latex>$$(\neg\textit p) \vee (\neg\textit q)$$</Latex>
          </p>
          <p>
            Similarly, to negate <Latex>$$\textit p \vee \textit q$$</Latex>, you must
            negate both <Latex>$$\textit p$$</Latex> and{" "}
            <Latex>$$\textit q$$</Latex>, as well as change the{" "}
            <Latex>$$\vee$$</Latex> to a <Latex>$$\wedge$$</Latex>. Thus, <Latex>$$\neg(\textit p \vee \textit q$$)</Latex> will be <Latex>$$(\neg\textit p) \wedge (\neg\textit q)$$</Latex>
          </p>
          <p>And for the truth tables:</p>
          <table>
            <tr>
              <td><Latex>$$\textit p$$</Latex></td>
              <td><Latex>$$\textit q$$</Latex></td>
              <td><Latex>$$\textit p \wedge \textit q$$</Latex></td>
              <td><Latex>$$\neg \textit p$$</Latex></td>
              <td><Latex>$$\neg \textit q$$</Latex></td>
              <td><Latex>$$(\neg\textit p) \vee (\neg\textit q)$$</Latex></td>
            </tr>
            <tr>
              <td style={{color: 'lightgreen'}}>T</td>
              <td style={{color: 'lightgreen'}}>T</td>
              <td style={{color: 'lightgreen'}}>T</td>
              <td style={{color: 'red'}}>F</td>
              <td style={{color: 'red'}}>F</td>
              <td style={{color: 'red'}}>F</td>
            </tr>
            <tr>
              <td style={{color: 'lightgreen'}}>T</td>
              <td style={{color: 'red'}}>F</td>
              <td style={{color: 'red'}}>F</td>
              <td style={{color: 'red'}}>F</td>
              <td style={{color: 'lightgreen'}}>T</td>
              <td style={{color: 'lightgreen'}}>T</td>
            </tr>
            <tr>
              <td style={{color: 'red'}}>F</td>
              <td style={{color: 'lightgreen'}}>T</td>
              <td style={{color: 'red'}}>F</td>
              <td style={{color: 'lightgreen'}}>T</td>
              <td style={{color: 'red'}}>F</td>
              <td style={{color: 'lightgreen'}}>T</td>
            </tr>
            <tr>
              <td style={{color: 'red'}}>F</td>
              <td style={{color: 'red'}}>F</td>
              <td style={{color: 'red'}}>F</td>
              <td style={{color: 'lightgreen'}}>T</td>
              <td style={{color: 'lightgreen'}}>T</td>
              <td style={{color: 'lightgreen'}}>T</td>
            </tr>
          </table>
          <br />
          <table>
            <tr>
              <td><Latex>$$\textit p$$</Latex></td>
              <td><Latex>$$\textit q$$</Latex></td>
              <td><Latex>$$\textit p \vee \textit q$$</Latex></td>
              <td><Latex>$$\neg \textit p$$</Latex></td>
              <td><Latex>$$\neg \textit q$$</Latex></td>
              <td><Latex>$$(\neg\textit p) \wedge (\neg\textit q)$$</Latex></td>
            </tr>
            <tr>
              <td style={{color: 'lightgreen'}}>T</td>
              <td style={{color: 'lightgreen'}}>T</td>
              <td style={{color: 'lightgreen'}}>T</td>
              <td style={{color: 'red'}}>F</td>
              <td style={{color: 'red'}}>F</td>
              <td style={{color: 'red'}}>F</td>
            </tr>
            <tr>
              <td style={{color: 'lightgreen'}}>T</td>
              <td style={{color: 'red'}}>F</td>
              <td style={{color: 'lightgreen'}}>T</td>
              <td style={{color: 'red'}}>F</td>
              <td style={{color: 'lightgreen'}}>T</td>
              <td style={{color: 'red'}}>F</td>
            </tr>
            <tr>
              <td style={{color: 'red'}}>F</td>
              <td style={{color: 'lightgreen'}}>T</td>
              <td style={{color: 'lightgreen'}}>T</td>
              <td style={{color: 'lightgreen'}}>T</td>
              <td style={{color: 'red'}}>F</td>
              <td style={{color: 'red'}}>F</td>
            </tr>
            <tr>
              <td style={{color: 'red'}}>F</td>
              <td style={{color: 'red'}}>F</td>
              <td style={{color: 'red'}}>F</td>
              <td style={{color: 'lightgreen'}}>T</td>
              <td style={{color: 'lightgreen'}}>T</td>
              <td style={{color: 'lightgreen'}}>T</td>
            </tr>
          </table>
          <p>These are based on De Morgan's laws, which state that "the negation of a disjunction is the conjunction of the negations" and "the negation of a conjunction is the disjunction of the negations".</p>
        </div>
        <p><strong><em>More stuff coming soon...</em></strong></p>
      </div>
    </div>
  );
};

export default Ch1Page2;
