import Modal from 'react-modal';

import { Container, RadioButton, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void
}

export function NewTransactionModal( { isOpen, onRequestClose }: NewTransactionModalProps ) {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    const data = {
      title,
      price,
      category,
      type
    }

    api.post('/transactions', data)
  }

  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
        <button 
          type="button" 
          onClick={onRequestClose}
          className="react-modal-close"> 
          <img src={closeImg} alt="Close modal" />
        </button>
        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Record transaction</h2>

          <input 
            placeholder="Title"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          
          <input 
            type="number" 
            placeholder="Price"
            value={price}
            onChange={event => setPrice(Number(event.target.value))}
          />

          <TransactionTypeContainer>
            <RadioButton
              type="button"
              onClick={() => { setType('deposit'); }}
              isActive={type === 'deposit'}
              colorActive="green"
            >
              <img src={incomeImg} alt="in" />
              <span>In</span>
            </RadioButton>

            <RadioButton
              type="button"
              onClick={() => { setType('withdraw'); }}
              isActive={type === 'withdraw'}
              colorActive="red"
            >
              <img src={outcomeImg} alt="out" />
              <span>Out</span>
            </RadioButton>
          </TransactionTypeContainer>
          
          <input 
            placeholder="Category"
            value={category}
            onChange={event => setCategory(event.target.value)}
          />
          
          <button type="submit">
            Register
          </button>
        </Container>
    </Modal>
  );
}