const mainStats = [
    { id: 1, name: 'Next.js Version 13, React, JavaScript and Knowledge in Html/Css', value: 'Front-End Tech languages used' },
    { id: 2, name: 'Tailwind CSS', value:  'Style languages used' },
    { id: 3, name: 'Tailwind-Material, React Hooks, API Rest, Next Server Side Components, Vercel for Deploy', value: 'Libraries and Tools' },
  ]
  
  export default function Stats() {
    return (
      <div className="py-22 p-15">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="md:grid md:grid-cols-3 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {mainStats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-2xl leading-7 text-blue-100 font-bold p-2">{stat.name}</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-accent-hover sm:text-5xl p-5">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }