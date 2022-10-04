import React from 'react'

const url ="https://tse3.mm.bing.net/th?id=OIP.M5zTod2jHjvsUh2Oe5K5cQHaHa&pid=Api&P=0"

const classes = {
    header:{
        backgroundColor:"black",
        height:"70px",
        color:"white",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        cursor:"pointer",
    },
    ImageWrapper: {
      marginRight:"20px",
    },
    Image:{
        height:"50px",
        width:"50px",
        borderRadius:"50%",
    },
    Span:{
        position: "absolute",
        top: "5px",
        fontSize: "18px",
        backgroundColor: "red",
        borderRadius: "50%",
        height: "27px",
        width: "27px",
        textAlign: "center",
        fontWeight: "600",
        right: "15px",
    }
   
}
const Header = (props) => {
    return (
        <div style = {classes.header}>
             <h2>Redux APP</h2>
             <div style={classes.ImageWrapper}>
              <span style={classes.Span}>{props.cardData.length}</span>
               <img src={url} alt="addtocart" style={classes.Image}/>
             </div>
        </div>
    )
}

export default Header;
