import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
   position: relative;
   height: 56px;
   border-bottom: 1px solid #f0f0f0;
   z-index: 1;
`;

export const Logo = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   display: block;
   width: 100px;
   height: 56px;
   background: url(${logoPic});
   background-size: contain;
`

export const Nav = styled.div`
   width: 960px;
   height: 100%;
   margin: 0 auto;
   padding-right: 70px;
   box-sizing: border-box;
`;

export const NavItem = styled.div`
   line-height: 56px;
   padding: 0 15px;
   font-size: 17px;
   color: #333;
   &.left {
      float: left;
   }
   &.right {
      float: right;
      color: #969696;
   }
   &.active {
      color: #ea6f5a;
   }
`;

export const NavSearch = styled.input.attrs({
   placeholder: '搜索'
})`
   width: 160px;
   height: 38px;
   margin-top: 9px;
   padding: 0 30px 0 20px;
   border: none;
   outline: none;
   border-radius: 19px;
   box-sizing: border-box;
   background: #eee;
   font-size: 14px;
   margin-left: 20px;
   color: #666;
   &::placeholder {
      color: #999;
   }
   &.focused {
      width: 240px;
   }
   &.slide-enter {
      transition: all .3s ease-out;
   }
   &.slide-enter-active {
      width: 240px;
   }
   &.slide-exit {
      transition: all .3s ease-out;
   }
   &.slide-exit-active {
      width: 160px;
   }
`;
export const SearchInfo = styled.div`
   position: absolute;
   left: 0;
   top: 56px;
   width: 240px;
   padding: 0 20px;
   box-shadow: 0 0 8px rgba(0, 0, 0, .2);
   background: #fff;
`;

export const SearchInfoTitle = styled.div`
   margin-top: 20px;
   margin-bottom: 15px;
   line-height: 20px;
   font-size: 14px;
   color: #969696;
`;

export const SearchInfoSwitch = styled.span`
   float: right;
   font-size: 13px;
`;

export const SearchInfoList = styled.div`
   overflow: hidden;
`;

export const SearchInfoItem = styled.a`
   display: block;
   float: left;
   padding: 0 5px;
   font-size: 12px;
   line-height: 20px;
   border: 1px solid #b4b4b4;
   color: #787878;
   margin-right: 10px;
   margin-bottom: 15px;
   border-radius: 3px
`;

export const Addition = styled.div`
   position: absolute;
   top: 0;
   right: 0;
   height: 56px;
`;

export const Button = styled.div`
   float: right;
   margin-top: 9px;
   line-height: 38px;
   border-radius: 19px;
   border: 1px solid #ec6149;
   margin-right: 20px;
   padding: 0 20px;
   font-size: 14px;
   &.reg {
      color: #ec6149;
   }
   &.write {
      color: #fff;
      background: #ec6149;
   }
`;

export const SearchWrapper  = styled.div`
   float: left;
   position: relative;
   .iconfont {
      position: absolute;
      right: 5px;
      bottom: 4px;
      width: 30px;
      line-height: 30px;
      border-radius: 15px;
      text-align: center;
      &.focused {
         color: #fff;
         background: #777;
      }
   }
`;