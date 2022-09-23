import React, {SVGProps} from 'react'

interface Props{
    Icon: (props: SVGProps<SVGAElement>) => JSX.Element
    title: string
}

function SidebarRow({Icon, title}:Props) {
  return (
    <div 
        className='group flex items-center max-w-fit cursor-pointer space-x-2 rounded-full
            px-4 py-3 transition-all duration-200 hover:bg-gray-100'
    >
      <Icon fontSize={30}/>
      <p 
        className='hidden group-hover:text-twitter md:inline-flex
          font-normal lg: text-xl
        '>
        {title}
      </p>
    </div>
  )
}

export default SidebarRow
