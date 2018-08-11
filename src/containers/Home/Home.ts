import { connect } from 'react-redux';
import { IHomeConnectedProps, IHomeDispatchProps } from '../../components/Home/HomeProps'
import IState from '../../models/State';
import { Action } from '../../actions/Action';
import { activateKabaya, closeKabaya } from '../../actions/ActionCreator';
import { Dispatch, bindActionCreators } from 'redux';
import { Home } from '../../components/Home/Home';


function mapStateToProps(state: IState): IHomeConnectedProps {
  return {
    title: state.title,
  }
}

function mapDispatchToProps(dispatch: Dispatch<Action>): IHomeDispatchProps {
  return bindActionCreators({ activateKabaya, closeKabaya }, dispatch);
}

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default Container;
