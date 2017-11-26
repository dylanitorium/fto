import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import WeekScreen from '../../screens/WeekScreen';

export default withRouter(connect()(WeekScreen));
