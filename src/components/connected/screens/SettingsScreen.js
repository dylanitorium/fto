import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import SettingsScreen from '../../screens/SettingsScreen';
export default withRouter(connect()(SettingsScreen));
