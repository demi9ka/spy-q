'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '@/lib/utils'

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn('relative flex w-full touch-none select-none items-center', className)}
    {...props}
  >
    <SliderPrimitive.Track className='relative h-[20.0px] md:h-[9.6px]  lg:h-[12.3px] xl:h-[15.3px] 2xl:h-[20.0px] w-full grow overflow-hidden rounded-full bg-primary/10'>
      <SliderPrimitive.Range className='absolute h-full bg-accent' />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className='border-white block size-[28.0px] md:size-[13.4px] lg:size-[17.2px] xl:size-[21.5px] 2xl:size-[28.0px] rounded-full border  bg-accent shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50' />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
