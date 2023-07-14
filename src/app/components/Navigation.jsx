import Link from 'next/link'

const links = [{
    label: 'Home',
    route: '/'
  },
  {
    label: 'Characters',
    route: '/characters'
  },
  {
    label: 'Episodes',
    route: '/episodes'
  },
  {
    label: 'Locations',
    route: '/locations'
  }
  ]

export function Navigation () {
    return (
        <header className='p-3'>
        <nav >
          <ul className='justify-center flex p-5 gap-10 text-3xl bg-clear font-bold'> 
            {links.map(({label, route}) => (
              <li className='md:hover:translate-x-3 duration-500 ease-in-out' key={route}>
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