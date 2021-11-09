import React, { Component } from "react";
import "./Profile.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

export default class Profile extends Component {
	render() {
		return (
			<div>
				<Box className="form">
					<div className="title">
						<AccountCircleIcon
							style={{ fontSize: 55, marginRight: 10 }}
							className="icon"
						/>
						<Typography style={{ fontSize: 40 }} className="text" variant="h2">
							{" "}
							Welcome Back, Username!
						</Typography>
					</div>

					<div className="detail">
						<Typography
							style={{ marginRight: 80 }}
							className="label"
							variant="h5"
						>
							First Name:
						</Typography>
						<TextField
							style={{ width: 750, backgroundColor: "white" }}
							variant="outlined"
						></TextField>
					</div>
					<div className="detail">
						<Typography
							style={{ marginRight: 80 }}
							className="label"
							variant="h5"
						>
							Last Name:
						</Typography>
						<TextField
							style={{ width: 750, backgroundColor: "white" }}
							variant="outlined"
						></TextField>
					</div>
					<div className="detail">
						<Typography
							style={{ marginRight: 140 }}
							className="label"
							variant="h5"
						>
							Email:
						</Typography>
						<TextField
							style={{ width: 750, backgroundColor: "white" }}
							variant="outlined"
						></TextField>
					</div>
					<div className="detail">
						<Typography
							style={{ marginRight: 90 }}
							className="label"
							variant="h5"
						>
							Password:
						</Typography>
						<TextField
							style={{ width: 750, backgroundColor: "white" }}
							variant="outlined"
							type="password"
						></TextField>
					</div>
					<div className="submit">
						<Button
							variant="contained"
							style={{ fontSize: 15 }}
							color="primary"
							endIcon={<ArrowRightAltIcon />}
							size="large"
						>
							UPDATE DETAILS
						</Button>
					</div>
				</Box>
			</div>
		);
	}
}