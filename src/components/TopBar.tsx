import {
  SettingOutlined,
} from '@ant-design/icons';
import { Button, Menu, Popover, } from 'antd';
import React, { useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useWallet } from '../utils/wallet';
import Settings from './Settings';
import WalletConnect from './WalletConnect';

const Wrapper = styled.div`
  background-color: #0d1017;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0px 30px;
  flex-wrap: wrap;
`;


const EXTERNAL_LINKS = {
  '/learn': 'https://serum-academy.com/en/serum-dex/',
  '/add-market': 'https://serum-academy.com/en/add-market/',
  '/wallet-support': 'https://serum-academy.com/en/wallet-support',
  '/dex-list': 'https://serum-academy.com/en/dex-list/',
  '/developer-resources': 'https://serum-academy.com/en/developer-resources/',
  '/explorer': 'https://explorer.solana.com',
  '/srm-faq': 'https://projectserum.com/srm-faq',

};

export default function TopBar() {
  const { connected, wallet } = useWallet();
  const location = useLocation();
  const history = useHistory();

  const handleClick = useCallback(
    (e) => {
      if (!(e.key in EXTERNAL_LINKS)) {
        history.push(e.key);
      }
    },
    [history],
  );







  return (
    <>

      <Wrapper>

        <Menu
          mode="horizontal"
          onClick={handleClick}
          selectedKeys={[location.pathname]}
          style={{
            borderBottom: 'none',
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'flex-end',
            flex: 1,
          }}
        >
        <h1 style={{ margin: '0 30px 0 30px' }}>
        GLARE
      </h1>
      <Menu.Item key="/convert" style={{ margin: '0 10px' }}>
      SWAP
    </Menu.Item>
   <Menu.Item key="/balances" style={{ margin: '0 10px' }}>
            BALANCE
        </Menu.Item>




        </Menu>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingRight: 5,
          }}
        >

        </div>

        {connected && (
          <div>
            <Popover
              content={<Settings autoApprove={wallet?.autoApprove} />}
              placement="bottomRight"
              title="Settings"
              trigger="click"
            >
              <Button style={{ marginRight: 8 }}>
                <SettingOutlined />
                Settings
              </Button>
            </Popover>
          </div>
        )}
        <div>
          <WalletConnect />
        </div>
      </Wrapper>
    </>
  );
}
