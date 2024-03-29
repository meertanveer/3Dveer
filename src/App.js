import React from 'react';
import { RecoilRoot } from 'recoil';
import AssetInduction from './components/asset-induction';
import AssetForm from './components/remap-asset';
import InductRemapAsset from './components/inductRemapAsset';
import DamageEntryPage from './components/damageEntry';
import Test from './components/TestPage';
import InductAsset from './components/InductAsset/induct-asset';
import ATCLoss from './components/ActLoss/actloss';
import TransformDmg from './components/TransformerDamages/transformer-damages';
import Mapper from './components/DataAsseteMapper/dt-asset-mapper';

function App() {
  return (
    <RecoilRoot>
      <div className='App'>
        <header className='App-header'>
          <div>
            {/* <AssetForm /> */}
            {/* <AssetInduction /> */}
            {/* <InductRemapAsset /> */}
            {/* <DamageEntryPage /> */}
            {/* <Test /> */}
            {/* <InductAsset /> */}
            {/* <ATCLoss /> */}
            {/* <TransformDmg /> */}
            {/* <Mapper /> */}
          </div>
        </header>
      </div>
    </RecoilRoot>
  );
}

export default App;
