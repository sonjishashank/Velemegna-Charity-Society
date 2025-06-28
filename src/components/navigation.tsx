import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const navigation = [
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Hospital',
    href: '/hospital',
  },
  {
    title: 'Institutions',
    items: [
      {
        title: 'Salins Optometry College',
        href: '/college',
        description: 'Training the next generation of eye care professionals',
      },
    ],
  },
  {
    title: 'Other Works',
    items: [
      {
        title: 'Farms',
        href: '/works/farms',
        description: 'Sustainable farming initiatives',
      },
      {
        title: 'Leprosy Care Centre',
        href: '/works/leprosy-care',
        description: 'Providing care and support for leprosy patients',
      },
      {
        title: 'Vision Centers',
        href: '/works/vision-centers',
        description: 'Community eye care centers',
      },
      {
        title: "Children's Home",
        href: '/works/childrens-home',
        description: 'Caring for underprivileged children',
      },
    ],
  },
  {
    title: 'Gallery',
    href: '/gallery',
  },
  {
    title: 'Newsletter',
    href: '/newsletter',
  },
  {
    title: 'Appointment',
    href: '/appointment',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

interface NavigationProps {
  className?: string;
  setIsOpen?: (open: boolean) => void;
}

export default function Navigation({ className, setIsOpen }: NavigationProps) {
  const handleClick = () => {
    if (setIsOpen) {
      setIsOpen(false);
    }
  };

  return (
    <NavigationMenu className={className}>
      <NavigationMenuList className={cn(
        "flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2",
        className
      )}>
        {navigation.map((item) =>
          item.items ? (
            <NavigationMenuItem key={item.title}>
              <NavigationMenuTrigger className="w-full justify-start md:w-auto">
                {item.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {item.items.map((subItem) => (
                    <li key={subItem.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          className={cn(
                            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                          )}
                          to={subItem.href}
                          onClick={handleClick}
                        >
                          <div className="text-sm font-medium leading-none">
                            {subItem.title}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {subItem.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={item.title}>
              <NavigationMenuLink asChild>
                <Link
                  className={cn(
                    'group inline-flex h-10 w-full items-center justify-start rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 md:w-max'
                  )}
                  to={item.href}
                  onClick={handleClick}
                >
                  {item.title}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}