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

import Chart from 'chart.js';

class Dashboard extends React.Component {
  componentDidMount() {
    let chartCanvas = this.refs.chart;
    let theme = this.props.theme;

    let myChart = new Chart(chartCanvas, {
      type: 'line',
      data: {
        labels: ["6/19/2018","6/18/2018","6/15/2018","6/14/2018","6/13/2018","6/12/2018","6/11/2018","6/8/2018","6/7/2018","6/6/2018","6/5/2018","6/4/2018","6/1/2018","5/31/2018","5/30/2018","5/29/2018","5/25/2018","5/24/2018","5/23/2018","5/22/2018","5/21/2018","5/18/2018","5/17/2018","5/16/2018","5/15/2018","5/14/2018","5/11/2018","5/10/2018","5/9/2018","5/8/2018","5/7/2018","5/4/2018","5/3/2018","5/2/2018","5/1/2018","4/30/2018","4/27/2018","4/26/2018","4/25/2018","4/24/2018","4/23/2018","4/20/2018","4/19/2018","4/18/2018","4/17/2018","4/16/2018","4/13/2018","4/12/2018","4/11/2018","4/10/2018","4/9/2018","4/6/2018","4/5/2018","4/4/2018","4/3/2018","4/2/2018","3/29/2018","3/28/2018","3/27/2018","3/26/2018","3/23/2018","3/22/2018","3/21/2018","3/20/2018","3/19/2018","3/16/2018","3/15/2018","3/14/2018","3/13/2018","3/12/2018","3/9/2018","3/8/2018","3/7/2018","3/6/2018","3/5/2018","3/2/2018","3/1/2018","2/28/2018","2/27/2018","2/26/2018","2/23/2018","2/22/2018","2/21/2018","2/20/2018","2/16/2018","2/15/2018","2/14/2018","2/13/2018","2/12/2018","2/9/2018","2/8/2018","2/7/2018","2/6/2018","2/5/2018","2/2/2018","2/1/2018","1/31/2018","1/30/2018","1/29/2018","1/26/2018","1/25/2018","1/24/2018","1/23/2018","1/22/2018","1/19/2018","1/18/2018","1/17/2018","1/16/2018","1/12/2018","1/11/2018","1/10/2018","1/9/2018","1/8/2018","1/5/2018","1/4/2018","1/3/2018","1/2/2018"],
        datasets: [
          {
            label: 'Lupin',
            fill: true,
            pointHoverRadius: 5,
            pointRadius: 0,
            pointHitRadius: 10,
            data: [7228.04,7251.41,7255.76,7279.59,7205.26,7209.18,7168.48,7152.62,7152.83,7210.08,7166.75,7143.57,7083.93,6967.73,6976.37,6926.54,6960.92,6949.7,6953.63,6893.62,6905.53,6866.25,6901.63,6929.97,6888.54,6964.37,6952.56,6963.55,6893.21,6815.48,6821.87,6769.12,6643.48,6644.48,6681.96,6605.57,6656.35,6649.65,6513.94,6509.05,6648.8,6667.75,6774.89,6833.21,6816.37,6675.18,6628.34,6656.26,6583.44,6615.87,6472.34,6433.21,6594.84,6560.06,6458.83,6390.84,6581.13,6460.81,6529.84,6753.83,6508.09,6682.26,6853.45,6885.92,6864.88,7019.95,7030.97,7040.98,7046.51,7131.12,7101.18,6966.43,6929.39,6913.02,6881.28,6811.04,6750.54,6854.42,6900.35,6989.1,6896.6,6761.85,6759.26,6779.69,6770.66,6794.92,6675.03,6553.86,6523.85,6412.68,6306.1,6582.02,6665.98,6495.92,6760.29,6901.5,6949.99,6930.73,6988.32,7022.97,6916.3,6919.35,6963.46,6906.28,6834.33,6811.38,6810.28,6737.14,6758.54,6708.49,6662.66,6677.94,6676.63,6653.29,6584.58,6575.8,6511.34],
            spanGaps: false,
            borderColor: theme.palette.primary.main,
            backgroundColor: '#eef0f2',
          },
        ],
      },
      options: {
        tooltips: {
          enabled: false,
        },
        legend: {
          display: false,
        },
        scales: {
          yAxes: [{
            display: false,
          }],
          xAxes: [{
            display: false,
          }]
        }
      },
    });

    this.setState({ chart: myChart });
  }
  componentDidUpdate() {
    let chart = this.state.chart;

    /*
    let data = chart.data;
    data.datasets.forEach((dataset, i) => chart.data.datasets[i].data = dataset.data);
    chart.data.labels = data.labels;
    */

    chart.update();
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.flexGrow} spacing={24}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  <Icon>trending_up</Icon>
                </Avatar>
              }
              action={
                <IconButton>
                  <Icon>more_horiz</Icon>
                </IconButton>
              }
              title="Trending Stocks"
            />
            <CardContent>
              <canvas ref="chart" style={{ height: '5rem', width: '80vw' }} />
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton aria-label="Add to favorites">
                <Icon>favorite</Icon>
              </IconButton>
              <IconButton aria-label="Share">
                <Icon>share</Icon>
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Dashboard);
