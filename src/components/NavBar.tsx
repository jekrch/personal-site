import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
const navigation = [
  { name: 'linkedin', href: '#', current: true, menu: false },
  { name: 'github', href: '#', current: false, menu: false },
  { name: 'projects', href: '#', current: false, menu: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <Disclosure as="nav" style={{ backgroundColor: "#5b8592" }} className="font-sans font-14">
      {({ open }) => (
        <>
          <div className="mx-auto h-[120px] sm:h-[120px] max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex pt-12 h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden flow-root w-full">
                {/* Mobile menu button*/}
                <Disclosure.Button className="m-2 float-right inline-flex items-left justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 float-left">
                <div className="flex flex-shrink-0 float-left">
                  <img
                    className="block h-24 w-auto float-left"
                    src={process.env.PUBLIC_URL + '/images/jacobkrch.png'}
                    alt="Jacob Krch"
                  />
                </div>
                <div className="mt-4 hidden sm:ml-6 sm:block flow-root w-full">
                  <div className="flex mt-4 space-x-4 items-right float-right">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'text-white' : 'text-gray-300 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
          <Transition
            show={open}
            as="div"
            enter="transition duration-[800ms] ease-out"
            enterFrom="transform translate-y-0"
            enterTo="transform translate-y-full"
            leave="transition duration-[800ms] ease-out"
            leaveFrom="transform translate-y-full"
            leaveTo="transform translate-y-0"
          >
            <Disclosure.Panel as="div" className="">

                <div className="bg-tealeaf">
                {navigation.map((item) => (          
                    <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                            item.current ? 'text-white' : 'text-gray-300 hover:text-white',
                            'bg-tealeaf sm:hidden block text-left align-left ml-3 py-2 rounded-md text-base font-light'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                    >
                        {item.name}
                    </Disclosure.Button>
                ))}
                </div>

            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}