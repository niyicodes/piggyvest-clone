import piggy from '/assets/piggy.png'
import flex from '/assets/flex.png'
import target from '/assets/target.png'
import safelock from '/assets/safelock.png'
import './MenuItems.css'

export const MenuItems = [
   {
      title: 'Piggybank',
      path: '/piggybank',
      cName: 'dropdown-link',
      icon: piggy,
   },
   {
      title: 'Safelock',
      path: '/safelock',
      cName: 'dropdown-link',
      icon: safelock,
   },
   {
      title: 'Targeted Savings',
      path: '/targets',
      cName: 'dropdown-link',
      icon: target,
   },
   {
      title: 'Flex Naira',
      path: '/flex-naira',
      cName: 'dropdown-link',
      icon: flex,
   }
]