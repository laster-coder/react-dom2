import React, { useState } from"react";
import { createRoot}from "react-dom/client"
import "./index.css"

const Cell = function(props){
	return (<div className="cell" onClick={props.onClick}>
		{props.text}
		</div>)
}


const Chessboard =function(){
	const [Cells, steCells]=useState([
		[null,null,null],
		[null,null,null],
		[null,null,null],
	])
	const [n,setN]=useState(0)

	const onClickCell =(row,col)=>{
		console.log('onclickCell');
		console.log('行'+row);
		console.log('列'+col);
		setN(n + 1)
		console.log(n);
		const copy =JSON.parse(JSON.stringify(Cells))
		copy[row][col]= n % 2 == 0 ? 'X' : 'O'
		steCells(copy)
	}
	return(
		<div>
			{Cells.map((items,row)=>{
				return(
					<div className="row">
						{items.map((item,col)=>{
							return<div className="cell">
								<Cell text={item} onClick={()=>onClickCell(row,col)} /></div>
						})}
					</div>
				)
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