/*
  jsrepo 1.24.1
  Installed from github/davidhdev/react-bits
  1-10-2025
*/

import { useColorMode } from '@/components/ui/color-mode';
import './ShinyText.scss';

type ShinyTextProps = {
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  speed?: number
}

const ShinyText = ({ children, disabled = false, speed = 2.3, className = '' }: ShinyTextProps) => {
  const animationDuration = `${speed}s`;
  const { colorMode } = useColorMode()

  return (
    <div
      className={`${colorMode === 'dark' ? 'shiny-text-dark' : 'shiny-text'} ${disabled ? 'disabled' : ''} ${className}`}
      style={{ animationDuration }}
    >
      {children}
    </div>
  );
};

export default ShinyText;
