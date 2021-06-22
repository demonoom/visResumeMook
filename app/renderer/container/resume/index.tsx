import React from 'react';
import './index.less';
import fileActions from '@common/utils/file';
import { getAppPath } from '@common/utils/appPath';

function Resume() {
  getAppPath().then((rootPath: string) => {
    console.log('应用程序的目录路径为：', rootPath);
    fileActions.read(`${rootPath}app/renderer/container/resume/index.tsx`).then((data) => {
      console.log(data);
    });
  });

  return <div>简历模板</div>;
}

export default Resume;
