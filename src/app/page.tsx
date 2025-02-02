import TestComponent from '@/components/TestComponent';

export default function Home() {
  return (
    <div>
      <h1 className='text-red-500 text-4xl font-extrabold p-20'>
        next.jsテスト
      </h1>
      <TestComponent content='componentを表示してみる' />
    </div>
  );
}
