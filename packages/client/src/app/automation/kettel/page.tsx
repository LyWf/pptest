import { Suspense } from 'react';

import { Container, Skeleton } from '@mui/material';
import { Form } from './Form';

export default function KettelPage() {
  return (
    <Container>
      <h1 className="mb-6 text-4xl font-bold">Обработка. Кеттел</h1>
      <Suspense
        fallback={
          <div className="space-y-4 md:w-1/2">
            <Skeleton className="min-h-32 w-full" />
            <Skeleton className="min-h-10" />
          </div>
        }
      >
        <Form />
      </Suspense>
    </Container>
  );
}
