import { useTransaction } from "../../hooks/TransactionsContext";

import { Container } from "./styles";
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"


export function Summary() {
  const { transactions } = useTransaction()

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.withdraws += transaction.amount
      acc.total -= transaction.amount
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  return (
    <Container>
      <div>
        <header>
          Income
          <img src={incomeImg} alt="Income" />
        </header>
        <strong>
          {new Intl.NumberFormat('en-EN', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          Outcome
          <img src={outcomeImg} alt="Outcome" />
        </header>
        <strong>
          {new Intl.NumberFormat('en-EN', {
            style: 'currency',
            currency: 'USD'
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          Total
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
        {new Intl.NumberFormat('en-EN', {
          style: 'currency',
          currency: 'USD'
        }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}