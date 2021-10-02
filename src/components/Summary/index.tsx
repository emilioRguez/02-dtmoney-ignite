import { Container } from "./styles";
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          Income
          <img src={incomeImg} alt="Income" />
        </header>
        <strong>$8000</strong>
      </div>
      <div>
        <header>
          Outcome
          <img src={outcomeImg} alt="Outcome" />
        </header>
        <strong>- $2000</strong>
      </div>
      <div className="highlight-background">
        <header>
          Total
          <img src={totalImg} alt="Total" />
        </header>
        <strong>$6000</strong>
      </div>
    </Container>
  );
}