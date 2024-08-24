import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function CardComponent(
    {children} : {children: React.ReactNode}

) {

  const CardStyles = {
    padding: "100px",
    margin: "10px", 
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    border: "1px solid #ddd", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
  
  return (
    <div style={CardStyles}>
      {children}

    </div>
  );
}




