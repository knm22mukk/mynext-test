type Props = {
  content: string;
};

export default function TestComponent({ content }: Props) {
  return (
    <div className='container border-blue-500 p-10 bg-gray-50'>
      <h4 className='text-blue-600'>{content}</h4>
    </div>
  );
}
