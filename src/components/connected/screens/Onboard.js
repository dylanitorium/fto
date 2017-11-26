import { connect } from 'react-redux';
import Onboard from '../../screens/Onboard';

export default connect(
  () => ({
    hasHistory: false,
  })
)(Onboard);
