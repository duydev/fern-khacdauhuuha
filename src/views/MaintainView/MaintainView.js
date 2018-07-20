import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import './MaintainView.css'

import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    height: '100vh'
  },
  h1: {
    textAlign: 'center'
  },
  image: {
    width: '100%'
  },
  footer: {
    textAlign: 'center'
  },
  heart: {
    color: 'red'
  }
}

class MaintainView extends Component {
  render = () => {
    const { classes } = this.props
    return (
      <div>
        <Helmet title="Website đang được xây dựng" />
        <Grid
          container
          className={classes.root}
          justify="center"
          alignItems="center"
        >
          <Grid item md={8}>
            <h1 className={classes.h1}>Website đang được xây dựng</h1>
            <img
              className={classes.image}
              src="https://i.imgur.com/tcVgPkh.png"
              alt="Under Construction"
            />
            <p className={classes.footer}>
              2018 &copy; Make with <span className={classes.heart}>❤</span> by{' '}
              <a
                style={{ textDecoration: 'none', fontWeight: 500 }}
                href="https://duydev.me"
              >
                Trần Nhật Duy
              </a>.
            </p>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(MaintainView)
