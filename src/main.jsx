import React from"react";
import {ReactRoot, createRoot}from "react-dom/client"
import "./index.css"

const Cell=function(){
	return <div className="cell"></div>
}
const Cells=[
	[null,null,null],
	[null,null,null],
	[null,null,null],
]

const Chessboard=function(){
return(
	<div>
		{Cells.map((items)=>{
			return(<div className="row">
				{items.map((item)=>{
					return <div className="cell">
						<Cell text={item}/>
					</div>
				})}
			</div>)
		})}
	</div>
)
}

const container =document.getElementById("root")
const root=createRoot(container)
root.render(
	<div>
<Chessboard />
	</div>
)