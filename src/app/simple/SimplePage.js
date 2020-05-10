import React from 'react';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Title from "../dashboard/Title";
import useStyles from '../useStyles';
import Button from '@material-ui/core/Button'

const SimplePage = ({ counter, increment }) => {
    const classes = useStyles();

    const handleClick = (event) => {
        event.preventDefault();
        increment(5);
    }

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Paper className={classes.paper}>
                <Title>Simple Page</Title>
                <Typography>
                    Counter:{counter}
                </Typography>
                <Button variant="outlined" onClick={handleClick}>Increment</Button>
            </Paper>
        </Container>
    );
}
export default SimplePage;