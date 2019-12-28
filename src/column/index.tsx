import React, { useContext, useEffect } from 'react';
import { Column, ColumnConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface ColumnConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<Column | undefined>;
}

const TechColumn: React.FC<ColumnConfig> = (props: ColumnConfig) => {
  const { chartRef, ...rest } = props;

  const { chart, container } = useChart<Column, ColumnConfig>(Column, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div ref={container} />;
};

export default (props: ColumnConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechColumn {...config} {...props} />
    </ErrorBoundary>
  );
};