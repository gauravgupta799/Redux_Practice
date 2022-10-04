import React from "react";
import { Products } from "../data";

const classes = {
	hoemeWrapper: {
        flexWrap: "wrap",
		height: "30vh",
        width: "30vw",
		margin: "20px",
        display: "flex",
	},
    productWrapper:{
        boxShadow: "0px 0px 7px 2px rgba(0, 0, 0, 0.2)",
        padding:"20px 30px",
        display: "flex",
        margin: "20px 0px"
    },
	imgWrapper: {
     marginRight:"30px"
    },
	Img: {
		height: "200px",
		width: "200px",
	},
	Button:{
        padding: "10px",
        background: "black",
        color:"white",
        fontSIze:"20px",
        fontWeight:"bold",
        borderRadius:"3px",
        cursor: "pointer",
    }

};

const Home = () => {
	return (
		<div style={classes.hoemeWrapper}>
			{Products.map((product) => {
				const {id,name, price, image} = product
				return (
					<div style={classes.productWrapper} key={id}>
						<div style={classes.imgWrapper}>
							<img
								src={image}
								alt={name}
								style={classes.Img}
							/>
						</div>
						<div>
							<h2>{name}</h2>
							<h3>$ {price}</h3>                     
                             <button style={classes.Button}>ADD TO CART</button>                        
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Home;
