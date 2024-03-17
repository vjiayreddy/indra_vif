import React, { ReactNode } from 'react';
import AppSuspense from '../AppSuspense';
import AppFooter from '../AppLayout/components/AppFooter';
import AppErrorBoundary from '../AppErrorBoundary';
import Box from '@mui/material/Box';
import AppContentViewWrapper from './AppContentViewWrapper';
import { SxProps } from '@mui/material';

type AppContentViewProps = {
  children: ReactNode;
  sxStyle?: SxProps;
};

const AppContentView: React.FC<AppContentViewProps> = ({
  children,
  sxStyle,
}) => {
  return (
    <AppContentViewWrapper>
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          ...sxStyle,
        }}
        className="app-content"
      >
        <AppSuspense>
          <AppErrorBoundary>{children}</AppErrorBoundary>
        </AppSuspense>
      </Box>
      <AppFooter />
    </AppContentViewWrapper>
  );
};

export default AppContentView;
