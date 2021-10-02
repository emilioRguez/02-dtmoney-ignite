import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles"

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  },[]);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Website development</td>
            <td className="deposit">$ 2000</td>
            <td>Development</td>
            <td>11/20/2021</td>
          </tr>

          <tr>
            <td>Morgage</td>
            <td className="withdraw">-$ 800</td>
            <td>House</td>
            <td>11/1/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}