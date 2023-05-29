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
	const [finished,setFinished]=useState(false)
	const [n,setN]=useState(0)
    const tell=(cells)=>{
	for(let i=0;i<3;i++){
		if(cells[i][0]===cells[i][1]&&cells[i][1]===cells[i][2]&&
			cells[i][0]!==null)
			{console.log(cells[i][0]+'赢了')
			setFinished(true)
			break;
		}
	}
	for(let i=0;i<3;i++){
		if(cells[0][i]===cells[1][i]&&cells[1][i]===cells[2][i]&&
			cells[0][i]!==null)
			{console.log(cells[0][i]+'赢了')
			setFinished(true)
			break;
		}
	}
	if(cells[0][0]===cells[1][1]&&
		cells[1][1]===cells[2][2]&&
		cells[0][0]!==null){
			{console.log(cells[0][0]+'赢了')
			setFinished(true)}
		}
		if(cells[0][2]===cells[1][1]&&
			cells[1][1]===cells[2][0]&&
			cells[1][1]!==null){
				{console.log(cells[1][1]+'赢了')
				setFinished(true)}
			}
}
	const onClickCell =(row,col)=>{
		console.log('onclickCell');
		console.log('行'+row);
		console.log('列'+col);
		setN(n + 1)
		console.log(n);
		const copy =JSON.parse(JSON.stringify(Cells))
		copy[row][col]= n % 2 == 0 ? 'X' : 'O'
		steCells(copy)
		tell(copy)
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
			{finished && <div className="gameOver">游戏结束</div>}
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