import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Box} from '@components';

import {OnboardingScreenProps} from '../../../routes/navigationType';

import OnboardingPage from './components/OnboardingPage';
import {OnboardingPageItem, onboardingPages} from './onboardingData';

export function OnboardingScreen({}: OnboardingScreenProps<'OnboardingScreen'>) {
  const [pageIndex, setPageIndex] = useState(0);

  const flatListRef = React.useRef<FlatList<OnboardingPageItem>>(null);

  function onPressNext() {
    const isLastPage = pageIndex === onboardingPages.length - 1;
    if (isLastPage) {
      onFinishOnboarding();
    } else {
      const nextIndex = pageIndex + 1;
      flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
      setPageIndex(nextIndex);
    }
  }

  function onFinishOnboarding() {
    // TODO: implementar onFinishOnboarding
    console.log('Finish onboarding');
  }

  function renderItem({item}: ListRenderItemInfo<OnboardingPageItem>) {
    return (
      <OnboardingPage
        pageItem={item}
        onPressNext={onPressNext}
        onPressSkip={onFinishOnboarding}
      />
    );
  }

  return (
    <Box flex={1} backgroundColor="background">
      <FlatList
        ref={flatListRef}
        scrollEnabled={false}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        data={onboardingPages}
      />
    </Box>
  );
}

export default OnboardingScreen;
