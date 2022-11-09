import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ReactComponent as DataSvg } from '@/assets/illustration/data.svg';
import { Typography } from 'antd';

const { Title } = Typography;

const { useRef, useState, useEffect, useMemo } = React;

const ContainerSection = styled.section`
  padding: 24px;
  margin: 0 auto;
  width: fit-content;
`;

interface ClfProps {}

const Clf: React.FC<ClfProps> = (props: ClfProps) => {
  const {} = props;

  return (
    <ContainerSection>
      <DataSvg></DataSvg>
      <Title
        level={3}
        style={{
          marginTop: '24px',
          textAlign: 'center',
        }}
      >
        Clf
      </Title>
    </ContainerSection>
  );
};

export default Clf;
