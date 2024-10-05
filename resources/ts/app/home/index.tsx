import { cn } from '@/lib/cn';
import { Button } from '@mui/material';

export function HomePage() {
  return (
    <>
      <div className=''>
        <h1>home-page content</h1>
        <Button
          variant='contained'
          className={cn('bg-red-500 hover:bg-blue-700 text-white')}
        >
          Material-UI Button
        </Button>
      </div>
    </>
  );
}
