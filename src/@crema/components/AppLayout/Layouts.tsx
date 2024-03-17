import Default from './DefaultLayout';
import { NavStyle } from '@crema/constants/AppEnums';
import Standard from './Standard';

const Layouts: any = {
  [NavStyle.DEFAULT]: Default,
  [NavStyle.STANDARD]: Standard,
};
export default Layouts;
