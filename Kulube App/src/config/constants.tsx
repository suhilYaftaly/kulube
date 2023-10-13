import {moderateScale as ms} from 'react-native-size-matters';

type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export default Object.freeze({
  smallTxtSize: ms(10),
  normalTxtSize: ms(12),
  mediumTxtSize: ms(14),
  largeTxtSize: ms(16),
  exLargeTxtSize: ms(18),
  headerTitleTxtSize: ms(16),
  largeHeaderTitleTxtSize: ms(20),
  headerSubtitleTxtSize: ms(12),
  headerHeight: ms(50),
  taxPct: 0.13,
  taxLabel: '13%',
  semibold: '600' as FontWeight,
  bold: 'bold' as FontWeight,
  beingPrepared: 'beingPrepared',
  ready: 'ready',
  served: 'served',
  OK: 'OK',
  ERROR: 'ERROR',
  CSR: 'CSR',
  assistant_manager: 'assistant manager',
  manager: 'manager',
  general_manager: 'general manager',
});
