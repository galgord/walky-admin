import './index.css';

import React from 'react';

import { PageHeaderProps } from './types';

const PageHeader: React.FC<PageHeaderProps>= ({title}) => {
  return (
    <>
    <span className='page-header-text'>{title}</span>
    <div className='page-header-divider'/>
    </>
  )
}

export default PageHeader