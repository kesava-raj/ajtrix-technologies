import React from 'react';
import {
  LayoutTemplate,
  TrendingUp,
  Palette,
  Code2,
  Compass,
  Presentation,
} from 'lucide-react';
import type { ServiceIconKey } from '../data/services';

const ICON_MAP: Record<ServiceIconKey, React.ComponentType<{ className?: string }>> = {
  web: LayoutTemplate,
  marketing: TrendingUp,
  branding: Palette,
  software: Code2,
  consulting: Compass,
  presentation: Presentation,
};

interface ServiceIconProps {
  icon: ServiceIconKey;
  className?: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ icon, className }) => {
  const IconComponent = ICON_MAP[icon];
  return <IconComponent className={className} />;
};

