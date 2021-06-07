import React from 'react';
import './index.less';
import Avatar from './258 (2).jpg';

interface IProps {
  /**
   * 标题
   */
  text: string;
  /**
   * 样式
   */
  styles?: React.CSSProperties;
}

const Title = ({ text, styles }: IProps) => {
  return (
    <div style={styles} styleName="title">
      {text}
      <img src={Avatar} alt="" />
    </div>
  );
};

export default Title;
