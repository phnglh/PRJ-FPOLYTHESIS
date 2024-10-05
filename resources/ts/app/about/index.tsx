import { useEffect, useState } from 'react';
import { cn } from '../../lib/cn';

export function AboutPage() {
  const [value, setValue] = useState(false);

  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <div className={cn('flex flex-col')}>
      <p className=''>Contact page content</p>
      <button
        className={cn(
          'border-collapse border px-4 py-2 rounded-lg hover:bg-red-400 hover:text-white',
        )}
        onClick={() => setValue((pre) => !pre)}
      >
        Collection
      </button>
    </div>
  );
}
