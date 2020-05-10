import React from 'react';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Title from "../dashboard/Title";
import useStyles from '../useStyles';

export default function SimplePage(props) {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.container}>
            <Paper className={classes.paper}>
                <Title>Simple Page</Title>
                <Typography>
                    Props:{props.text}
                </Typography>
            </Paper>
        </Container>
    );
}