import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Button, Modal, Radio, Select, message } from 'antd';
import styles from './index.less';
import React from 'react';

const HomePage: React.FC = () => {
  const { name } = useModel('global');

  React.useEffect(() => {
    message.success({
      content: '欢迎使用',
      duration: 10
    });

  }, []);

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
        <Button
          onClick={() => {
            Modal.confirm({ title: 'aaa' });
          }}
        >
          aaa
        </Button>
        <Radio.Group>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </Radio.Group>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
            { value: 'disabled', label: 'Disabled', disabled: true },
          ]}
        />
      </div>
    </PageContainer>
  );
};

export default HomePage;
