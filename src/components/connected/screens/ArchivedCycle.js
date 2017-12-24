import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import ArchivedCycle from '../../screens/ArchivedCycle';

export default withRouter(connect(
  ({ cycles: { history } }, ownProps) => {
    return {
      canComplete: false,
      completed: true,
      completeContext: [],
      cycle: history[ownProps.match.params.cycleId]
    };
  },
  {
    onCompletePress: () => {},
  }
)(ArchivedCycle));
