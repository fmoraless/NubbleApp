import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {IconBase} from '../../components/Icon/Icon';

export function SendIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M18.9998 1.61495C19 1.60395 19 1.59335 18.9998 1.58235C18.9991 1.55555 18.9965 1.52915 18.9923 1.50275C18.9909 1.49455 18.9904 1.48655 18.9886 1.47835C18.9818 1.44535 18.9722 1.41295 18.9599 1.38155C18.9563 1.37235 18.9516 1.36375 18.9476 1.35475C18.937 1.33095 18.925 1.30795 18.9112 1.28555C18.9056 1.27635 18.9 1.26715 18.8939 1.25795C18.8734 1.22855 18.8514 1.20035 18.8256 1.17455C18.7996 1.14855 18.771 1.12635 18.7414 1.10575C18.733 1.09995 18.7244 1.09455 18.7157 1.08935C18.692 1.07475 18.6678 1.06215 18.6428 1.05115C18.635 1.04775 18.6276 1.04375 18.6196 1.04055C18.5874 1.02795 18.5542 1.01795 18.5202 1.01115C18.514 1.00995 18.5077 1.00955 18.5014 1.00835C18.473 1.00355 18.4444 1.00075 18.4156 1.00015C18.406 0.99995 18.3966 0.99995 18.3872 1.00015C18.359 1.00075 18.3308 1.00355 18.3026 1.00835C18.2956 1.00955 18.2888 1.00995 18.2818 1.01135C18.251 1.01755 18.2206 1.02595 18.1906 1.03715L1.38921 7.34176C1.16441 7.42616 1.01161 7.63636 1.00061 7.87636C0.989811 8.11617 1.12301 8.33957 1.33921 8.44397L8.23023 11.7696L11.5556 18.6606C11.6562 18.8688 11.8668 19 12.0962 19C12.1054 19 12.1144 18.9998 12.1236 18.9994C12.3634 18.9884 12.5738 18.8356 12.6582 18.6108L18.9631 1.80955C18.9743 1.77975 18.9825 1.74955 18.9886 1.71895C18.9902 1.71075 18.9909 1.70275 18.9921 1.69455C18.9965 1.66815 18.9991 1.64155 18.9998 1.61495ZM16.0172 3.13435L8.55703 10.5946L3.12382 7.97276L16.0172 3.13435ZM12.0272 16.8762L9.40543 11.4432L16.8658 3.98276L12.0272 16.8762Z"
        fill={color}
      />
    </Svg>
  );
}
