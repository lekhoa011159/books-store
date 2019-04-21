import React from 'react';

import FooterItem from './FooterItem';
import Address from './Address';
import BottomLogo from './BottomLogo';

import styles from './index.module.css';

import { footer } from '../../test';

const address = [
  { header: 'Main Building', desc: 'Lorem qui ad laborum cillum incididunt voluptate.Fugiat proident pariatur reprehenderit nisi amet elit in quis.', address: '186/5A, Tran Ke Xuong street, Phu Nhuan District' },
  { header: 'Second Building', desc: 'Lorem qui ad laborum cillum incididunt voluptate.Fugiat proident pariatur reprehenderit nisi amet elit in quis.', address: '452 Thong Nhat street, Go Vap District' }
];

const Footer = () => (
  <div className={styles.Component}>
    <ul>
      {footer.map((item, index) =>
        <FooterItem key={index} list={item.list} header={item.header} />
      )}
    </ul>

    <hr />

    <ul style={{ flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center' }}>
      {address.map((add, index) =>
        <Address key={index} addObj={add} className={styles.Address} />
      )}
    </ul>

    <hr style={{ marginTop: 8, marginBottom: 8 }} />

    <BottomLogo className={styles.Bottom} />
  </div>
);

export default Footer;
