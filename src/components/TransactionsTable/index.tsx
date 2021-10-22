import { useTransaction } from "../../hooks/TransactionsContext";
import { Container } from "./styles"

export function TransactionsTable() {
  const { transactions } = useTransaction()

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('en-EN', {
                  style: 'currency',
                  currency: 'USD'
                }).format(transaction.amount)}</td>
              <td>{transaction.category}</td>
              <td>{new Intl.DateTimeFormat('en-EN')
              .format(new Date(transaction.createdAt))}</td>
            </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
}