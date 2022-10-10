import Latex from "react-latex";

const Page1 = () => {
  return (
    <div>
      <p>
        <strong>Basic Statements</strong>
      </p>
      <div>
        <p>
          One of the overarching and major parts of Discrete Math is{" "}
          <strong>proofs.</strong> In many problems, you may be asked to find a
          way to verify that a certain statement is true, or if you don't know
          whether it's true or not, prove that a statement actually is true. But
          how do we even go about a proof?
        </p>
        <p>
          To start, we'll need to know what a statement is, and look at some
          very basic examples. A <strong>statement</strong> is{" "}
          <u>
            an assertive sentence that is either true or false, but not both.
          </u>{" "}
          They can also be called <strong>propositions</strong>, but are
          generally referred to as just statements.
        </p>
        <p>
          <strong>Example:</strong> Which of these are statements?
        </p>
        <ul>
          <li>
            <p>How are you holding up? Because I'm a potato.</p>
          </li>
          <li>
            <p>8 is an even number.</p>
          </li>
          <li>
            <p>2 + 2 = 10</p>
          </li>
          <li>
            <p>
              <Latex>$$a \leq b$$</Latex>
            </p>
          </li>
        </ul>
        <p>
          <strong>Solutions:</strong>
        </p>
        <ul>
          <li>
            <p>
              In a normal conversation, the answer to this will never just be
              "true" or "false", your answer would probably be more detailed
              than those. <em>This is NOT a statement.</em>
            </p>
          </li>
          <li>
            <p>
              8 is even, of course, so this will always be true.{" "}
              <em>This is a statement.</em>
            </p>
          </li>
          <li>
            <p>
              This is false as 2 + 2 = 4, not 10. <em>This is a statement.</em>
            </p>
          </li>
          <li>
            <p>
              We don't know what x and y are, so this could either be true or
              false depending on what values we give them.{" "}
              <em>This is NOT a statement.</em>
            </p>
          </li>
        </ul>
      </div>

      <p>
        <strong>Compound Statements</strong>
      </p>
      <div>
        <p>
          These are statements formed from combining two other statements (in
          varying ways). Generally, to evaluate compound statements, one would
          evaluate the two statements in the problem, and based on the truth
          values of both statements, evaluate the compound statement.{" "}
          <strong>Truth tables</strong> are often used for these situations;
          more on that in a bit.
        </p>
        <p>
          For the sake of these examples, assume <Latex>$$\textit p$$</Latex>{" "}
          and <Latex>$$\textit q$$</Latex> are two different statements.
        </p>
        <p>We'll start with the first type of compound statement:</p>
        <p>
          <Latex>$$\textit p \wedge \textit q$$</Latex>
        </p>
        <div>
          <p>
            You might be thinking, "that's a weird symbol! What does that mean?"
          </p>
          <p>
            This is an example of a <b>conjunction (AND)</b>. This is read as "
            <Latex>$$\textit p$$</Latex> AND <Latex>$$\textit q$$</Latex>". In
            other words, this compound statement is <u>true</u> if{" "}
            <Latex>$$\textit p$$</Latex> and <Latex>$$\textit q$$</Latex> are
            both <u>true</u>. Let's take a look at a quick example:
          </p>
          <p>
            <b>Example:</b> Let <Latex>$$\textit p$$</Latex> be "I have 1 dog",
            and <Latex>$$\textit q$$</Latex> be "I have 3 cats". Which of these
            statements are true?
          </p>
          <ul>
            <li>
              <p>I have 1 dog and 3 cats.</p>
            </li>
            <li>
              <p>I have 1 dog and no cats.</p>
            </li>
            <li>
              <p>I have 2 dogs and 3 cats.</p>
            </li>
            <li>
              <p>I have 2 dogs and 2 cats.</p>
            </li>
          </ul>
          <p>
            <strong>Solutions:</strong>
          </p>
          <ul>
            <li>
              <p>
                This is the exact same as the original statement, so this is <u>true</u>.
              </p>
            </li>
            <li>
              <p>
                Since I don't have any cats, let alone three of them (<Latex>$$0 \lt 3$$</Latex>), this is <u>false</u>.
              </p>
            </li>
            <li>
              <p>
                Since I have don't have just one dog (<Latex>$$2 \gt 1$$</Latex>), this is <u>false</u>.
              </p>
            </li>
            <li>
              <p>
                I don't have just one dog and exactly three cats; this is <u>false</u>.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page1;
