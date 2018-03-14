import { connect } from 'react-redux';
import { MEASUREMENT_SYSTEMS } from '../../../constants';
import { updateMeasurementSystem } from '../../../redux/reducers/settings';
import OnboardMeasurementSystem from '../../screens/OnboardMeasurementSystem';

export default connect(
  state => ({
    metricSelected: state.settings.measurementSystem === MEASUREMENT_SYSTEMS.METRIC,
    imperialSelected: state.settings.measurementSystem === MEASUREMENT_SYSTEMS.IMPERIAL
  }),
  {
    selectMetric: () => (
      dispatch => dispatch(updateMeasurementSystem(MEASUREMENT_SYSTEMS.METRIC))
    ),
    selectImperial: () => (
      dispatch => dispatch(updateMeasurementSystem(MEASUREMENT_SYSTEMS.IMPERIAL))
    ),
  }
)(OnboardMeasurementSystem);
