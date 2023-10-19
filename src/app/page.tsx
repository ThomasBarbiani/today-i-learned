import Content from '@/components/Content'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <div 
      className='
        flex 
        flex-col
        gap-y-12
        h-full
      '
    >
      <Navbar />
      <div className='flex gap-x-12'>
        <Sidebar />
        <Content />
      </div>
    </div>
  )
}
