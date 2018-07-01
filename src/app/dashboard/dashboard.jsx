import React from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';

import app from 'app';

type Props = {
  titleSet: () => void,
};

const mapDispatchToProps = dispatch => ({
  titleSet: () => {
    dispatch(app.actions.titleSet('dashboard'));
  },
});

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.titleSet();
  }

  props: Props;

  render() {
    return <div />;
  }
}

export default connect(null, mapDispatchToProps)(Dashboard);
