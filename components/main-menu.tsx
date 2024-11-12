import React from 'react'
import MenuTitle from './menu-title'
import MenuItem from './menu-item'

export default function MainMenu() {
  return (
    <div className='bg-cyan-600 overflow-auto p-4'>
      <div className="border-b dark:border-b-zinc-300 pb-4">

      <MenuTitle />
      </div>
      <div className='py-4'>
        <MenuItem href='/dashboard'>Dashboard</MenuItem>
        <MenuItem href='/dashboard/program'>ITE program</MenuItem>
        <MenuItem href='/dashboard/teacher'>Teacher Workforce</MenuItem>
        <MenuItem href='/dashboard/guidelines'>Guidelines</MenuItem>
        <MenuItem href='/dashboard/pipeline'>ITE pipeline</MenuItem>
      </div>
    </div>
  )
}
