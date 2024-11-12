import Image from 'next/image'
import React from 'react'

export default function MenuTitle() {
  return (
    <div className='flex flex-col gap-4'>
      <Image src={'https://www.aitsl.edu.au/images/default-source/corporate-images/aitsl-logo-white-(inline)-400.png'} alt='logo' width={100} height={90}/>
    <h4 className='flex items-center'>
       Ite Dashboard
    </h4>
    </div>
  )
}
