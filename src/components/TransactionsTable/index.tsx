import { useEffect } from "react";
import { Container } from "./styles"

export function TransactionsTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data))
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