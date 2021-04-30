import React from 'react';
import { Tabs } from 'antd';
        import { Button, Col, Input, Row, Select, Typography } from 'antd';
        import WalletConnect from '../components/WalletConnect';

import {
  useWalletBalancesForAllMarkets,
} from '../utils/markets';
import FloatingElement from '../components/layout/FloatingElement';
import WalletBalancesTable from '../components/UserInfoTable/WalletBalancesTable';
import { useMintToTickers } from '../utils/tokens';
        import { useHistory, useLocation } from 'react-router-dom';
        import { useWallet } from '../utils/wallet';
const { TabPane } = Tabs;

export default function BalancesPage() {
        const { connected, wallet } = useWallet();
  const walletBalances = useWalletBalancesForAllMarkets();
  const mintToTickers = useMintToTickers();
        const location = useLocation();
        const history = useHistory();
  const data = (walletBalances || []).map((balance) => {
    const balances = {
      coin: mintToTickers[balance.mint],
      mint: balance.mint,
      walletBalance: balance.balance,
      openOrdersFree: 0,
      openOrdersTotal: 0,
    };

    return balances;
  });

  return (
    <>
        {!connected && (
        <Row justify="center">
            <Col>
                <WalletConnect />
            </Col>
        </Row>
        )}

        { connected && location.pathname == '/balances' && (
        <FloatingElement style={{ flex: 1, paddingTop: 10 }}>

                <Tabs defaultActiveKey="walletBalances">
                  <TabPane tab="Wallet Balances" key="walletBalances">
                    <WalletBalancesTable walletBalances={data} />
                  </TabPane>
                </Tabs>
        </FloatingElement>

        )}
        </>
  );
}
