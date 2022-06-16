import React,{useState} from "react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button, Row, Col, Card, CardBody, Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Tic=()=>{
    let arr = new Array(9).fill("")
    let [winner_message, setWinnerMessage] = useState("") 
    let [whose_turn, setWhoseTurn] = useState(true) 

    // play again
    function playAgain(){
         arr.fill("")
         setWinnerMessage("")
         setWhoseTurn(true)
    }

    // check who there is a winner
    function checkWinner(){

        // check rows
        if(arr[0] == arr[1] && arr[1]==arr[2] && arr[0]!=""){
            setWinnerMessage(arr[0]+" is the winner")
        }
        else if(arr[3] == arr[4] && arr[4]==arr[5] && arr[3]!=""){
            setWinnerMessage(arr[3]+" is the winner")
        }
        else if(arr[6] == arr[7] && arr[7]==arr[8] && arr[6]!=""){
            setWinnerMessage(arr[6]+" is the winner")
        }
        // check columns 
        else if(arr[0] == arr[3] && arr[3]==arr[6] && arr[0]!=""){
            setWinnerMessage(arr[0]+" is the winner")
        }   
        else if(arr[1] == arr[4] && arr[4]==arr[7] && arr[1]!=""){
            setWinnerMessage(arr[1]+" is the winner")
        }
        else if(arr[2] == arr[5] && arr[5]==arr[8] && arr[2]!=""){
            setWinnerMessage(arr[2]+" is the winner")
        }
        // check diagonals
        else if(arr[0] == arr[4] && arr[4]==arr[8] && arr[0]!=""){
            setWinnerMessage(arr[0]+" is the winner")
        }
        else if(arr[2] == arr[4] && arr[4]==arr[6] && arr[2]!=""){
            setWinnerMessage(arr[2]+" is the winner")
        }
        else if(arr.indexOf("") == -1){
            setWinnerMessage("Draw")
        }

    }
    // playersMove
    function playersMove(index){
          if(setWinnerMessage){
            return toast.error('Game has already got over');
          }
          else if(arr[index] !=""){
            return toast.error('This cell is already occupied');
          }
          else if(arr[index] == ""){
            arr[index] =  whose_turn?"Cross":"Circle"
            setWhoseTurn(!whose_turn)

          }
          checkWinner()
    }

    return(
           
        <Container className="p-5">
            <ToastContainer position="bottom-center"/>
            <Row>
                <Col md={6} className="offset-md-3">
                     {
                        winner_message? (
                            <div className="text-center">
                                <h1 className="text-uppercase text-center">Winner is {winner_message}</h1>
                                <Button color="Sucess" onClick={playAgain}></Button>
                            </div>
                        ):(
                            
                        )
                     }
                </Col>
            </Row>
        </Container>
    )
     
}


export default Tic;