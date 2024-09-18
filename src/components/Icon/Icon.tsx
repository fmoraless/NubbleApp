import React from 'react';
import {View, Text} from 'react-native';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';

export interface IconBase {
  size?: number;
  color?: string;
}

interface Props {
  name: IconName;
  color?: string;
}

export function Icon({name, color = '#000'}: Props) {
  const SVGIcon = iconRegistry[name];

  return <SVGIcon color={color} />;
}

const iconRegistry = {
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
