import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';
import clsx from 'clsx';

import { FeatureBox, FeatureSvg } from './HomepageFeatures.styled';

type FeatureItem = {};

const FeatureList: FeatureItem[] = [];

function Feature({}: FeatureItem) {
  return <div></div>;
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <FeatureBox>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </FeatureBox>
  );
}
