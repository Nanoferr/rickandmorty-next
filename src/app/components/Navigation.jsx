import Link from 'next/link'

const links = [{
    label: 'Home',
    route: '/'
  },
  {
    label: 'About',
    route: '/about'
  },
  {
    label: 'Characters',
    route: '/characters'
  }
  ]

export function Navigation () {
    return (
        <header className='p-3'>
        <nav >
          <ul className='flex p-5 gap-10 border-2'> 
            {links.map(({label, route}) => (
              <li className='hover:underline' key={route}>
                <Link href={route}>
                {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    )
}