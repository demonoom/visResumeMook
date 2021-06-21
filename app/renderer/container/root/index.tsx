import React from 'react';
import './index.less';
import Logo from '@assets/logo.png';
import { useHistory } from 'react-router';
import { shell } from 'electron';
import { ROUTER_ENTRY, ROUTER_KEY } from '@src/common/constants/router';

function Root() {
  const history = useHistory();
  const onRouterToLink = (router: TSRouter.Item) => {
    if (router.text === '简历') {
      history.push('/resume');
    } else {
      // electron 提供一个shell模块，提供与桌面集成相关的功能，并且此模块也能用于渲染进程中
      shell.openExternal('https://github.com/');
    }
  };

  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} alt="" />
        <div styleName="title">VisResumeMook</div>
        <div styleName="tips">一个模板简历制作平台，让你的简历更加出众</div>
        <div styleName="action">
          {ROUTER_ENTRY.map((router: TSRouter.Item) => (
            <div key={router.key} styleName="item" onClick={() => onRouterToLink(router)}>
              {router.text}
            </div>
          ))}
        </div>
        <div styleName="copyright">
          <div styleName="footer">
            <p styleName="copyright">
              Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By Noom
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Root;
