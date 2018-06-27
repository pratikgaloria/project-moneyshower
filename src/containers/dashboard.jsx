import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { styles } from 'styles/styles';

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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import { Chart } from 'react-google-charts';

class Dashboard extends React.Component {
  componentDidMount() {

  }
  componentDidUpdate() {

  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;

    const prices = [["2016-04-30",17897.46],["2016-03-31",17685.09],["2016-02-29",16516.5],["2016-01-31",16466.3],["2015-12-31",17425.03],["2015-11-30",17719.92],["2015-10-31",17663.54],["2015-09-30",16284.7],["2015-08-31",16528.03],["2015-07-31",17689.86],["2015-06-30",17619.51],["2015-05-31",18010.68],["2015-04-30",17840.52],["2015-03-31",17776.12],["2015-02-28",18132.7],["2015-01-31",17164.95],["2014-12-31",17823.07],["2014-11-30",17828.24],["2014-10-31",17390.52],["2014-09-30",17042.9],["2014-08-31",17098.45],["2014-07-31",16563.3],["2014-06-30",16826.6],["2014-05-31",16717.17],["2014-04-30",16580.84],["2014-03-31",16457.66],["2014-02-28",16321.71],["2014-01-31",15698.85],["2013-12-31",16576.66],["2013-11-30",16086.41],["2013-10-31",15545.75],["2013-09-30",15129.67],["2013-08-31",14810.31],["2013-07-31",15499.54],["2013-06-30",14909.6],["2013-05-31",15115.57],["2013-04-30",14839.8],["2013-03-31",14578.54],["2013-02-28",14054.49],["2013-01-31",13860.58],["2012-12-31",13104.14],["2012-11-30",13025.58],["2012-10-31",13096.46],["2012-09-30",13437.13],["2012-08-31",13090.84],["2012-07-31",13008.68],["2012-06-30",12880.09],["2012-05-31",12393.45],["2012-04-30",13213.63],["2012-03-31",13212.04],["2012-02-29",12952.07],["2012-01-31",12632.91],["2011-12-31",12217.56],["2011-11-30",12045.68],["2011-10-31",11955.01],["2011-09-30",10913.38],["2011-08-31",11613.53],["2011-07-31",12143.24],["2011-06-30",12414.34],["2011-05-31",12569.79],["2011-04-30",12810.54],["2011-03-31",12319.73],["2011-02-28",12226.34],["2011-01-31",11891.93],["2010-12-31",11577.51],["2010-11-30",11006.02],["2010-10-31",11118.49],["2010-09-30",10788.05],["2010-08-31",10014.72],["2010-07-31",10465.94],["2010-06-30",9774.02],["2010-05-31",10136.63],["2010-04-30",11008.61]];
    const data = [['Time', 'Price', 'Volume']];
    prices.forEach((p) => {
      p.push(Math.floor((Math.random() * 10000) + 100));
      data.push(p);
    });

    return (
      <Grid container spacing={24}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardHeader
              avatar={
                <div>
                  <Typography variant="title" className={classes.cardTitle}>AAPL</Typography>
                  <Typography variant="body1" className={classes.lightGreen}>Today 3:25 PM</Typography>
                </div>
              }
              action={
                <div style={{textAlign: 'right'}}>
                  <Typography variant="title" className={classes.cardTitle}>
                    <Icon className={classes.icon}>expand_less</Icon>
                    524.21
                  </Typography>
                  <Typography variant="body1" className={classes.lightGreen}>+ 1.05 (1.89%)</Typography>
                </div>
              }
            />
            <CardContent className={classes.cardContent}>
              <Chart
                chartType="LineChart"
                data={data}
                options={{
                  chartArea: {
                    width: '100%',
                    height: '100%',
                  },
                  backgroundColor: '#A6C675',
                  curveType: 'function',
                  legend: 'none',
                  enableInteractivity: false,
                  hAxis: {
                    baselineColor: '#A6C675',
                    gridlines: {
                      count: 0,
                    }
                  },
                  vAxis: {
                    baselineColor: '#A6C675',
                    gridlines: {
                      count: 0,
                    }
                  },
                  bar: {
                    groupWidth: 4,
                  },
                  lineWidth: 3,
                  series: {
                    0: {
                      color: 'white',
                    },
                    1: {
                      type: 'bars',
                      color: '#98b768',
                    },
                  },
                }}
                graph_id="LineChart"
                width="100%"
                height="80px"
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Dashboard);
