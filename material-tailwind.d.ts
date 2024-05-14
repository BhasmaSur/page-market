import MaterialTailwind from '@material-tailwind/react'

declare module '@material-tailwind/react' {
  interface ButtonProps {
    placeholder?
    onPointerEnterCapture?
    onPointerLeaveCapture?
  }

  interface NavbarProps {
    placeholder?
    onPointerEnterCapture?
    onPointerLeaveCapture?
  }

  interface TabsHeaderProps{
    placeholder?
    onPointerEnterCapture?
    onPointerLeaveCapture?
  }

  interface TypographyProps {
    placeholder?
    onPointerEnterCapture?
    onPointerLeaveCapture?
  }

  interface TabProps {
    placeholder?
    onPointerEnterCapture?
    onPointerLeaveCapture?
  }

  interface CarouselProps {
    placeholder?
    onPointerEnterCapture?
    onPointerLeaveCapture?
  }
}