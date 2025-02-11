'use client';

import { type FormEventHandler, useState } from 'react';

import { Alert, AlertTitle, Button, Snackbar, TextField } from '@mui/material';
import interpretation from './interpretation.json';

export function Form() {
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const input = formData.get('stens');

    if (!input || typeof input !== 'string') {
      return setError('Неверный формат данных');
    }

    const stens = input
      .trim()
      .split(/\s+/)
      .map((str) => Number.parseFloat(str.trim()));
    const isValid = stens.every((num) => Number.isFinite(num) && num > 0 && num < 11);

    if (!isValid) {
      return setError('Одно или несклько значений не являются числом от 1 до 10');
    }

    const values = stens.reduce((acc, sten, idx) => {
      if (sten < 4) {
        acc.push(interpretation[idx][0]);
      } else if (sten >= 7) {
        acc.push(interpretation[idx][1]);
      }

      return acc;
    }, [] as string[]);

    setResult(values.join(', '));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:w-1/2">
      <TextField
        name="stens"
        required
        className="min-h-32"
        minRows={6}
        fullWidth
        multiline
        label="Значения"
        focused
      />
      <Button type="submit">Расчитать</Button>
      {result ? (
        <Alert severity="info">
          <AlertTitle>Заключение по шестнадцати-факторному тесту Кеттела</AlertTitle>
          Для обследуемого свойственно:
          <br />
          <p>{result}</p>
        </Alert>
      ) : null}
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError('')}
        message={error}
      />
    </form>
  );
}
